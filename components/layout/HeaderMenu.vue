<template>
  <v-app-bar color="#111623" :elevation="24" height="56" app>
    <v-app-bar-nav-icon
      class="ml-1"
      color="white"
      @click="$emit('rail')"
    ></v-app-bar-nav-icon>
    <v-spacer />
    <v-app-bar-title class="wonder-font">Genshin cards</v-app-bar-title>

    <template v-slot:append>
      <v-btn icon="mdi-heart"></v-btn>

      <v-btn icon="mdi-magnify"></v-btn>

      <v-btn icon="mdi-dots-vertical"></v-btn>
    </template>
  </v-app-bar>
</template>
