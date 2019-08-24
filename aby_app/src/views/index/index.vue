<template>
  <div style="margin-bottom:100px"> 
    <carousel></carousel>
    <div class="fy">
      <mt-navbar v-model="selected">
        <mt-tab-item id="fangyuan">房源</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="fangyuan">
          <div @click="dingwei" :class="searchBarFixed==true ?'fixed-top' :'dingwei'">
            <div class="chengshi">
              <span>杭州</span>
            </div>
            <div class="dingwei1">
              <input v-model="jingdian" type="text" placeholder="输入景点、地址或房源名称" >
            </div>

          </div>
          <div class="fy_time">
            <row>
              <i-col span="24">
                  <Date-picker :value="value2" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 100%"></Date-picker>
              </i-col>
            </row>
          </div>
          <mt-button class="ss_fy" size="large">搜索房源</mt-button>
        </mt-tab-container-item>
        <mt-tab-container-item id="tiyan">
          <div class="dingwei">
            <div class="dingwei1">
              <input type="text" placeholder="输入景点、地址或房源名称">
            </div>
            <span>定位</span>
          </div>
          <div class="fy_time">
            <input type="text" value="入住退房时间">
          </div>
          <mt-button class="ss_fy" size="large">搜索房源</mt-button>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <zuixin></zuixin>
    <xjbfy></xjbfy>
    <gfhp></gfhp>
    <fangdong></fangdong>
    <div class="quan-1">
      <div class="quan-2">
        <div class="ser">
          <div class="search">
            <div class="hangzhou">
              <span>杭州</span>
            </div>
            <div class="inp">
              <input v-model="text" v-focus @keyup.13="search" type="search" ref="input1" placeholder="输入景点、地址或房源名">
            </div>
          </div>
          <mt-button @click="quxiao" class="quxiao">取消</mt-button>
        </div>
        <div @click="diqu" class="diqu" v-for="i of 4" :key="i">  
          <div class="fdq">
            <div class="fdq-icon">
              <span class="iconfont icon-dianzan1"></span>
            </div>
            <div class="fdq-1">
              <span class="fdq-font">西湖区</span>
              <p class="fdq-font-1">中国·浙江省·杭州市</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import carousel from './carousel'
import zuixin from './zuixin'
import xjbfy from './xjbfy'
import gfhp from './gfhp'
import fangdong from './fangdong'
export default {
  data() {
    return {
      value1: '2016-01-01',
      value2: ['2016-01-01', '2016-02-15'],
      selected:"fangyuan",
      city:"",
      searchBarFixed:false,
      jingdian:"",
      text:""
    }
  },
  components:{carousel,zuixin,xjbfy,gfhp,fangdong},
  mounted() {
    window.addEventListener('scroll',this.handleScroll)
  },
  directives:{
    focus:{
      inserted:function(el,{value}){
        if(value)
        {elem.focus()}
      }
    }
  },
  methods: {
    search(){
      console.log(`查找 ${this.kwords} 相关的内容...`);
      this.$refs.input1.blur();
    },
    handleScroll(){
      var scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
      var offsetTop=document.querySelector('.dingwei').offsetTop;
      if (scrollTop>offsetTop){
        this.searchBarFixed=true;
      }else{
        this.searchBarFixed=false;
      }
    },
    dingwei(){
      var quan=document.querySelector(".quan-1");
      quan.style.display="block";
      this.text="";
      this.jingdian="";
    },
    quxiao(){
      this.text="";
      var quan=document.querySelector(".quan-1");
      quan.style.display="none";
    },
    diqu(e){
      var a=e.target;
      var b=document.querySelector(".fdq-font");
      if(a.nodeName=="SPAN"||a.nodeName=="P"||a.nodeName=="DIV"){
        this.text=b.textContent;
      };
      var quan=document.querySelector(".quan-1");
      quan.style.display="none";
      this.jingdian=this.text;
    },
  },
  watch:{
    text(){
      this.search();
    }
  }
}
</script>
<style>
@import "./css/index.css";
</style>