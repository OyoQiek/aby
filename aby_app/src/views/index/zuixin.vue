<template>
  <div class="zuixin">
    <p class="zxfy">最新房源</p>
    <div class="quan">
      
      <div v-for="(item,i) of data" :key="i" class="fyys">
        <router-link :to="`/HDetail/${item.hid}`">
          <div class="pic">
            <carousel :pics="images[i]" :height="`100px`"/>
          </div>
        </router-link>
        <div class="wenzi">
          <span class="h_type"><span>{{item.h_type}}</span><strong>·</strong><i>{{item.city}}</i></span>
          <p class="title">{{item.title}}</p>
          <span class="price">￥{{item.price}}<s>￥{{item.original_price}}</s>/晚</span>
          <p class="pingjia">*****<span>18</span></p>
        </div>
      </div>
      <mt-button class="xsgd" size="large" @click="toSearch">显示更多新房源</mt-button>
    </div>
  </div>
</template>
<script>
import Carousel from '../../components/carousel'
export default {
  data() {
    return {
      data:[],
      images:[],
    }
  },
  created() {
    this.showMore();
  },
  methods: {
    toSearch(){
      this.$router.push("/Search")
    },
    showMore(){
      this.axios.get(
        "/house/houseByTime",
        {params:{
          pno:1,
          pagesize:4
        }}
      ).then(res=>{
        console.log(res.data.data);
        this.data=res.data.data;
        for(var i=0;i<this.data.length;i++){
          this.images[i]=this.data[i].pic_address.split(",")
        }
      }).catch(err=>{

      })
    }
  },
  components:{
    Carousel
  }
}
</script>
<style scoped>
.zuixin{
  width: 90%;
  height: 100%;
  margin: 0 auto;
  margin-top:30px; 
  margin-bottom: 30px;
  /* border: 1px solid #000; */
}
.zxfy{
  font-size: 24px;
  font-family: Circular, "PingFang-SC", "Hiragino Sans GB", "微软雅黑", "Microsoft YaHei", "Heiti SC" !important;
  margin-bottom: 10px;
  font-weight: bold;
}
.quan{
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.fyys{
  margin-top: 5px;
  width: 48% !important;
  height: 46% !important;
  padding-top: 8px !important;
  padding-bottom: 12px !important;
}
.pic{
  width: 100%;
  height: 50%;
  border-radius: 5px;
}
.wenzi{
  box-sizing: border-box;
  width: 100%;
  height: 50%;
  border-radius: 5px;
  padding-top: 10px;
}
.h_type{
  font-size: 8px;
  color: sienna;
}
.title{
  text-overflow: ellipsis;
  overflow: hidden;
  margin-top: 8px;
}
.price{
  font-size: 14px;
  display: inline-block;
}
.price s{
  font-size: 12px;
  display: inline-block;
  margin: 0 2px;
}
.pingjia{
  margin-top: 5px;
}
.xsgd{
  margin-top: 10px;
  font-size: 10px!important;
  color: #00848A!important;
  background-color: #fff!important;
  border:1px solid #00848A!important;
}

</style>
