<template>
  <div class="hello" id='index'>
    <!--<scroller lock-x scrollbar-y use-pulldown height='1000000%' @on-pulldown-loading="load1" overflow = 'auto' ref="demo1">-->
    <!--<scroller lock-x scrollbar-y use-pulldown height='100000000%' :pulldown-config="{content:'下拉刷新',downContent:'下拉刷新',upContent:'释放刷新',loadingContent:'加载中'}" @on-pulldown-loading="load2" v-model="status1">-->
      <div class='por'>
      	<banner></banner>
        <search class='poa poaSearch borderNone'></search>
      </div>
      <titleTab></titleTab>
      <recommend></recommend>
      <university></university>
      <discuss></discuss>
      <titlelist></titlelist>
      <wonderfulclass></wonderfulclass>
    <!--</scroller>-->
  </div>
</template>

<script>
import { Scroller } from 'vux'
import banner from '@/share/banner'
import search from '@/share/search'
import titleTab from '@/components/index/titleTab'
import university from '@/components/index/university'
import recommend from '@/components/index/recommend'
import discuss from '@/components/index/discuss'
import titlelist from '@/components/index/titlelist'
import wonderfulclass from '@/components/index/wonderfulclass'
export default {
  data () {
    return {
      wonderList: [
        './static/img/titleImg11.jpg',
        './static/img/titleImg11.jpg'
      ],
      status1: {
        pulldownStatus: 'default'
      },
      msgNum: 0
    }
  },
  created () {
    // 0
  },
  beforeMount () {},
  mounted () {
    var el = document.getElementById('index')
    console.log(22, el.offsetHeight, this.wonderList)
//  this.scroll()
  },
  components: {
    discuss,
    banner,
    search,
    titleTab,
    university,
    recommend,
    Scroller,
    titlelist,
    wonderfulclass
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      console.log('to.path' + to.path)
      if (to.path.indexOf('/allCourse') >= 0) {
        console.log(vm.$options.parent.selectNum)
        vm.$options.parent.selectNum = 1
        document.body.scrollTop = 0
      } else if (to.path.indexOf('/myLearn') >= 0) {
        console.log(2)
        vm.$options.parent.selectNum = 2
        document.body.scrollTop = 0
      } else if (to.path.indexOf('/index') >= 0) {
        console.log(0)
        vm.$options.parent.selectNum = 0
        document.body.scrollTop = 0
      }
      // vm.get(
      // this.dataLenth = this.dataInfo.data.length
    })
  },
  methods: {
//  scroll () {
//    var el = document.getElementById('index')
//    var elOffsetHeight = el.offsetHeight
//    console.log(el.offsetHeight)
//    var _this = this
//    var timerId = null // 定时id
//    window.onscroll = function () {
//      // var box = document.getElementById('index')
//      var scrollTop = document.body.scrollTop    // 页面滚动高度
//      var windheight = document.body.offsetHeight    // 页面总的高度
//      console.log(13, windheight)
//      var h = document.documentElement.clientHeight || document.body.clientHeight
//      // 视口高度
//      // 滚动到底部
//      if (scrollTop >= (elOffsetHeight - h) && localStorage.getItem('ItemNum') === '0') {
//        console.log(12, _this.msgNum)
//        // 设置延时避免滚动到底部时多次触发效果
//        if (_this.wonderList.length < 10) {
//          clearTimeout(timerId)
//          timerId = setTimeout(function () {
//            _this.wonderList.push('./static/img/titleImg11.jpg')
//            console.log(11, _this.wonderList, this)
//          }, 200)
//        } else if (_this.wonderList.length >= 10) {
//          document.getElementById('myDIV').classList.remove('dn')
//          clearTimeout(timerId)
//        }
//      }
//    }
//  },
    load2 () {
      setTimeout(() => {
        this.status1.pulldownStatus = 'default'
      }, 2000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box{height:100px;background:#ccc;margin:10px 0;}
  *{
    margin:0;
    padding:0;
    border:0;
  }
  .mainLine{
    width:96%;
    margin:0 auto;
  }
  .por{position:relative;}
  .poa{position:absolute;}
  .poaSearch{
    width:100%;
    left:0;
    top:1px;
  }
h1, h2 {
  font-weight: normal;
}
/*body{
  background:#FFFAE8;
}*/
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.mainBox{
  width:98%;
  margin:0 auto;
  
}
.hello{
  padding-bottom:70px;
}
.borderNone .weui-search-bar{
    background-color: transparent!important;
  }
</style>
