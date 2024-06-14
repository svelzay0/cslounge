<script lang="ts" setup>
let dialogCompose = ref(false);
let show1 = ref(false);
let show2 = ref(false);
let valid = ref(true);
let email = ref("");
let password = ref("");

const getImageUrl = (name: string) => {
  return new URL(`../../lib/Carousel/assets/${name}`, import.meta.url).href;
};

const rules = reactive({
  passwordRules: [
    (value: string | boolean) => !!value || "This field is required",
    (value: string) => (value && value.length >= 6) || "Minimum 6 characters",
  ],
  emailRules: [
    (value: string | boolean) => !!value || "This field is required",
    (value: string) => /.+@.+..+/.test(value) || "Must be a valid email",
  ],
});

const onSubmit = () => {
  console.log("submit");
};
const login = async (email: string, password: string) => {
  // await account.createEmailSession(email, password);
  // const response = await account.get();
  // if (response) {
  //   store.set({
  //     email: response.email,
  //     name: response.name,
  //     status: response.status,
  //   });
  //   emailRef.value = "";
  //   passwordRef.value = "";
  //   nameRef.value = "";
  //   router.push("/");
  // }
};

const register = async () => {
  // await account.create(
  //   ID.unique(),
  //   emailRef.value,
  //   passwordRef.value,
  //   nameRef.value
  // );
  // login(emailRef.value, passwordRef.value);
};
</script>

<template>
  <v-app-bar color="rgba(14, 18, 29, 0.8)" :elevation="24" height="56" app>
    <v-app-bar-nav-icon
      class="ml-1"
      color="white"
      @click="$emit('rail')"
    ></v-app-bar-nav-icon>
    <v-spacer />
    <!-- <v-app-bar-title class="wonder-font">cslounge</v-app-bar-title> -->

    <template v-slot:append>
      <v-btn icon="mdi-heart"></v-btn>

      <v-btn icon="mdi-magnify"></v-btn>

      <v-btn icon="mdi-dots-vertical"></v-btn>

      <v-btn
        color="#576081"
        text="Войти"
        variant="tonal"
        @click="dialogCompose = true"
      ></v-btn>
    </template>
  </v-app-bar>
  <!-- auth modal -->
  <v-dialog v-model="dialogCompose" max-width="600">
    <v-card color="#111623" rounded="xl">
      <v-img height="200" src="/girls.png" cover>
        <!-- src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg" -->
        <v-toolbar color="rgba(0, 0, 0, 0)" theme="dark">
          <template v-slot:prepend>
            <v-btn icon="mdi-account"></v-btn>
          </template>

          <v-toolbar-title class="text-h6"> Login </v-toolbar-title>

          <template v-slot:append>
            <v-btn icon="mdi-close" @click="dialogCompose = false"></v-btn>
          </template>
        </v-toolbar>
      </v-img>
      <v-form ref="sendForm" v-model="valid" lazy-validation>
        <v-card-text>
          <v-row dense>
            <v-col cols="12">
              <v-text-field
                v-model="email"
                label="Email*"
                focused
                variant="outlined"
                :rules="rules.emailRules"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="password"
                label="Password*"
                variant="outlined"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                :rules="rules.passwordRules"
                @click:append="show1 = !show1"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                outlined
                v-model="password"
                label="Confirm Password*"
                variant="outlined"
                :type="show2 ? 'text' : 'password'"
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="rules.passwordRules"
                @click:append="show2 = !show2"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="pa-4">
          <v-btn
            color="#576081"
            text="Registration"
            variant="tonal"
            @click="dialogCompose = false"
          ></v-btn>

          <v-spacer></v-spacer>

          <v-btn
            text="close"
            variant="plain"
            @click="dialogCompose = false"
          ></v-btn>

          <v-btn
            color="#576081"
            text="log in"
            variant="tonal"
            @click="dialogCompose = false"
          ></v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>
