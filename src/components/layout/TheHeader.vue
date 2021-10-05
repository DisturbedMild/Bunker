<template>
 <v-app-bar app class="grey darken-4" border="botton" colored-border>
  <v-container class="d-flex align-center justify-space-between">
   <v-app-bar-title class="white--text ">
       <router-link to="/home" class="text-decoration-none white--text">BUNKER</router-link>
    </v-app-bar-title>
   <v-item-group width="900">
    <v-item class="mx-4">
     <router-link to="/game">Найти Игру</router-link>
    </v-item>
    <v-item class="mx-4">
     <router-link to="/rules">Правила</router-link>
    </v-item>
    <v-item class="mx-4">
     <router-link to="/cards">Карточки</router-link>
    </v-item>
    <v-item class="mx-4">
     <router-link to="/about">Про Проект</router-link>
    </v-item>
    <v-item class="mx-4">
     <base-button>Логин</base-button>
    </v-item>
    <v-item class="mx-4">
     <base-button>Регистрация</base-button>
    </v-item>
   </v-item-group>
  </v-container>
 </v-app-bar>
</template>

<style scoped>
.v-item-group {
 /* width: 800px; */
 display: flex;
 justify-content: space-between;
}
.v-item-group a {
 display: inline-flex;
 justify-content: center;
 align-items: center;
 height: 40px;
 width: 110px;
 border-radius: 17px;
 border: 2px solid #00695c;
 text-decoration: none;
 color: white;
 font-size: 14px;
 transition: 0.3s all;
 font-weight: 700;
 font-family: Arial, sans-serif;
}
.v-item-group a:hover {
 background-color: #00695c;
 color: #fff;
}
</style>
