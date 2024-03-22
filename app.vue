<script setup lang="ts">
const { pending, data: posts } = useLazyFetch("/api/box");
console.log(1, { pending, data: posts });
</script>

<template>
  <v-app>
    <NuxtLayout>
      <LayoutNavbar />
      <v-main>
        <NuxtPage class="ma-4" />
      </v-main>
    </NuxtLayout>
  </v-app>
</template>
