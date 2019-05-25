<template>
   <el-menu-item :index="menu.id">
      <i :class="'iconfont '+menu.icon"></i>
      <span slot="title" v-if="menu.link" >
         <router-link tag="span" :to="menu.link">{{menu.title}}</router-link>
      </span>
      <span slot="title" v-else="!menu.link" >
         {{menu.title}}
      </span>
   </el-menu-item>
</template>

<script>
    export default {
        name: "MenuItem",
        props:{
            menu: {}
        }
    }
</script>

<style scoped>
.iconfont {
   margin-right: 10px;
}
</style>
