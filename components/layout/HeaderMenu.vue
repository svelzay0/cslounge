<script lang="ts" setup>
// toDo - сделать нормальный рефреш
// разобраться почему ошибка при logout и refresh (в onMounted())

// import { useScheduler } from '#scheduler'
// import { useInterval } from '@vueuse/core'
// console.log(apiUrl)
// const {
//   apiUrl,
// } = nuxtApp.$config.public;

interface RegistrationResponseData {
  access_token: string;
  token_type: string;
  expires_in: string;
}

const globalVars:any = inject('globalVars');
const rotateDeg = ref(0);

let isTokenLegit = ref<boolean>(false);
let dialogCompose = ref<boolean>(false);
let showEyePassword = ref<boolean>(false);
let showEyePasswordConfirm = ref<boolean>(false);
let isFormValid = ref<boolean>(true);
let isReg = ref<boolean>(false);
let afterLogout = ref<boolean>(false);
let email = ref<string>("");
let password = ref<string>("");
let nickname = ref<string>("");
let confirMpassword = ref<string>("");
let timeNow = ref<number>(Date.now());
let registrationUrl = `${globalVars.apiUrl}/api/auth/register`;
let loginUrl = `${globalVars.apiUrl}/api/auth/login`;
let logoutUrl = `${globalVars.apiUrl}/api/auth/logout`;
let refreshUrl = `${globalVars.apiUrl}/api/auth/refresh`;
// const scheduler = ModuleOptions();

onMounted(async () => {
  if (localStorage.getItem("accessToken")) {
    refresh();
  }
});

const rules = reactive({
  passwordRules: [
    (value: string | boolean) => !!value || "This field is required",
    (value: string) => (value && value.length >= 6) || "Minimum 6 characters",
    (value: string) => value === password.value || "Passwords do not match",
  ],
  emailRules: [
    (value: string | boolean) => !!value || "This field is required",
    (value: string) => /.+@.+..+/.test(value) || "Must be a valid email",
  ],
});

const switchLogin = () => {
  rotateDeg.value += 360;
  isReg.value = !isReg.value;
  console.log(isReg.value);
};

const logout = async () => {
  const { data, error } = await useFetch(logoutUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${localStorage.getItem(
        "tokenType"
      )} ${localStorage.getItem("accessToken")}`,
    },
  });
  if (data.value) {
    const response = data.value as any;
    // const responseData: RegistrationResponseData = response.data;
    console.log("logout response", response);
    afterLogout.value = true;
    localStorage.removeItem("accessToken");
  } else {
    console.error("Ошибка выхода пользователя:", error);
  }
};

const refresh = async () => {
  try {
    const { data, error } = await useFetch(refreshUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem(
          "tokenType"
        )} ${localStorage.getItem("accessToken")}`,
      },
    });
    if (data.value) {
      const response = data.value as any;
      const responseData: RegistrationResponseData = response.data;
      console.log("token is refreshed", response);
      localStorage.setItem("accessToken", responseData.access_token);
      localStorage.setItem("tokenCreated", timeNow.toString());
      localStorage.setItem("accessTokenExpiresIn", responseData.expires_in); // 10800
      localStorage.setItem("tokenType", responseData.token_type); // bearer
      isTokenLegit.value = true;
      // useInterval(refresh())
      // scheduler.run(() => { // refreshing token every 3 hours
      //   if (afterLogout) {
      //     console.log('sheduler is worked');
      //     refresh();
      //   }
      // }).everySeconds(parseInt(responseData.expires_in) - 10); // or everyThreeHours()
    } else {
      isTokenLegit.value = false;
      console.error("Ошибка обновления токена пользователя:", error);
    }
  } catch (err) {
    console.error("Ошибка обновления токена пользователя:", err);
  }
};

const onSubmit = async (email: string, password: string, isReg: boolean) => {
  isReg ? console.log("login") : console.log("registration");

  if (isFormValid.value) {
    // login
    if (isReg) {
      const { data, error } = await useFetch(loginUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem(
            "tokenType"
          )} ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (data.value) {
        const response = data.value as any;
        const responseData: RegistrationResponseData = response.data;
        localStorage.setItem("accessToken", responseData.access_token);
        localStorage.setItem("tokenCreated", timeNow.toString());
        dialogCompose.value = false;
        afterLogout.value = false;
        isTokenLegit.value = true;
        // scheduler.run(() => { // refreshing token every 3 hours
        //   if (afterLogout) {
        //     console.log('sheduler is worked');
        //     refresh();
        //   }
        // }).everySeconds(parseInt(responseData.expires_in) - 10);
      } else {
        console.error("Ошибка логина пользователя:", error);
      }
    }
    // registration
    else {
      const { data, error } = await useFetch(registrationUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (data.value) {
        const response = data.value as any;
        const responseData: RegistrationResponseData = response.data;
        localStorage.setItem("accessToken", responseData.access_token);
        localStorage.setItem("accessTokenExpiresIn", responseData.expires_in); // 10800
        localStorage.setItem("tokenType", responseData.token_type); // bearer
        switchLogin();
      } else {
        console.error("Ошибка регистрации пользователя:", error);
      }
    }
  } else {
    console.log("not valid");
  }
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
    <v-app-bar-title class="wonder-font">CSLOUNGE</v-app-bar-title>

    <template v-slot:append>
      <v-btn icon="mdi-heart"></v-btn>

      <v-btn icon="mdi-magnify"></v-btn>

      <v-btn icon="mdi-dots-vertical"></v-btn>

      <v-btn v-if="isTokenLegit"
        color="#576081"
        text="LOGOUT"
        variant="tonal"
        @click="logout()"
      ></v-btn>

      <v-btn v-else
        color="#576081"
        text="LOGIN"
        variant="tonal"
        @click="dialogCompose = true"
      ></v-btn>

      <v-btn
        color="#576081"
        text="refresh"
        variant="tonal"
        @click="refresh"
      ></v-btn>
    </template>
  </v-app-bar>

  <!-- auth modal -->
  <v-dialog v-model="dialogCompose" max-width="600">
    <v-card
      :style="{
        transform: `rotateY(${rotateDeg}deg)`,
        transition: 'transform 1s',
      }"
      color="#111623"
      rounded="xl"
    >
      <v-img height="200" src="/girls.png" cover>
        <v-toolbar color="rgba(0, 0, 0, 0)" theme="dark">
          <template v-slot:prepend>
            <v-btn icon="mdi-account"></v-btn>
          </template>

          <v-toolbar-title class="text-h6">
            {{ isReg ? "Login" : "Registration" }}
          </v-toolbar-title>

          <template v-slot:append>
            <v-btn icon="mdi-close" @click="dialogCompose = false"></v-btn>
          </template>
        </v-toolbar>
      </v-img>
      <v-form
        v-model="isFormValid"
        lazy-validation
        @submit.prevent="onSubmit(email, password, isReg)"
      >
        <v-card-text>
          <v-row dense>
            <v-col cols="12" v-if="!isReg">
              <v-text-field
                v-model="nickname"
                label="Nickname"
                focused
                variant="outlined"
              ></v-text-field>
            </v-col>

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
                :append-icon="showEyePassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showEyePassword ? 'text' : 'password'"
                :rules="rules.passwordRules"
                @click:append="showEyePassword = !showEyePassword"
              ></v-text-field>
            </v-col>

            <v-col cols="12" v-if="!isReg">
              <v-text-field
                v-model="confirMpassword"
                label="Confirm Password*"
                variant="outlined"
                :type="showEyePasswordConfirm ? 'text' : 'password'"
                :append-icon="
                  showEyePasswordConfirm ? 'mdi-eye' : 'mdi-eye-off'
                "
                :rules="rules.passwordRules"
                @click:append="showEyePasswordConfirm = !showEyePasswordConfirm"
              >
              </v-text-field>
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="pa-4">
          <v-btn
            color="#576081"
            :text="isReg ? 'switch to registration' : 'switch to login'"
            variant="tonal"
            @click="switchLogin"
          ></v-btn>

          <v-spacer></v-spacer>

          <v-btn
            text="close"
            variant="plain"
            @click="dialogCompose = false"
          ></v-btn>

          <v-btn
            color="#576081"
            :text="isReg ? 'Login' : 'Registration'"
            variant="tonal"
            type="submit"
          ></v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>
