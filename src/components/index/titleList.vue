<template>
  <div id='titleList'>
    <ul >
    	<li class='outMainLine' v-for='(it,i) in titleList'>
    	  <div class='mainLine'>
    	   <div class="clearfix titleHead">
          <h4 class='fl hezuoSchool'>{{it.title}}</h4>
          <span class="fr showAll">查看全部
            <i class="fa fa-chevron-right"></i>
          </span>
    	   </div>
    	   <div class="clearfix imgList" v-for='item in titleNum' v-if='it.label === item.label'>
    	   	<div class="por" >
            <img class='mb10' :src="item.titleImg" alt="" />
            <div class="poa sideVideoRecord">
              <i class="fa fa-circle redCircle"></i>
              <span></span>
                          课时
            </div>
            <div class="clearfix">
        	   	<div class='itListImg fl mb10' v-for = 'itList in item.titleImgList'>
        	   		<img class='mb10' :src="itList.src" alt="" />
        	   		<h4>{{itList.title}}</h4>
        	   		<p class="clearfix pColor">
        	   		  <span class="fl">{{itList.school}}</span>
        	   		  <span class="fr">
        	   		    <i class="fa fa-user-o"></i>
        	   		    {{itList.number}}
        	   		  </span>
        	   		</p>
        	   	</div>
        	  </div>
      	   	<div class="textList" v-if='item.textList' v-for='it in item.textList'>
      	   	  <h4>{{it.title}}</h4>
      	   	  <span>来自 {{it.resource}}</span>
      	   	</div>
      	  </div>
    	   </div>
    	   </div>
    	</li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        titleList: [
          {
            title: '计算机',
            label: 0
          },
          {
            title: '经济管理',
            label: 1
          }
        ],
        titleNum: [
          {
            label: 0,
            titleImg: './static/img/titleImg1.jpg',
            titleImgList: [
              {
                src: './static/img/titleImg11.jpg',
                title: '大学计算机',
                school: '大连理工大学',
                number: 22145
              },
              {
                src: './static/img/titleImg11.jpg',
                title: '大学计算机',
                school: '大连理工大学',
                number: 22145
              },
              {
                src: './static/img/titleImg11.jpg',
                title: '大学计算机',
                school: '大连理工大学',
                number: 22145
              },
              {
                src: './static/img/titleImg11.jpg',
                title: '大学计算机',
                school: '大连理工大学',
                number: 22145
              }
            ],
            textList: [
            ]
          },
          {
            label: 1,
            titleImg: './static/img/titleImg1.jpg',
            titleImgList: [
              {
                src: './static/img/titleImg11.jpg',
                title: '大学计算机',
                school: '大连理工大学',
                number: 22145
              },
              {
                src: './static/img/titleImg11.jpg',
                title: '大学计算机',
                school: '大连理工大学',
                number: 22145
              },
              {
                src: './static/img/titleImg11.jpg',
                title: '大学计算机',
                school: '大连理工大学',
                number: 22145
              },
              {
                src: './static/img/titleImg11.jpg',
                title: '大学计算机',
                school: '大连理工大学',
                number: 22145
              }
            ],
            textList: [
              {
                title: '谈谈营改增对“道路运输”与“水路运输”交通业税负的影响差异。',
                resource: '中国税制'
              },
              {
                title: '如何设计所得税政策，从而促进我国慈善捐赠事业的发展。',
                resource: '中国税制'
              }
            ]
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
  .sideVideoRecord{
    top:6px;
    left:0px;
    padding:0 10px 0 6px;
    background:#fff;
    border-radius: 0 10px 10px 0;
  }
  .redCircle.fa{
    color:red;
    font-size: 0.1rem!important;
    vertical-align: 3px;
  }
  .textList span{
    font-size: 12px;
    color:#ccc;
  }
  .pColor span.fr{
    display: inline-block;
    width:35%;
    text-align: right;
    overflow: hidden; /*自动隐藏文字*/
text-overflow: ellipsis;/*文字隐藏后添加省略号*/
white-space: nowrap;/*强制不换行*/
  }
  .pColor span.fl{
    display: inline-block;
    width:65%;
    overflow: hidden; /*自动隐藏文字*/
text-overflow: ellipsis;/*文字隐藏后添加省略号*/
white-space: nowrap;/*强制不换行*/
    
  }
  .pColor{
    color:#ccc;
    font-size: 14px;
    margin-top:4px;
  }
  .mb10{
    margin-bottom:10px;
  }
  .outMainLine{
    border-bottom:10px solid #f4f4f4;
  }
  .imgList{
    
  }
  .titleHead{
    margin:10px 0;
  }
.imgList img{
  width:100%;
  height:auto;
}
.imgList .itListImg{
  width:48%;
  height:auto;
  line-height:24px;
}
.itListImg:nth-child(2n){
  float:right;
}
.itListImg h4{
  overflow: hidden; /*自动隐藏文字*/
text-overflow: ellipsis;/*文字隐藏后添加省略号*/
white-space: nowrap;/*强制不换行*/
}
.showAll{
  color:#999;
  font-size: 12px;
  padding:0 8px 0 10px;
  height:21px;
  line-height: 21px;
  border:1px solid #ccc;
  text-align: center;
  margin-top:8px;
  margin-right: 6px;
}
</style>
