<template>
  <div>
    <div class="outTitle">
      <div class="clearfix titleL">
        <div class="fl">我的课程</div>
        <!--<popup-picker title="" :data="options2" v-model="option2" value-text-align="left"></popup-picker>-->
        <group class='fr blankTitle'>
          <popup-radio title="" :options="options2" v-model="option2"></popup-radio>
        </group>
      </div>
    </div>
    <ul v-if='mainListed.length > 0'>
      <li class="clearfix titleB" v-for='it in mainListed'>
        <img :src="it.src" alt="" class="fl sideListLeft" />
        <div class='fl sideListRight'>
          <div class="sideTitle">{{it.title}}</div>
          <p class='sideSchool'>{{it.school}}</p>
          <p class='sideProgross'>{{it.progross}}</p>
          <box gap="2px 0 0 0">
            <x-progress :percent="percent2" :show-cancel="false"></x-progress>
          </box>
        </div>
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
          },
          {
            src: './static/img/learnList1.jpg',
            title: 'Omg中国海洋大学中国海洋大学',
            school: '中国海洋大学',
            progross: '进行至第1周，共17周'
          }
        ],
        mainListed: [],
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
    created () {
      this.mainListed = this.mainList
    },
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
        if (n === 'A' || n === '正在进行') {
          this.mainListed = this.mainList
        } else if (n === 'B') {
          this.mainListed = this.mainList
        } else if (n === 'C') {
          this.mainListed = []
        } else if (n === 'D') {
          this.mainListed = []
        }
      }
    }
  }
</script>
<style>
 .noList{
    text-align:center;
    margin-top:50px;
    color:#ccc;
    font-size: 14px;
  }
  .titleB{width:96%;margin:0 auto;border-bottom:1px solid #ccc;padding:6px 0;}
  .sideListRight{width:50%;
    
  }
  .sideListRight .sideTitle{font-size: 18px;word-break:break-all;height:56px;overflow: hidden;}
 .sideListLeft{
   width:45%;
   height:100px;
   margin-right:3%;
 }
 .sideSchool{font-size: 12px;color:#ccc;}
 .sideProgross{font-size: 12px; color:#04BE02;}
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
