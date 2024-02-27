<script lang="ts" setup>
const drawer = ref(true);
const rail = ref(true);
import { MENU_DATA } from "./../layouts/menu.data"
</script>

<template>
  <v-card class="navbar">
    <v-layout>
      <HeaderMenu @rail="rail = !rail" />

      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        app
        color="#0E121D"
        @click="rail = false"
      >
        <v-list>
          <v-list-item
            :class="rail ? 'ml-1' : ''"
            density="compact"
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="Sandra Adams"
            subtitle="sandra_a88@gmailcom"
          >
            <template v-slot:append>
              <v-btn
                variant="text"
                icon="mdi-chevron-left"
                @click.stop="rail = !rail"
              ></v-btn>
            </template>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact">
          <NuxtLink
            v-for="(item, i) in MENU_DATA"
            :key="i"
            :value="item.title"
            :to="item.url"
          >
            <v-list-item>
              <template v-slot:prepend>
                <v-icon :icon="item.icon" />
              </template>

              <v-list-item-title class="wonder-font">
                {{ item.title }}
              </v-list-item-title>
            </v-list-item>
            <!-- <Icon :name="item.icon" class="mr-3" />
            <span>{{ item.name }}</span> -->
          </NuxtLink>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>

<style scoped>
* {
  color: #576081 !important;
}
</style>
