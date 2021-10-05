<template>
 <v-content class="mt-16 pa-8 game-settings">
     <div class="game-heading">
         <h2 class="white--text mb-2 game-heading__header">Поиск Игры</h2>
         <p class="white--text game-heading__subtitle">Добавьте настройки для поиска игры</p>
     </div>
     <div class="teal--text darken-3 mb-5">
         <div class="game-users-in-search">Игроков в поиске: <span class="white--text">11</span></div>
     </div>
     <div class="mb-5 game-settings__game-type">
         <base-button class="mr-4 game-settings--white">Обычная игра</base-button>
        <base-button class="game-settings--red">Рейтинговая игра</base-button>
     </div>
    <div class="game-settings__panel">
        <base-button class="mr-4">Создать игру</base-button>
        <base-button>Поиск игры</base-button>
    </div>
 </v-content>
</template>

<style scoped>
.game-settings {
 border: 1px solid #fff;
 max-width: 600px;
 width: 100%;
 border-radius: 5px;
}
.game-settings--white {
    border: 2px solid #fff;
}
.game-settings--white:hover {
    background-color: #fff;
    color: #00695C;
}
.game-settings--red {
    border: 2px solid #C62828;
}
.game-settings--red:hover {
    background: #C62828;
}
</style>
