<template>
   <div class="side-nav">
      <div class="logo">
         <img class="logo-img" :src="require('@/assets/logo.png')" alt="">
         <div class="logo-text" v-if="!asideCollapse">Logo</div>
      </div>
      <el-menu class="side-nav-menu"
               :collapse="asideCollapse"
               :unique-opened="true"
               ref="menu">
         <template v-for="menu in list">
            <menu-item v-if="menu.children === undefined" :menu="menu" :key="menu.id"/>
            <menu-sub v-else :menu="menu" :key="menu.id"/>
         </template>
      </el-menu>
   </div>

</template>

<script>
    import MenuItem from './MenuItem'
    import MenuSub from './MenuSub'

    export default {
        name: "index",
        components: {
            MenuItem,
            MenuSub
        },
        data() {
            return {
                asideCollapse: false,
                list: [
                    {
                        title: '一级菜单1',
                        id: 'f1',
                        icon: 'iconguanbi1',
                        children: [
                            {
                                title: '二级菜单1-1',
                                id: 's1',
                                children: [
                                    {
                                        title: '三级菜单1-1-1',
                                        id: 't1',
                                        path: '/'
                                    }, {
                                        title: '三级菜单1-1-2',
                                        id: 't2',
                                        path: '/two'
                                    },

                                ]
                            }, {
                                title: '二级菜单1-2',
                                id: 's3',
                                path: '/three'
                            }, {
                                title: '二级菜单1-3',
                                id: 's4',
                                path: '/four'
                            },
                        ]
                    },
                    {
                        title: '一级菜单2',
                        id: 'f2',
                        icon: 'iconguanbi1',
                        children: [
                            {
                                title: '二级菜单2-1',
                                id: 's5',
                                children: [
                                    {
                                        title: '三级菜单2-1-1',
                                        id: 't3',
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        watch: {
            '$store.state.isSideNavCollapse'() {
                this.asideCollapse = this.$store.state.isSideNavCollapse;

                let elments = document.querySelectorAll('.aside .el-submenu__title  span, .aside .el-menu-item  span,.el-icon-arrow-down:before')
                if (this.asideCollapse) {
                    elments.forEach(function (el) {
                        el.style.opacity = '0'
                    });
                } else {
                    elments.forEach(function (el) {
                        el.style.opacity = '1'
                    });
                }
            }
        }
    }
</script>
<style>
</style>
<style scoped>
   .side-nav {
      height: 100%;
   }

   .el-menu {
      border-right: 0 solid transparent;
   }

   .logo {
      text-align: center;
      width: 100%;
      /*height: 60px;*/
      padding-top: 10px;
   }

   .logo-img {
      width: 24px;
   }

   .logo-text {
      font-size: 24px;
      height: 30px;
   }

</style>
