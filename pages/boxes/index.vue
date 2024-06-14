<script lang="ts" setup>
import { CARDS_DATA } from "~/data/cards.data";

let boxesUrl = '';
if (process.env.API) {
  boxesUrl = `${process.env.API[0]}/api/box`;
}

const isLoading = ref(true);
const loadingSkeleton = ref<boolean>(true);
const boxes = ref([]);

const asyncDataResponse = useAsyncData<{ data: any[] }>(async () => {
  const response = await fetch(
    boxesUrl
  );
  const data = await response.json();
  boxes.value = data.data;
  isLoading.value = false;
  updateLoading();
  return { data };
});

const updateLoading = () => {
  setInterval(() => {
    loadingSkeleton.value = false;
  }, 500);
};

const someAction = () => {
  console.log("someAction");
};

const truncate = (str: string, num: number) => {
  if (str !== null) {
    if (str.length > num) {
      return `${str.substring(num, 0)}...`;
    }
  }
  return str;
};
</script>

<template>
  <v-row>
    <v-col cols="12">
      <h1 class="wonder-font font-bold text-2xl">Boxes</h1>
    </v-col>
    <v-row v-if="isLoading" class="ma-0">
      <v-col
        v-for="(item, i) in CARDS_DATA"
        :key="i"
        cols="12"
        sm="6"
        md="4"
        lg="2"
      >
        <v-skeleton-loader
          :elevation="24"
          class="justify-center"
          color="rgb(48, 48, 70);"
          type="image, sentences, button"
          rounded="xl"
          :loading="true"
        />
      </v-col>
    </v-row>
    <v-row v-else class="ma-0">
      <v-col
        v-for="(item, i) in boxes"
        :key="i"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        xl="2"
      >
        <v-skeleton-loader
          :elevation="24"
          class="justify-center"
          color="rgb(48, 48, 70);"
          type="image, sentences, button"
          rounded="xl"
          :loading="!asyncDataResponse.pending.value && loadingSkeleton"
        >
          <v-card color="#111623" link rounded="xl" @click="someAction">
            <NuxtLink :to="`boxes/${item.id}`">
              <v-img :src="item.image" cover>
                <v-toolbar color="rgba(0, 0, 0, 0)" theme="dark">
                  <v-toolbar-title class="text-h6">
                    {{ item.title }}
                  </v-toolbar-title>
                </v-toolbar>
              </v-img>
              <v-card-actions
                class="full-height d-flex flex-column align-center justify-center pt-0"
                style="margin-top: 15px"
              >
                <span class="text-description">{{
                  truncate(item.category.title, 15)
                }}</span>
                <v-btn>buy ${{ item.price }}</v-btn>
              </v-card-actions>
            </NuxtLink>
          </v-card>
        </v-skeleton-loader>
      </v-col>
    </v-row>
  </v-row>
</template>

<style scoped>
* {
  /* font-family: "fairy"; */
  font-weight: bold;
  text-decoration: none;
}
</style>
