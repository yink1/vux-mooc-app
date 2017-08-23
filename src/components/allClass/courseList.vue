<template>
  <div id='courseList'>
    <cell title="全部课程" class='borderTopN' link = '/index'>
        <img slot="icon" width="30" style="display:block;margin-right:5px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
    </cell>
    <div v-for='it in titleList' class='borderBotN'>
      <cell  :title="it.title" link = '/index'>
          <img slot="icon" width="30" style="display:block;margin-right:5px;" :src="it.src">
      </cell>
      <ul class="clearfix imgListed" v-for='item in titleNum' v-if='it.label === item.label'>
        <li class="fl" v-for='itBt in item.titleBt'>
          {{itBt}}
        </li>
      </ul>
    </div>
    
  </div>
</template>
<script>
  import { Cell } from 'vux'
  export default {
    data () {
      return {
        titleList: [
          {
            title: '计算机',
            src: './static/img/all1.jpg',
            label: 0
          },
          {
            title: '经济管理',
            src: './static/img/all2.jpg',
            label: 1
          },
          {
            title: '心理学',
            src: './static/img/all1.jpg',
            label: 2
          },
          {
            title: '外语',
            src: './static/img/all2.jpg',
            label: 3
          },
          {
            title: '文学历史',
            src: './static/img/all1.jpg',
            label: 4
          },
          {
            title: '艺术设计',
            src: './static/img/all2.jpg',
            label: 5
          },
          {
            title: '工学',
            src: './static/img/all1.jpg',
            label: 6
          },
          {
            title: '理学',
            src: './static/img/all2.jpg',
            label: 7
          },
          {
            title: '生命科学',
            src: './static/img/all1.jpg',
            label: 8
          },
          {
            title: '哲学',
            src: './static/img/all2.jpg',
            label: 9
          },
          {
            title: '法学',
            src: './static/img/all1.jpg',
            label: 10
          },
          {
            title: '教育教学',
            src: './static/img/all2.jpg',
            label: 11
          }
        ],
        titleNum: [
          {
            label: 0,
            titleBt: [
              '计算机基础', '编程语言', '数据库与数据结构', '计算机应用', '软件工程', '计算机组成'
            ]
          },
          {
            label: 1,
            titleBt: [
              '经济学', '金融学', '工商管理', '电子商务', '管理科学和工程', '创业'
            ]
          },
          {
            label: 3,
            titleBt: [
              '通用英语', '专门用途英语', '跨文化交际', '文学与语言学'
            ]
          },
          {
            label: 6,
            titleBt: [
              '通用英语', '专门用途英语', '跨文化交际', '文学与语言学'
            ]
          }
        ]
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
  #courseList{font-size: 18px;
  padding-bottom:60px;  
  }
  .borderTopN.weui-cell:before{
    border-top:none;
  }
  .borderTopN{
    border-bottom:10px solid #f6f6f6;
  }
  .poaSearch{
    z-index: 11111;
  }
  #courseList .imgListed{font-size: 16px;color:#666;}
  .imgListed li{width:30%;height:50px;line-height: 50px;padding:0 10%;
    word-break:keep-all;/* 不换行 */
    white-space:nowrap;/* 不换行 */
    overflow:hidden;/* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow:ellipsis;
    border-top:1px solid #dedede;
  
  }
  .borderBotN{border-bottom:10px solid #f4f4f4;}
</style>
