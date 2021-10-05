<template>
 <button class="py-3 px-8"><slot></slot></button>
</template>

<style scoped>
button {
 display: inline-flex;
 justify-content: center;
 align-items: center;
 height: 40px;
 border-radius: 17px;
 border: 2px solid #00695c;
 text-decoration: none;
 color: white;
 font-size: 14px;
 transition: 0.3s all;
 font-weight: 700;
 font-family: Arial, sans-serif;
}
button:hover {
 background-color: #00695c;
 color: #fff;
}
</style>
