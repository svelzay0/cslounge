<script lang="ts" setup>
//
</script>

<!-- <template>
  <v-app>
    <NuxtLayout>323</NuxtLayout>
    <Navbar />
    <v-main class="app">
      <v-container fluid>
        <div class="d-flex align-center py-3">
          <div class="display-1 pl-6 pb-2">
            <span class="main__title"> 123213 </span>
          </div>
        </div>
        <keep-alive>
          <router-view />
        </keep-alive>
      </v-container>
    </v-main>
  </v-app>
</template> -->
<template>
  <v-app>
    <NuxtLayout>
      <Navbar />
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>  
