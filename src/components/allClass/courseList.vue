<template>
  <div>
    <cell title="全部课程" class='borderTopN' link = '/index'>
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
    </cell>
  </div>
</template>
<script>
  import { Cell } from 'vux'
  export default {
    data () {
      return {

      }
    },
    components: {
      Cell
    },
    created () {},
    mounted () {},
    computed: {},
    methods: {}
  }
</script>
<style>
  .borderTopN.weui-cell:before{
    border-top:none;
  }
  .borderTopN{
    border-bottom:10px solid #f6f6f6;
  }
</style>
