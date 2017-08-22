<template>
  <div>
    <tabbar>
      <tabbar-item :selected='0 === selectNum' link="/">
        <i slot="icon" class="fa fa-home"></i>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item  :selected='1 === selectNum' link="/allCourse">
        <i slot="icon" class="fa fa-file-text-o"></i>
        <span slot="label">全部课程</span>
      </tabbar-item>
      <tabbar-item link="/myLearn" :show-dot='dot' :selected='2 === selectNum'>
        <i slot="icon" class="fa fa-user-circle"></i>
        <span slot="label">我的学习</span>
      </tabbar-item>
      <tabbar-item badge="2" link="/demo" :selected='3 === selectNum'>
        <!--<img slot="icon" src="../assets/logo.png">-->
        <i slot="icon" class="fa fa-cloud-download"></i>
        <span slot="label">demo</span>
      </tabbar-item>
    </tabbar>
    <!--<tabbar class="vux-demo-tabbar" icon-class="vux-center" v-show="!isTabbarDemo" slot="bottom">
          <tabbar-item :link="{path:'/'}" :selected="route.path === '/'">
            <span class="demo-icon-22 vux-demo-tabbar-icon-home" slot="icon" style="position:relative;top: -2px;">&#xe637;</span>
            <span slot="label">首页</span>
          </tabbar-item>
          <tabbar-item :link="{path:'/demo'}" :selected="isDemo" badge="9">
            <span class="demo-icon-22" slot="icon">&#xe633;</span>
            <span slot="label"><span v-if="componentName" class="vux-demo-tabbar-component">全部课程</span><span v-else>全部课程</span></span>
          </tabbar-item>
          <tabbar-item :link="{path:'/'}" :selected="route.path === '/project/donate'" show-dot>
            <span class="demo-icon-22" slot="icon">&#xe630;</span>
            <span slot="label">我的学习</span>
          </tabbar-item>
          <tabbar-item :link="{path:'/demo'}" :selected="route.path === '/project/donate'" show-dot>
            <span class="demo-icon-22" slot="icon">&#xe630;</span>
            <span slot="label">demo</span>
          </tabbar-item>-->
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'

export default {
  data () {
    return {
      isTabbarDemo: false,
      dot: true
    }
  },
  props: {
    selectNum: {
      type: Number,
      default: 1
    }
  },
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  }
}
</script>
