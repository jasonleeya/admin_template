<template>
   <div class="header-bookmark">
      <div v-show="shouldShowArrows"
           class="arrow left-arrow"
           @click="bookmarkLeftMove">
         <span class="iconfont iconjiantou"></span></div>

      <div class="bookmark-wrapper" ref="bookmarkWrapper">

         <ul class="bookmarks" ref="bookmark">
            <li class="bookmark"
                v-for="item in bookmarkList"
                :class="{'bookmark-active':$route.path===item.path,}">
               <router-link tag="span" :to="item.path">{{item.name}}</router-link>

               <el-tooltip content="关闭此页" :open-delay="200" placement="bottom" effect="light">
            <span class="iconfont iconguanbi1"
                  v-show="shouldShowCloseIco(item)"
                  @click="closeBookmark(item.name)">
            </span>
               </el-tooltip>


            </li>
         </ul>

         <div class="close-all">
            <el-tooltip content="关闭全部" :open-delay="200" placement="bottom" effect="light">
           <span class="iconfont iconguanbi"
                 @click="closeAllBookmark"></span>
            </el-tooltip>
         </div>
      </div>
      <div v-show="shouldShowArrows"
           class="arrow right-arrow"
           @click="bookmarkRightMove">
         <span class="iconfont iconjiantoushang1"></span></div>

   </div>

</template>

<script>
    export default {
        name: "Bookmark",
        data() {
            return {
                bookmarkList: [],
                shouldShowArrows: false
            }
        },
        updated() {
            if (this.$route.path === this.$store.state.bookmarkList[this.$store.state.bookmarkList.length - 1].path) {
                this.$refs.bookmark.classList.remove('bookmarks-last-not-active');
            } else {
                this.$refs.bookmark.classList.add('bookmarks-last-not-active')
            }
        },
        mounted() {
            const params = {
                name: this.$route.meta.cName,
                path: this.$route.path
            };
            //mounted设置默认书签
            this.$store.dispatch('pushBookmark', params);
            this.bookmarkList.push(params);

            window.onresize = function () {
                this.handleBookmarkOverflow()
            }.bind(this)
        },
        computed: {},
        methods: {
            handleBookmarkOverflow() {
                let headerWidth = this.$refs.bookmarkWrapper.clientWidth;
                let bookmarkWidth = this.$refs.bookmark.clientWidth;

                if (bookmarkWidth + 40 > headerWidth) {
                    this.shouldShowArrows = true;
                    document.querySelector('.el-main').style.borderTopRightRadius='0'
                } else {
                    this.shouldShowArrows = false;
                    document.querySelector('.el-main').style.borderTopRightRadius='8px'
                }

            },
            bookmarkRightMove() {
                this.$refs.bookmarkWrapper.scrollLeft += 100
            },
            bookmarkLeftMove() {
                this.$refs.bookmarkWrapper.scrollLeft -= 100
            },
            closeBookmark(name) {
                if (this.$store.state.bookmarkList.length > 1) {
                    this.$store.dispatch('deleteBookmark', name)
                    this.$router.push(this.$store.state.bookmarkList[this.$store.state.bookmarkList.length - 1].path);
                } else if (this.$store.state.bookmarkList.length === 1 && this.$route.path === '/') {
                } else {
                    this.$store.dispatch('deleteBookmark', name)
                    this.$router.push('/');
                }
            },
            shouldShowCloseIco(item) {
                if (this.$store.state.bookmarkList.length > 1) {
                    return this.$route.path === item.path
                } else {
                    return this.$route.path !== '/';

                }
            },
            closeAllBookmark() {
                if (this.$store.state.bookmarkList.length === 1 && this.$route.path === '/') {
                } else {
                    this.$store.dispatch('clearBookmark');
                    this.$router.push('/');

                }
            }
        },
        watch: {
            "$store.state.bookmarkList"() {
                this.bookmarkList = this.$store.state.bookmarkList;

            }
        }
    }
</script>

<style scoped>
   .bookmark-wrapper {
      overflow-x: hidden;
      overflow-y: hidden;
      margin-top: 7px;
      /*margin-left: 20px;*/
      position: relative;
      /*display: inline-block;*/
      white-space: nowrap;
   }

   .bookmark-wrapper::-webkit-scrollbar {
      display: none;
   }

   .bookmarks {
      display: inline-block;
      white-space: nowrap;
      height: 35px;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
   }

   .bookmark {
      height: 35px;
      line-height: 36px;
      display: inline-block;
      cursor: default;
      font-size: 14px;
      text-align: center;
      padding: 0 10px;
      position: relative;
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
      box-sizing: content-box;
   }

   .bookmarks li:last-child {
      border-right: none!important;
   }

   .bookmarks li:last-child:after,
   .bookmarks-last-not-active li:last-child:after {
      content: '';
      display: inline-block;
      width: 10px;
      height: 27px;
      position: absolute;
      right: -10px;
      bottom: 0;
   }

   .bookmarks:after {
      content: '';
      display: inline-block;
      width: 10px;
      height: 27px;
      position: absolute;
      bottom: 0;
      border-bottom-left-radius: 8px;
   }

   .bookmark span {
      transition: background-color 0.5s, color 0.5s;
   }


   .bookmark-active {
      transition: background-color 0.5s;
   }

   .arrow {
      position: absolute;
      height: 40px;
      line-height: 40px;
      width: 20px;
      text-align: center;
      top: 52px;
   }

   .arrow span {
      display: block;
   }

   .left-arrow {
      border-top-right-radius: 5px;
      /*border-bottom-right-radius: 5px;*/
      z-index: 999;
   }

   .iconguanbi1 {
      font-size: 12px;
      margin-left: 10px;
      /*display: inline-block;*/
   }

   .iconguanbi1:hover {
      font-size: 14px;
      transition: font-size 0.1s;
   }

   .right-arrow {
      right: 0;
      border-top-left-radius: 5px;
      /*border-bottom-left-radius: 5px;*/
   }

   .close-all {
      text-align: center;
      box-sizing: border-box;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      display: inline-block;
      z-index: 9999;
      margin-left: 10px;
   }

   .close-all span {
      display: block;
      font-size: 14px;
   }

</style>
