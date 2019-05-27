<template>
   <el-container class="main-container">
      <el-aside class="aside" :width="sideNavWidth">
         <side-nav></side-nav>
      </el-aside>
      <el-container class="content-container">
         <el-header height="92px">
            <my-header>
            </my-header>
         </el-header>
         <el-main>
            <router-view>
            </router-view>
         </el-main>
      </el-container>
   </el-container>
</template>

<script>
    import SideNav from "@/components/SideNav"
    import MyHeader from "@/components/Header"

    export default {
        name: "Index",
        components: {
            SideNav,
            MyHeader
        },
        data() {
            return {
                sideNavWidth: '200px'
            }
        },
        created() {
            if (localStorage.getItem('theme')) {
                document.body.setAttribute('theme', localStorage.getItem('theme'));
            } else {
                document.body.setAttribute('theme', 'default');

            }
        },
        beforeRouteUpdate(to,from,next) {
            this.$store.dispatch('pushBookmark', {
                name: to.meta.cName,
                path: to.path
            });
            next();
        },
        watch:{
            "$store.state.isSideNavCollapse"() {
                if (this.$store.state.isSideNavCollapse) {
                    this.sideNavWidth = "63px";
                } else {
                    this.sideNavWidth = "200px";
                }
            },
        }

    }
</script>

<style scoped lang="scss">
   .main-container {
      height: 100%;
   }
   .el-aside {
      transition: width 0.3s;
   }
   .el-header {
      margin:0 -20px;
   }
   .el-main {
      border-top-right-radius: 5px;
   }


</style>
