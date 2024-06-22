<template>
  <div class="mt-[4rem] flex flex-col gap-3">
    <div class="api-data">
      {{ apiData }}
    </div>
    <div class="strapi-content">
      {{ content }}
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
const { locale } = useI18n();
const { find } = useStrapi();

const runtimeConfig = useRuntimeConfig();
axios.defaults.baseURL = runtimeConfig.public.apiUrl;

const apiData = ref(null);
const content = ref(null);

find("home-page", {
  locale: locale.value,
  populate: "*",
})
  .then((response) => {
    content.value = response.data.attributes;
  })
  .catch((e) => {
    console.error("Error fetching Strapi data");
    return;
  });

axios
  .get("/WeatherForecast")
  .then((e) => {
    apiData.value = e.data;
  })
  .catch((e) => {
    console.error("Error fetching API data");
  });
</script>
<style lang="scss"></style>
