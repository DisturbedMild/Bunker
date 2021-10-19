<template>
 <v-row>
  <search-game-component></search-game-component>
  <current-games></current-games>
 </v-row>
</template>

<script>
import CurrentGames from "./CurrentGames.vue";
import SearchGameComponent from "./SearchGameComponent.vue";

export default {
 components: {
  CurrentGames,
  SearchGameComponent,
 },
};
</script>
