<template>
   <div class="header">
      <div class="header-top">
         <span @click="toggleSideNavCollapse" v-if="!asideCollapse" class="iconfont iconcaidanguan"></span>
         <span @click="toggleSideNavCollapse" v-else="asideCollapse" class="iconfont iconcaidankai"></span>


         <div class="header-top-options">
            <el-dropdown trigger="click" class="greeting">
               <el-button size="mini" plain>
                  你好，JasonLee<i class="el-icon-arrow-down el-icon--right"></i>
               </el-button>
               <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>修改密码</el-dropdown-item>
                  <el-dropdown-item>退出登录</el-dropdown-item>
               </el-dropdown-menu>
            </el-dropdown>

            <el-dropdown @command='toggleTheme' trigger="click" class="theme">
               <span class="iconfont iconzhuti"></span>
               <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item
                          v-for="item in themes"
                          :key="item.name"
                          :command="(item.theme)">{{item.name}}
                  </el-dropdown-item>
               </el-dropdown-menu>
            </el-dropdown>
         </div>
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
            return {
                asideCollapse: false,
                themes: [
                    {
                        name: '默认',
                        theme: 'default',
                    },
                    {
                        name: '主题一',
                        theme: 'theme1',
                    }, {
                        name: '主题三',
                        theme: 'theme2',
                    },
                ]
            }
        },
        methods: {
            toggleSideNavCollapse() {
                this.$store.dispatch('toggleSideNavCollapse')
            },
            toggleTheme(theme) {
                document.body.setAttribute('theme', theme)
            }
        },
        watch: {
            '$store.state.isSideNavCollapse'() {
                this.asideCollapse = this.$store.state.isSideNavCollapse
            }
        }
    }
</script>

<style scoped>
   .header {
      height: 100%;
   }


   .iconcaidanguan, .iconcaidankai {
      margin-left: 20px;
      font-size: 20px;
   }

   .header-top {
      height: 50px;
      line-height: 55px;
      position: relative;
      top: 0;
   }

   .header-top span {
      transition: color 0.2s !important;
   }

   .header-top-options {
      position: absolute;
      right: 0;
      top: 0;

   }

   .el-dropdown {
      height: 35px;
   }

   .greeting {
      margin-right: 20px;
      float: right;
   }

   .theme {
      float: right;
      margin-right: 20px;
   }
</style>
