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
        wonderList: [
          './static/img/titleImg11.jpg',
          './static/img/titleImg11.jpg'
        ],
        pageNum: 1
      }
    },
    props: {
//    wonderList: {
//      default: '[]'
//    }
    },
    created () {
      // 0
    },
    mounted () {
      var el = document.getElementById('index')
      console.log(23, el.offsetHeight, this.wonderList)
      this.scroll()
    },
    computed: {},
    methods: {
      scroll () {
        var el = document.getElementById('index')
        var elOffsetHeight = el.offsetHeight
        console.log(el.offsetHeight)
        var _this = this
        var timerId = null // 定时id
        window.onscroll = function () {
          // var box = document.getElementById('index')
          var scrollTop = document.body.scrollTop    // 页面滚动高度
          // var windheight = document.body.offsetHeight    // 页面总的高度
          var h = document.documentElement.clientHeight || document.body.clientHeight
          // 视口高度
          // 滚动到底部
          if (scrollTop >= (elOffsetHeight - h - 40) && localStorage.getItem('ItemNum') === '0') {
            console.log(12, _this.msgNum)
            // 设置延时避免滚动到底部时多次触发效果
            if (_this.wonderList.length < 10) {
              clearTimeout(timerId)
              timerId = setTimeout(function () {
                _this.wonderList.push('./static/img/titleImg11.jpg')
                console.log(11, _this.wonderList, this)
              }, 200)
            } else if (_this.wonderList.length >= 10) {
              document.getElementById('myDIV').classList.remove('dn')
              clearTimeout(timerId)
            }
          }
        }
      },
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
