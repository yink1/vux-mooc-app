<template>
  <div id='wonderfulClass' class="mainLine">
    <div class="clearfix titleHead">
      <h4 class='fl hezuoSchool'>精彩课时</h4>
    </div>      
    <div class="por" v-for='item in wonderList'>
      <img class='mb20 imgWonderList' :src="item" alt="" />
      <div class="poa sideVideoRecord">
        <i class="fa fa-circle redCircle"></i>
        <span></span>
                    课时
      </div>
    </div>
    <!--<scroller lock-x height="200px" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="200">
      <div class="box2">
        <p class="por" v-for='item in wonderList'>
          <img class='mb20 imgWonderList' :src="item" alt="" />
          <div class="poa sideVideoRecord">
            <i class="fa fa-circle redCircle"></i>
            <span></span>
                        课时
          </div>
        </p>-->
        <!--<p v-for="i in bottomCount">placeholder {{i}}</p>-->
        <!--<load-more tip="loading"></load-more>
      </div>
    </scroller>-->
    <div id='myDIV' class="dn">
              到底了~想不到你看到了这里
    </div>
  </div>
</template>
<script>
  import { Scroller, Divider, Spinner, LoadMore } from 'vux'
  export default {
    components: {
      Scroller,
      Divider,
      Spinner,
      LoadMore
    },
    data () {
      return {
        pageNum: 1
      }
    },
    props: {
      wonderList: {
        default: '[]'
      }
    },
    created () {
//    var _this = this
//    var timerId = null // 定时id
//    window.onscroll = function () {
//      // var box = document.getElementById('index')
//      var scrollTop = document.body.scrollTop    // 页面滚动高度
//      var windheight = document.body.offsetHeight    // 页面总的高度
//      var h = document.documentElement.clientHeight || document.body.clientHeight
//      // 视口高度
//      // 滚动到底部
//      if (scrollTop >= (windheight - h)) {
//        // 设置延时避免滚动到底部时多次触发效果
//        if (_this.wonderList.length < 10) {
//          clearTimeout(timerId)
//          timerId = setTimeout(function () {
//            _this.wonderList.push('./static/img/titleImg11.jpg')
//          }, 200)
//        } else if (_this.wonderList.length >= 10) {
//          document.getElementById('myDIV').classList.remove('dn')
//          clearTimeout(timerId)
//        }
//      }
//    }
    },
    mounted () {},
    computed: {},
    methods: {
      onScrollBottom () {
        if (this.onFetching) {
          // do nothing
        } else {
          setTimeout(() => {
            this.$nextTick(() => {
              this.wonderList.push(this.wonderList)
              this.$refs.scrollerBottom.reset()
            })
            this.onFetching = false
          }, 2000)
        }
      }
    }
  }
</script>
<style>
  #myDIV{
    font-size: 14px;
    text-align: center;
  }
  .box{height:100px;background:#ccc;margin:10px 0;}
  .imgWonderList{
    width:100%;
    height:auto;
  }
  .dn{
    display: none;
  }
  .mb20{
    margin-bottom:16px;
  }
</style>
