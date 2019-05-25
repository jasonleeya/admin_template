<template>
   <div class="side-nav">
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
                                        link: '/'
                                    }, {
                                        title: '三级菜单1-1-2',
                                        id: 't2',
                                        link: '/two'
                                    },

                                ]
                            }  , {
                                title: '二级菜单1-2',
                                id: 's3',
                                link: '/three'
                            }, {
                                title: '二级菜单1-3',
                                id: 's4',
                                link: '/four'
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
        watch:{
            '$store.state.isSideNavCollapse'() {
               this.asideCollapse= this.$store.state.isSideNavCollapse
            }
        }
    }
</script>
<style>
</style>
<style scoped>
.side-nav-menu,.side-nav {
   height: 100%;
}
.el-menu {
   border-right: 0 solid transparent;
}
</style>
