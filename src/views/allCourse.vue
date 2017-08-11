<template>
  <div id='allCourse'>
    <div class='pox'>
        <search class='poa poaSearch'></search>
    </div>
    <img class='courseH' :src="courseH" alt="" />
    <courseList></courseList>
  </div>
</template>
<script>
  import search from '@/share/search'
  import courseList from '@/components/allClass/courseList'
  export default {
    data () {
      return {
        courseH: './static/img/courseH.jpg'
      }
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
    components: {
      search,
      courseList
    },
    created () {},
    mounted () {},
    computed: {},
    methods: {}
  }
</script>
<style>
  .pox{
    width:100%;
    position: fixed;
    left:0;
    top:0;
  }
  .courseH{
    width:96%;
    margin:50px auto 10px;
    height:auto;
  }
  
</style>
