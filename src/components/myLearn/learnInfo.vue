<template>
  <div>
    <section class='por'>
      <img class='mainHead' :src="mainHead"/>
      <img class="poa sideRight" :src="sideRight" alt="" />
      <div class="poa headI">
        <img class='headImg' :src="userImg" alt="" />
        <p>1234</p>
      </div>
      
      <div class="poa mainbutton clearfix ">
        <span class="fl offLine spanButton">
          <i class="fa fa-cloud-download"></i>
                离线课程
        </span>
        <span class="fr msgInfo spanButton">
          <i class="fa fa-commenting-o por">
            <span class='poa dotRight'></span>
          </i>
        消息中心
        </span>
      </div>
    </section>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        mainHead: './static/img/learnH.jpg',
        userImg: './static/img/userImg.jpg',
        sideRight: './static/img/sideright.jpg'
      }
    },
    created () {},
    mounted () {},
    computed: {},
    methods: {}
  }
</script>
<style>
  .mainHead{
    width:100%;
    height:auto;
  }
  .por{
    position: relative;
  }
  .poa{
    position: absolute;
  }
  .mainbutton{
    bottom:0;
    left:0;
    width:100%;
    height:50px;
  }
  .mainbutton .spanButton{
    display: inline-block;
    width:49%;
    height:50px;
    background:rgba(0,0,0,.3);
    line-height: 50px;
    text-align: center;
    color:#fff;
  }
  .headI{
    width:100%;
    left:0;
    top:1.5rem;
    height:100px;
    text-align: center;
    color:#fff;
  }
  .headImg{
    width:3rem;
    height:3rem;
    border:2px solid #fff;
    border-radius: 50%;
    display: inline-block;
  }
  .sideRight{
    top:40px;
    right:0;
    width:29px;
    height:88px;
  }
  .dotRight{
    width:8px;
    height:8px;
    top:0;
    right:-4px;
    background:red;
    display: inline-block;
    border-radius: 50%;
  }
</style>
