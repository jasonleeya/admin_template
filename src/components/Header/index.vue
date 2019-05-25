<template>
   <div class="header">
      <div class="header-top">
         <i @click="toggleSideNavCollapse" v-if="!asideCollapse" class="iconfont iconcaidanguan"></i>
         <i @click="toggleSideNavCollapse" v-else="asideCollapse" class="iconfont iconcaidankai"></i>
         <span class="greeting">你好，JasonLee</span>
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
        data() {
            return{
                asideCollapse:false
            }
        },
        methods: {
            toggleSideNavCollapse() {
                this.$store.dispatch('toggleSideNavCollapse')
            }
        },
        watch:{
            '$store.state.isSideNavCollapse'() {
                this.asideCollapse= this.$store.state.isSideNavCollapse
            }
        }
    }
</script>

<style scoped>
   .header {
      height: 100%;
   }


   .iconcaidanguan,.iconcaidankai {
      margin-left: 20px;
      font-size: 20px;
   }
   .header-top {
      height: 40px;
      line-height: 40px;
      position: relative;
   }

   .greeting {
      font-size: 15px;
      position: absolute;
      right: 20px;
   }
</style>
