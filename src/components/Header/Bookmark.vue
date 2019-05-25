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
                :class="{'bookmark-active':$route.path===item.link}">
               <router-link tag="span" :to="item.link">{{item.name}}</router-link>
               <span class="iconfont iconguanbi1"
                     v-show="shouldShowCloseIco(item)"
                     @click="closeBookmark(item.name)"></span>
            </li>
         </ul>
      </div>

      <div v-show="shouldShowArrows"
           class="arrow right-arrow"
           @click="bookmarkRightMove">
         <span class="iconfont iconjiantoushang1"></span></div>
      <div class="close-all">
         <el-tooltip content="关闭全部" :open-delay="500" placement="bottom" effect="light">
           <span class="iconfont iconguanbi"
                 @click="closeAllBookmark"></span>
         </el-tooltip>
      </div>

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
        mounted() {
            const params = {
                name: this.$route.meta.cName,
                link: this.$route.path
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
                this.shouldShowArrows = bookmarkWidth > headerWidth;

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
                    this.$router.push(this.$store.state.bookmarkList[this.$store.state.bookmarkList.length - 1].link);
                } else if (this.$store.state.bookmarkList.length === 1 && this.$route.path === '/') {
                } else {
                    this.$store.dispatch('clearBookmark');
                    this.$router.push('/');
                }
            },
            shouldShowCloseIco(item) {
                if (this.$store.state.bookmarkList.length > 1) {
                    return this.$route.path === item.link
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
      overflow-x: scroll;
      overflow-y: hidden;
      margin-top: 2px;
      margin-left: 20px;
      position: relative;
   }

   .bookmark-wrapper::-webkit-scrollbar {
      display: none;
   }

   .bookmarks {
      display: inline-block;
      white-space: nowrap;
      height: 40px;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      overflow: hidden;
   }

   .bookmark {
      height: 40px;
      line-height: 40px;
      display: inline-block;
      cursor: default;
      font-size: 14px;
      text-align: center;
      padding: 0 10px;
      margin-bottom: 10px;
   }

   .bookmarks li:last-child {
      border-right: none;
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
      top: 42px;
   }

   .arrow span {
      display: block;
   }

   .left-arrow {

   }

   .iconguanbi1 {
      font-size: 12px;
      margin-left: 10px;
      display: inline-block;
   }

   .iconguanbi1:hover {
      font-size: 14px;
      transition: font-size 0.1s;
   }

   .right-arrow {
      right: 0;

   }

   .close-all {
      position: absolute;
      height: 40px;
      line-height: 40px;
      width: 40px;
      text-align: center;
      right: 20px;
      top: 42px;
      box-sizing: border-box;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
   }

   .close-all span {
      display: block;
      font-size: 14px;
   }

   .close-all span:hover {
      font-size: 16px;
      transition: font-size 0.2s;
   }
</style>
