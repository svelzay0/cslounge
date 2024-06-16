export const setupGlobalSettings = (): void => {
  const nuxtApp = useNuxtApp();
  const {
    apiUrl,
  } = nuxtApp.$config.public;
  provide('globalVars', {
    apiUrl,
  })
}