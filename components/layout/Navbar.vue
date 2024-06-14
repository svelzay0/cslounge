<script lang="ts" setup>
const drawer = ref(true);
const rail = ref(true);
import { MENU_DATA } from "~/data/menu.data";

// const handleSelect => (route) {
//       scroll({
//         top: 0,
//         behavior: 'smooth',
//       });
//       let firstBg = null;
//       let secondBg = null;
//       if (this.url === 'home') {
//         firstBg = document.querySelector('.home-bg-1');
//         secondBg = document.querySelector('.home-bg-2');
//         if (firstBg) {
//           firstBg.setAttribute('style', 'animation: clear 0.4s infinite alternate;');
//           secondBg.setAttribute('style', 'animation: clear 0.4s infinite alternate;');
//         }
//       }
//       this.url = route;
//       document.querySelector('.home').setAttribute('style', 'animation: movedown 0.4s infinite alternate;');
//       if (route !== 'accounts') {
//         this.setAccountPage(1);
//       }
//       if (route !== 'boost') {
//         this.setOrderPage(0);
//       }
//       setTimeout(() => {
//         document.querySelector('.home').setAttribute('style', 'animation: moveup 0.4s linear alternate;');
//         if (firstBg) {
//           if (this.homeSliderIndex === 0) {
//             firstBg.setAttribute('style', 'display: block; animation: backfromclear 0.4s linear alternate; z-index: 2');
//             secondBg.setAttribute('style', 'display: block; animation: backfromclear 0.4s linear alternate; z-index: 1');
//           } else {
//             firstBg.setAttribute('style', 'display: block; animation: backfromclear 0.4s linear alternate; z-index: 1');
//             secondBg.setAttribute('style', 'display: block; animation: backfromclear 0.4s linear alternate; z-index: 2');
//           }
//         }
//         if (route === 'accounts' && this.$route.name === 'accounts')  {
//           location.reload();
//         }
//         return this.$router.push({ name: route });
//       }, 400);
//     },
</script>

<template>
  <LayoutHeaderMenu @rail="rail = !rail" />

  <!-- location="right" -->
  <v-navigation-drawer
    v-model="drawer"
    :rail="rail"
    permanent
    app
    color="rgb(14, 18, 29, 0.8)"
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
      <NuxtLink v-for="(item, i) in MENU_DATA" :key="i" :to="item.url">
        <v-list-item :prepend-icon="item.icon" :value="item.title">
          <v-list-item-title class="wonder-font">
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </NuxtLink>
    </v-list>
  </v-navigation-drawer>

  <LayoutFooterMenu />
</template>

<style scoped>
* {
  color: #9dabe0cf !important;
  text-decoration: none;
}
</style>
