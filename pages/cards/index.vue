<script lang="ts" setup>
import { CARDS_DATA } from "~/data/cards.data";
const loading = ref<boolean>(true);

const updateLoading = () => {
  setInterval(() => {
    loading.value = false;
  }, 300);
};

onMounted(() => {
  updateLoading();
});

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
      <h1 class="wonder-font font-bold text-2xl">Cards</h1>
    </v-col>
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
        :loading="loading"
      >
        <v-card color="#111623" link rounded="xl" @click="someAction">
          <NuxtLink :to="`cards/${item.id}`">
            <v-img :src="item.img" cover>
              <v-toolbar color="rgba(0, 0, 0, 0)" theme="dark">
                <v-spacer />
                <v-toolbar-title class="text-category">
                  {{ item.title }}
                </v-toolbar-title>
              </v-toolbar>
            </v-img>
            <v-card-actions
              class="full-height d-flex flex-column align-center justify-center pt-0"
            >
              <span class="text-description">{{
                truncate(item.text, 15)
              }}</span>
              <v-btn>buy ${{ item.price }}</v-btn>
            </v-card-actions>
          </NuxtLink>
        </v-card>
      </v-skeleton-loader>
    </v-col>
  </v-row>
</template>

<style scoped>
* {
  /* font-family: "fairy"; */
  font-weight: bold;
  text-decoration: none;
}
</style>
