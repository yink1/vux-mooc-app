<template>
  <div id='recommend'>
    <div id="inRecommend">
      <h4>推荐课程</h4>
      <img class='titleImg' :src="urli"/>
      <scroller lock-y :scrollbar-x=false>
        <div class="box1 box2">
          <div class="box1-item" v-for="(it,i) in schoolList" >
            <router-link :to='it.url'>
            <img :src="it.src" alt="" />
            <p class='ClassNamed'>{{it.title}}</p>
            <p class='progressed'>{{it.progress}}</p>
            <p class='schoolNamed'>{{it.schoolName}}</p>
            </router-link>
          </div>
        </div>  
      </scroller>
    </div>
  </div>
</template>
<script>
  import { Scroller } from 'vux'
  export default {
    components: {
      Scroller
    },
    data () {
      return {
        urli: './static/img/i2.jpg',
        schoolList: [
          {
            src: './static/img/21.jpg',
            url: '/',
            title: '高等数学选修课',
            progress: '进行至第二周',
            schoolName: '西安财经大学'
          },
          {
            src: './static/img/21.jpg',
            url: '/',
            title: '高等数学选修课',
            progress: '进行至第二周',
            schoolName: '西安财经大学'
          },
          {
            src: './static/img/21.jpg',
            url: '/',
            title: '高等数学选修课',
            progress: '进行至第二周',
            schoolName: '西安财经大学'
          },
          {
            src: './static/img/21.jpg',
            url: '/',
            title: '高等数学选修课',
            progress: '进行至第二周',
            schoolName: '西安财经大学'
          },
          {
            src: './static/img/21.jpg',
            url: '/',
            title: '高等数学选修课',
            progress: '进行至第二周',
            schoolName: '西安财经大学'
          },
          {
            src: './static/img/21.jpg',
            url: '/',
            title: '高等数学选修课',
            progress: '进行至第二周',
            schoolName: '西安财经大学'
          }
        ]
      }
    },
    created () {},
    mounted () {},
    computed: {},
    methods: {}
  }
</script>
<style>
  #recommend{
    width:100%;
    padding-bottom:6px;
    border-bottom: 10px solid #f6f6f6;
  }
  #inRecommend{
    width:96%;
    margin:5px auto 0;
  }
  .titleImg{
    width:100%;
    height:auto;
    margin:5px auto;
  }
  .box1 {
  padding-bottom:4px;
  position: relative;
  width: 1666px;
  margin-top:5px;
}
.box1-item {
  width: 190px;
  display:inline-block;
  margin-left: 15px;
  float: left;
  text-align: center;
}
.box1-item img{
  width:100%;
  height:auto;
  margin:0px auto 6px;
}
.box1-item:first-child {
  margin-left: 0;
}
.box2-wrap {
  height: 300px;
  overflow: hidden;
}
.schoolName{
  display: block;
  width:66px;
  margin:0 auto;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  font-size: 14px;
  color:#444;
}
.allSchool{
  width:60px;
  height:70px;
  padding-top:10px;
  background:#ccc;
  text-align: center;
  margin-left:15px;
  box-sizing: border-box;
  font-size: 16px;
  color:#444;
}
.showAll{
  font-size: 12px;
  width:72px;
  height:21px;
  line-height: 21px;
  border:1px solid #ccc;
  text-align: center;
  margin-top:6px;
  margin-right: 6px;
}
.hezuoSchool{
  margin-top:6px;
  margin-left:6px;
}
.box2 p{
  text-align: left;
  font-size: 14px;
  color:#444;
}
.box2 .progressed{
  color:forestgreen;
}
</style>
