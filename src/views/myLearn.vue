<template>
  <div>
    <h2 class="learnHeade por">我的学习
      <a class="list-group-item poa" href="#/index"><i class="fa fa-cog fa-fw"></i></a>
    </h2>
    <learnInfo></learnInfo>
    <learnList></learnList>
  </div>
</template>
<script>
  import learnList from '@/components/myLearn/learnList'
  import learnInfo from '@/components/myLearn/learnInfo'
  export default {
    data () {
      return {
        msgNum: 2
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        console.log('to.path' + to.path)
        if (to.path.indexOf('/allCourse') >= 0) {
          vm.$options.parent.selectNum = 1
        } else if (to.path.indexOf('/myLearn') >= 0) {
          vm.$options.parent.selectNum = 2
        } else if (to.path.indexOf('/index') >= 0) {
          vm.$options.parent.selectNum = 0
        }
        // vm.get(
        // this.dataLenth = this.dataInfo.data.length
      })
    },
    components: {
      learnList,
      learnInfo
    },
    created () {},
    mounted () {},
    computed: {},
    methods: {}
  }
</script>
<style>
  .learnHeade{
    text-align: center;
    text-indent: 10px;
  }
  .por{
    position: relative;
  }
  .poa{
    position: absolute;
  }
  .learnHeade .list-group-item{
    right: 10px;
    color:#444;
  }
</style>
