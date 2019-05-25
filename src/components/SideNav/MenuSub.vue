<template>
   <el-submenu :index="menu.id" >
      <template slot="title">
         <i :class="'iconfont '+menu.icon"></i>
         <span slot="title">{{menu.title}}</span>
      </template>
      <template v-for="child in menu.children">
         <menu-item v-if="child.children === undefined" :menu="child" :key="child.id"/>
         <menu-sub v-else :menu="child" :key="child.id"/>
      </template>
   </el-submenu>
</template>

<script>
   import MenuItem from './MenuItem'
    export default {
        name: "MenuSub",
        props: {
            menu: {}
        },
        components:{
            MenuItem
        },
    }
</script>

<style scoped>
   .iconfont {
      margin-right: 10px;
   }
</style>
