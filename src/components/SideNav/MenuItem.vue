<template>
   <el-menu-item :index="menu.id">
      <i :class="'iconfont '+menu.icon"></i>
      <span slot="title" v-if="menu.path" >
         <router-link tag="span" :to="menu.path">{{menu.title}}</router-link>
      </span>
      <span slot="title" v-else="!menu.path" >
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
