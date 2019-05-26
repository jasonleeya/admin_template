<template>
   <div id="app">
      <router-view/>
   </div>
</template>

<style lang="scss">
   @import "assets/styles/theme/index.scss";
   html,body,#app {
      width: 100%;
      height: 100%;
   }
   #app{
      min-width: 1000px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
   }

</style>
