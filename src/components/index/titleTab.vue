<template>
  <div>
    <img class='titleH' :src="urld">
    <div class="clearfix itemTitle">
    	<li class="fl" v-for='(it, i) in itemList'>
    	  <img :src="it.src"/>
    	  <span>{{it.title}}</span>
    	</li>
    </div>
  </div>
</template>

<script>
import { Grid, GridItem, GroupTitle } from 'vux'

export default {
  data () {
    return {
      hub: '一',
      hubd: '二',
      urld: './static/img/titleH.jpg',
      itemList: [
        {
          src: './static/img/logo.png',
          title: '考研'
        },
        {
          src: './static/img/logo.png',
          title: '经济管理'
        },
        {
          src: './static/img/logo.png',
          title: '外语'
        },
        {
          src: './static/img/logo.png',
          title: '文学历史'
        },
        {
          src: './static/img/logo.png',
          title: '工学'
        },
        {
          src: './static/img/logo.png',
          title: '理学'
        },
        {
          src: './static/img/logo.png',
          title: '生命科学'
        },
        {
          src: './static/img/logo.png',
          title: '更多'
        }
      ]
    }
  },
  components: {
    Grid,
    GridItem,
    GroupTitle
  },
  methods: {
    onItemClick () {
      console.log('on item click')
    }
  }
}
</script>

<style scoped>
.grid-center {
  display: block;
  text-align: center;
  color: #666;
}
.itemTitle{
  padding-bottom:10px;
  border-bottom:10px solid #f6f6f6;
}
.itemTitle li {
  width:25%;
  box-sizing: border-box;
  text-align: center;
  font-size: 14px;
  color:#626262;
}
.itemTitle li img{
  width:50%;
  height:auto;
  margin:10px auto 0;
}
.titleH{
  width:90%;
  height:auto;
  margin:10px auto 0;
}
</style>

