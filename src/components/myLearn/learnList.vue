<template>
  <div>
    <div class="outTitle">
      <div class="clearfix titleL">
        <div class="fl">我的课程</div>
        <group class='fr blankTitle'>
          <popup-radio title="" :options="options2" v-model="option2"></popup-radio>
        </group>
      </div>
    </div>
    <ul v-if='mainList.length > 0'>
      <li class="clearfix" v-for='it in mainList'>
        <img :src="it.src" alt="" class="fl sideListLeft" />
        <h3 class="">{{it.title}}</h3>
        <p>{{it.school}}</p>
        <p>{{it.progross}}</p>
        <box gap="10px">
          <x-progress :percent="percent2" :show-cancel="false"></x-progress>
        </box>
      </li>
      
    </ul>
    <div class='noList' v-else>
           你当前没有<span>{{getOption2}}</span>的课程
    </div>
  </div>
</template>
<script>
  import { Group, PopupRadio, XProgress, Box } from 'vux'
  export default {
    data () {
      return {
        percent2: 4.6,
        mainList: [
          {
            src: './static/img/learnList1.jpg',
            title: 'Omg',
            school: '中国海洋大学',
            progross: '进行至第1周，共17周'
          }
        ],
        option2: '正在进行',
        options2: [{
          key: 'A',
          value: '正在进行'
        }, {
          key: 'B',
          value: '即将开始'
        }, {
          key: 'C',
          value: '已结束'
        }, {
          key: 'D',
          value: '已报名下次开课'
        }]
      }
    },
    components: {
      Group,
      PopupRadio,
      XProgress,
      Box
    },
    created () {},
    mounted () {},
    computed: {
      getOption2 () {
        if (this.option2 === 'A' || this.option2 === '正在进行') {
          return '正在进行'
        } else if (this.option2 === 'B') {
          return '即将开始'
        } else if (this.option2 === 'C') {
          return '已结束'
        } else if (this.option2 === 'D') {
          return '已报名下次开课'
        }
      }
    },
    methods: {
      getOptionValue () {
        console.log(this.option2)
      }
    },
    watch: {
      option2 (n, o) {
        console.log(n, o)
      }
    }
  }
</script>
<style>
 .noList{
    text-align:center;
    margin-top:50px;
    color:#ccc;
  }
 .sideListLeft{
   width:45%;
   height:90px;
 }
  .blankTitle .weui-cells{
    margin-top:0;
    background:#f6f6f6;
  }
  .blankTitle .weui-cells:before{
    border-top:none;
  }
  .blankTitle .weui-cells:after{
    border-bottom:none;
  }
  .titleL{
    height:40px;
    line-height: 40px;
    width:96%;
    margin:0 auto;
    border-bottom:1px solid #bdbdbd;
  }
  .blankTitle .weui-cell{
    padding:8px 15px;
  }
  .outTitle{
    width:100%;
    background:#f6f6f6;
  }
  /*.v-transfer-dom .weui-cell__ft{
    display: none;
  }*/
</style>
