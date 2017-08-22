<template>
  <div id='discuss'>
    <div class="mainLine">
    <div class='clearfix'>
      <h4 class='fl hezuoSchool'>精彩讨论</h4>
      <span class="fr showAll">一起学习，一起成长</span>
    </div>
    
    <scroller lock-y :scrollbar-x=false>
      <div class="box1">
        <div class="box1-item" v-for="(it,i) in discussList" >
          <div class="clearfix box1Font">
            <img class='fl disUserImg' :src="it.src" alt="" />
            <span class="fl">{{it.disName}}</span>
            <span class="fl occupation">{{it.occupation}}</span>
            <span class="fr">来自 <i>{{it.resource}}</i></span>
          </div>
          
          <p class='titleName'>{{it.title}}</p>
          <p class='discussCon'>{{it.discussCon}}</p>
          <p class='discussConUser'><span>{{it.discussConUser}}</span>人参加讨论</p>
          
        </div>
      </div>
      
    </scroller>
    <img class='courseH2' :src="src2"/>
    </div>
  </div>
</template>
<script>
  import { Scroller, Divider, Spinner, XButton, Group, Cell, LoadMore } from 'vux'
  export default {
    components: {
      Scroller,
      Divider,
      Spinner,
      XButton,
      Group,
      Cell,
      LoadMore
    },
    data () {
      return {
        src2: './static/img/courseH2.jpg',
        discussList: [
          {
            src: './static/img/userImg.jpg',
            disName: '徐学军',
            occupation: '教师',
            resource: '天文漫谈',
            title: '如何解读《天上的街市》所描绘的街市',
            discussCon: '今天使用webpack-sample初始一个vue-cli项目，在app.vue文件中添加了个钩子函数ready，可是ready内的事件一直不执行，检查了webpack文件和package.json也没发现什么问题，浏览器也没报错或者提示，很令人捉急。然后去github看了webpack-simple源码，才发现原来vue init webpack-simple默认安装的vue是2.0版本。',
            discussConUser: '1112'
          },
          {
            src: './static/img/userImg.jpg',
            disName: '徐学军',
            occupation: '教师',
            resource: '天文漫谈',
            title: '如何解读《天上的街市》所描绘的街市',
            discussCon: '今天使用webpack-sample初始一个vue-cli项目，在app.vue文件中添加了个钩子函数ready，可是ready内的事件一直不执行，检查了webpack文件和package.json也没发现什么问题，浏览器也没报错或者提示，很令人捉急。然后去github看了webpack-simple源码，才发现原来vue init webpack-simple默认安装的vue是2.0版本。',
            discussConUser: '1112'
          },
          {
            src: './static/img/userImg.jpg',
            disName: '徐学军',
            occupation: '教师',
            resource: '天文漫谈',
            title: '如何解读《天上的街市》所描绘的街市',
            discussCon: '今天使用webpack-sample初始一个vue-cli项目，在app.vue文件中添加了个钩子函数ready，可是ready内的事件一直不执行，检查了webpack文件和package.json也没发现什么问题，浏览器也没报错或者提示，很令人捉急。然后去github看了webpack-simple源码，才发现原来vue init webpack-simple默认安装的vue是2.0版本。',
            discussConUser: '1112'
          },
          {
            src: './static/img/userImg.jpg',
            disName: '徐学军',
            occupation: '教师',
            resource: '天文漫谈',
            title: '如何解读《天上的街市》所描绘的街市',
            discussCon: '今天使用webpack-sample初始一个vue-cli项目，在app.vue文件中添加了个钩子函数ready，可是ready内的事件一直不执行，检查了webpack文件和package.json也没发现什么问题，浏览器也没报错或者提示，很令人捉急。然后去github看了webpack-simple源码，才发现原来vue init webpack-simple默认安装的vue是2.0版本。',
            discussConUser: '1112'
          }
        ]
      }
    },
    created () {},
    mounted () {
      this.seemore()
    },
    computed: {},
    methods: {
      seemore () {
        var objP = document.getElementsByClassName('discussCon')
        for (var i = 0; i < objP.length; i++) {
          var allcontent = objP[i].innerHTML
          if (allcontent.length > 46) {
            var subcontent = allcontent.substr(0, 46)
            objP[i].innerHTML = subcontent + '...'
          }
        }
      }
    }
  }
</script>
<style>
  .poasecT{
    top:0px;
    right:10px;
  }
  #discuss{
    padding-bottom:20px;
    border-bottom:10px solid #f6f6f6;
  }
  #discuss .showAll{
    width:140px;
    border:none;
    margin-top:10px;
    margin-right:0;
    color:#6a6a6a;
  }
  .courseH2{
    width:100%;
    height:auto;
  }
  #discuss .box1-item{
    margin:10px 0;
    width:260px;
    text-align: left;
    margin-right: 15px;
    padding:10px;
    
  }
  #discuss .box1-item:nth-child(4n+1){
    background:#e8eff9;
  }
  #discuss .box1-item:nth-child(4n+2){
    background:#ecf5f2;
  }
  #discuss .box1-item:nth-child(4n+3){
    background:#F3EFED;
  }
  #discuss .box1-item:nth-child(4n+4){
    background:#EEECF8;
  }
  .discussCon{
    text-indent: 1em;
    font-size: 16px;
  }
  #discuss .box1Font{
    height:30px;
  }
  .box1Font span{
    margin-top:4px;
  }
  .box1Font{
    font-size: 14px;
  }
  .occupation{
    padding:0px 4px;
    margin-left:6px;
    display: inline-block;
    border: 1px solid #000;
    
  }
  .box1-item .disUserImg{
    margin-right: 4px;
    margin-left:10px;
    margin-bottom:0;
    width:30px;
    height:30px;
    border-radius: 50%;
  }
  #discuss .titleName{
    margin:20px 0;
    width: 100%;
    text-align: left;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
  #discuss .box1-item .discussConUser{
    margin:30px auto;
    text-align: center;
  }
</style>
