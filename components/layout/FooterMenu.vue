<script lang="ts" setup>
const icons = reactive(["mdi-facebook", "mdi-twitter", "mdi-instagram"]);
</script>

<template>
  <v-footer app class="d-flex flex-column pa-0">
    <div class="footer-class d-flex w-100 align-center px-4">
      <strong>Get connected with us on social networks!</strong>

      <v-spacer></v-spacer>

      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="plain"
        size="small"
      ></v-btn>
    </div>
  </v-footer>
</template>

<style scoped>
.footer {
  background: none;
}
.footer-class {
  background: rgba(14, 18, 29, 0.8);
}
</style>
