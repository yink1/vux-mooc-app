<template>
  <div id="app">
    <!--<transition
      @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')" 
      :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
      <router-view class="router-view"></router-view>
    </transition>-->
    <router-view class="router-view"></router-view>
    <tabbar :selectNum='selectNum' ref='tabbar'></tabbar>
  </div>
</template>

<script>
import tabbar from './share/tabbar'
export default {
  data () {
    return {
      direction: 'forward',
      selectNum: 0
    }
  },
  components: {
    tabbar
  },
  created () {
    localStorage.setItem('ItemNum', 0)
  },
  methods: {
  },
  watch: {
    $route (to, from) {
      if (to.path.indexOf('/allCourse') >= 0) {
        this.selectNum = 1
        localStorage.setItem('ItemNum', 1)
      } else if (to.path.indexOf('/myLearn') >= 0) {
        this.selectNum = 2
        localStorage.setItem('ItemNum', 2)
      } else if (to.path.indexOf('/index') >= 0) {
        this.selectNum = 0
        localStorage.setItem('ItemNum', 0)
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
  font-size: 20px;
  background-color: #fbf9fe;
  color:#444;
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
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  height: 100%;
  top: 0px;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
