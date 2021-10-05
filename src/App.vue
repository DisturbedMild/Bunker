<template>
 <v-app >
  <the-header></the-header>
  <v-main class="grey darken-4"></v-main>
  <the-footer></the-footer>
 </v-app>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";

export default {
 components: {
  TheHeader,
  TheFooter,
 },
 data() {
  return {};
 },
};
</script>
