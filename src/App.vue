<template>
 <v-app>
  <the-header></the-header>
  <v-main class="grey darken-4 mt-8">
   <v-container >
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
   </v-container>
  </v-main>
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
