<script lang="ts" setup>
const error = useError();
</script>

<template>
  <v-app>
    <v-main>
      <v-container class="full-height d-flex align-center justify-center">
        <v-card>
          <v-card-text>
            <strong>{{ error }}</strong>
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.full-height {
  height: 100vh;
}
</style>
