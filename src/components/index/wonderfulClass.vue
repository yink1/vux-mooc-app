<template>
  <div id='wonderfulClass' class="mainLine">
    <div class="clearfix titleHead">
      <h4 class='fl hezuoSchool'>精彩课时</h4>
    </div>
    <scroller lock-x scrollbar-y use-pullup :pullup-config="pullupConfig2" height="480px" ref="demo2" @on-pullup-loading="load2">
      <div class="box2">
        <div class="por" v-for='item in wonderList'>
          <img class='mb20 imgWonderList' :src="item" alt="" />
          <div class="poa sideVideoRecord">
            <i class="fa fa-circle redCircle"></i>
            <span></span>
                       课时
          </div>
        </div>
        <p id='myDIV' class='dn'>没有了~没想到你看到了这里</p>
      </div>
    </scroller>
  </div>
</template>
<script>
  import { Scroller, Divider, Spinner } from 'vux'
  export default {
    components: {
      Scroller,
      Divider,
      Spinner
    },
    data () {
      return {
        show2: true,
        wonderList: [
          './static/img/titleImg11.jpg',
          './static/img/titleImg11.jpg'
        ],
        pageNum: 1,
        pullupConfig2: {
          content: '上拉加载更多',
          downContent: '松开进行加载',
          upContent: '上拉加载更多',
          loadingContent: '加载中...'
        }
      }
    },
//  props: {
//    wonderList: {
//      default: '[]'
//    }
//  },
    created () {
      // 0
    },
    mounted () {
      var el = document.getElementById('index')
      console.log(23, el.offsetHeight, this.wonderList)
    },
    computed: {},
    methods: {
      load2 () {
        var _this = this
        setTimeout(() => {
          console.log(0)
          _this.wonderList.push('./static/img/titleImg11.jpg')
          setTimeout(() => {
            console.log(1)
            this.$refs.demo2.donePullup()
          }, 100)
          if (_this.wonderList.length === 10) { // unload plugin
            document.getElementById('myDIV').classList.remove('dn')
            setTimeout(() => {
              this.$refs.demo2.disablePullup()
            }, 100)
          }
        }, 600)
      }
    }
  }
</script>
<style>
  #myDIV{
    font-size: 14px;
    text-align: center;
    height:20px;
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
