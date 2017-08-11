<template>
  <div>
    123
  </div>
</template>
<script>
  export default {
    data () {
      return {

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
    created () {},
    mounted () {},
    computed: {},
    methods: {}
  }
</script>
<style>
  
</style>
