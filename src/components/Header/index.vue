<template>
   <div class="header">
      <div class="top">
         <i @click="toggleSideNavCollapse" class="iconfont iconcaidan"></i>
      </div>
      <bookmark></bookmark>
   </div>
</template>

<script>
   import Bookmark from './Bookmark'
    export default {
        name: "index",
        components: {
            Bookmark
        },
        methods:{
            toggleSideNavCollapse() {
               this.$store.dispatch('toggleSideNavCollapse')
            }
        }
    }
</script>

<style scoped>
   .header {
      height: 100%;
   }
   .iconcaidan {
      margin-left: 20px;
   }
   .top {
   height: 40px;
      line-height: 40px;
      /*display: inline-block;*/
   }
</style>
