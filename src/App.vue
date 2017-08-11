<template>
  <div id="app">
    <router-view></router-view>
    <tabbar :selectNum='selectNum' ref='tabbar'></tabbar>
  </div>
</template>

<script>
import tabbar from './share/tabbar'
export default {
  data () {
    return {
      selectNum: 0
    }
  },
  components: {
    tabbar
  },
  methods: {
  },
  watch: {
    $route (to, from) {
      if (to.path.indexOf('/allCourse') >= 0) {
        this.selectNum = 1
      } else if (to.path.indexOf('/myLearn') >= 0) {
        this.selectNum = 2
      } else if (to.path.indexOf('/index') >= 0) {
        this.selectNum = 0
      }
        // vm.get(
      // this.dataLenth = this.dataInfo.data.length
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
ul,li{list-style: none;}
.clearfix {
    *zoom: 1;
  }
  
  .clearfix:after {
    display: table;
    content: '';
    clear: both;
  }
  .fl {
    float: left;
  }
  
  .fr {
    float: right;
  }
  img{
    display: block;
  }
  .weui-tabbar{position: fixed!important;}
</style>
