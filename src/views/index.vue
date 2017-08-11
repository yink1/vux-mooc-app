<template>
  <div class="hello">
    <!--<scroller lock-x scrollbar-y use-pulldown height='1000000%' @on-pulldown-loading="load1" overflow = 'auto' ref="demo1">-->
    <scroller lock-x scrollbar-y use-pulldown height='100000000%' :pulldown-config="{content:'下拉刷新',downContent:'下拉刷新',upContent:'释放刷新',loadingContent:'加载中'}" @on-pulldown-loading="load2" v-model="status1">
      <div class='por'>
      	<banner></banner>
        <search class='poa poaSearch borderNone'></search>
      </div>
    
    <titleTab></titleTab>
    <recommend></recommend>
    <university></university>
    </scroller>
  </div>
</template>

<script>
import { Scroller } from 'vux'
import banner from '@/share/banner'
import search from '@/share/search'
import titleTab from '@/components/index/titleTab'
import university from '@/components/index/university'
import recommend from '@/components/index/recommend'

export default {
  data () {
    return {
      status1: {
        pulldownStatus: 'default'
      },
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    banner,
    search,
    titleTab,
    university,
    recommend,
    Scroller
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      console.log('to.path' + to.path)
      if (to.path.indexOf('/allCourse') >= 0) {
        console.log(vm.$options.parent.selectNum)
        vm.$options.parent.selectNum = 1
      } else if (to.path.indexOf('/myLearn') >= 0) {
        console.log(2)
        vm.$options.parent.selectNum = 2
      } else if (to.path.indexOf('/index') >= 0) {
        console.log(0)
        vm.$options.parent.selectNum = 0
      }
      // vm.get(
      // this.dataLenth = this.dataInfo.data.length
    })
  },
  methods: {
    load1 () {
      // this.n1 += 10
      this.$nextTick(() => {
        setTimeout(() => {
          this.$refs.demo1.donePulldown()
        }, 1000)
      })
    },
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
  *{
    margin:0;
    padding:0;
    border:0;
  }
  .por{position:relative;}
  .poa{position:absolute;}
  .poaSearch{
    width:100%;
    left:0;
    top:1px;
  }
  #vux-scroller-pgiyk{
    height:400%;
    overflow: auto!important;
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
  padding-bottom:60px;
}
.borderNone .weui-search-bar{
    background-color: transparent!important;
  }
</style>
