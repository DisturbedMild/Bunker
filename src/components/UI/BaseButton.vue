<template>
 <button><slot></slot></button>
</template>

<style scoped>
button {
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
}
button:hover {
 background-color: #00695c;
 color: #fff;
}
</style>
