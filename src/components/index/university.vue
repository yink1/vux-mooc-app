<template>
  <div id='university'>
    <div class="mainLine">
    <div class='clearfix'>
      <h4 class='fl hezuoSchool'>合作高校</h4>
      <span class="fr showAll">查看全部
        <i class="fa fa-chevron-right"></i>
      </span>
    </div>
    
    <scroller lock-y :scrollbar-x=false>
      <div class="box1">
        <div class="box1-item" v-for="(it,i) in schoolList" >
          <router-link :to='it.url'>
          <img :src="it.src" alt="" />
          <span class='schoolName'>{{it.title}}</span>
          </router-link>
        </div>
        <div class='allSchool fl'>全部140所</div>
      </div>
      
    </scroller>
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
      showList1: true,
      scrollTop: 0,
      onFetching: false,
      bottomCount: 20,
      schoolList: [
        {
          src: './static/img/logo.png',
          url: '/',
          title: '清华大学'
        },
        {
          src: './static/img/logo.png',
          url: '/',
          title: '上海复旦大学'
        },
        {
          src: './static/img/logo.png',
          url: '/',
          title: '华东师范大学'
        },
        {
          src: './static/img/logo.png',
          url: '/',
          title: '南京大学'
        },
        {
          src: './static/img/logo.png',
          url: '/',
          title: '浙江大学'
        },
        {
          src: './static/img/logo.png',
          url: 'www.baidu.com',
          title: '哈尔滨工业大学'
        },
        {
          src: './static/img/logo.png',
          url: '/',
          title: '西安交通大学'
        },
        {
          src: './static/img/logo.png',
          url: '/',
          title: '同济大学'
        }
      ]
    }
  },
  mounted () {
  },
  methods: {
    onScroll (pos) {
      this.scrollTop = pos.top
    },
    onCellClick () {
      window.alert('cell click')
    },
    onClickButton () {
      window.alert('click')
    },
    changeList () {
      this.showList1 = false
      this.$nextTick(() => {
        this.$refs.scroller.reset({
          top: 0
        })
      })
    }
  }
}
</script>

<style scoped>
  #university{
    padding-bottom:10px;
    border-bottom:10px solid #F6F6F6;
  }
.box1 {
  height: 70px;
  position: relative;
  width: 920px;
  margin-top:10px;
}
.box1-item {
  width: 90px;
  height: 70px;
  display:inline-block;
  margin-left: 15px;
  float: left;
  text-align: center;
}
.box1-item img{
  width:40px;
  height:40px;
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
.hezuoSchool{
  margin-top:6px;
  margin-left:6px;
}
</style>
