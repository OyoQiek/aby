<template>
  <div class="carousel" :style="{width:innerWidth+'px'}">
      <!--1.轮播图片-->
        <div class="carousel-inner" :class="ulClass" :style="ulStyle">
        <div v-for="(img,i) of imgs" :key="i" class="carousel-item" :style="{width:innerWidth+'px'}">
            <img :src="img.src" :style="{width:innerWidth+'px'}"/>
        </div>
        <div class="carousel-item" :style="{width:innerWidth+'px'}">
            <img :src="imgs[0].src" :style="{width:innerWidth+'px'}"/>
        </div>
        </div>
        <!--2.左右箭头-->
        <a href="javascript:;" @click="move(1)" class="carousel-control-next">
            <span><img src="images/left_ar.png" alt="">asd</span>
        </a>
        <a href="javascript:;" @click="move(-1)" class="carousel-control-prev">
            <span><img src="images/right_ar.png" alt=""> asd</span>
        </a>
        <!--3.轮播指示符-->
        <ul class="carousel-indicators">
            <li v-for="(img,idx) of imgs" :key="idx" :class="idx==i?'active':''" @click="moveTo(idx)"></li>
        </ul>
  </div>
</template>
<script>
export default {
  data(){
    return {
      innerWidth:window.innerWidth,
      ulClass:{ hasTrans:true },
      i:0,
      imgs:[
        {
          src:"/images/carousel-1.jpg",
        },
        { 
          src:"/images/carousel-2.jpg",
        },
        { 
          src:"/images/carousel-3.jpg",
        },
        { 
          src:"/images/carousel-4.jpg",
        }
      ],
      canClick:true,
      startX:0,
      startY:0,
      moveEndX:0,
      moveEndX:0,
      X:0,
      Y:0
    }
  },
  created(){
    window.addEventListener("resize",()=>{
      this.innerWidth=window.innerWidth;
    });
    document.getElementsByClassName("carousel")[0].addEventListener("touchstart", function(e) {
        e.preventDefault();
        startX = e.originalEvent.changedTouches[0].pageX,
        startY = e.originalEvent.changedTouches[0].pageY;
    });
    document.getElementsByClassName("carousel")[0].addEventListener("touchmove", function(e) {
        e.preventDefault();
        moveEndX = e.originalEvent.changedTouches[0].pageX,
        moveEndY = e.originalEvent.changedTouches[0].pageY,
        X = moveEndX - startX,
        Y = moveEndY - startY;
    });
  },
  methods:{
    move(i){
      if(this.canClick){
        this.canClick=false;
        if(i==-1&&this.i==0){//如果向右移动，且正在显示第1张图片，就要骗
          this.ulClass.hasTrans=false;//去掉父级div上的transition样式类
          setTimeout(()=>{//等50ms后，再进行后续操作
            this.i=this.imgs.length; //悄悄的将父级div移动到最左边
            setTimeout(()=>{//等50ms后，再进行后续操作
              this.ulClass.hasTrans=true;//打开父级div上的transition效果
              this.i+=i;//正式向右移动一次
              setTimeout(()=>{//200s后，才允许单击
                this.canClick=true;
              },200)
            },50)
          },50)
        }else if(i==1&&this.i==this.imgs.length-1){
          //如果向左移动，且现在已经显示最后一张了
          this.i+=i;//可以先带transition效果，左移一次
          setTimeout(()=>{//等左移完，再去掉transition效果，骗用户
            this.ulClass.hasTrans=false;
            setTimeout(()=>{//等50ms后，瞬间将父级div移动到显示第一张图片
              this.i=0;
              setTimeout(()=>{//等50ms后，再次启用transition，为下次提供动画
                this.ulClass.hasTrans=true;
                setTimeout(()=>{//稍等片刻之后允许单击
                  this.canClick=true;
                })
              },50)
            },50)
          },200)
        }else{//如果不是两端的情况，则保持原来的逻辑
          this.i+=i;
          setTimeout(()=>{
            this.canClick=true;
          },300)
        }
      }
    },
    moveTo(i){
      if(this.canClick){
        this.i=i;
        this.canClick=false;
        setTimeout(()=>{
          this.canClick=true;
        },300)
      }
    }
  },
  computed:{
    ulStyle(){
      var width=this.innerWidth*(this.imgs.length+1)+"px";
      var marginLeft=-this.i*this.innerWidth+"px";  
      return { width, marginLeft }
    }
  }
}
</script>
<style scoped>
/* #carousel>.carousel-inner>div>a{
    display:block;
  } */
  .carousel{
    overflow:hidden;
    position: relative;
  }
  .carousel:after{
    content:"";
    display:block;
    clear:both;
  }
   .carousel>.carousel-inner.hasTrans{
     transition:all .2s linear;
   }
  .carousel>.carousel-inner>.carousel-item{
    display:block;
    float:left;
  }
  .carousel>.carousel-inner>.carousel-item>a:last-child{
    display:block;
    height:50px;
    color:#fff;
    text-align:center;
    font-size:15px;
    line-height:50px;
    text-decoration:none;
    background-color:#f68cc6;
  }
  .carousel>.carousel-inner>.carousel-item:nth-child(2)>a:last-child{
    background-color:#fa9c77;
  }
  .carousel>.carousel-inner>.carousel-item:nth-child(3)>a:last-child{
    background-color:#ba4b5d;
  }
  .carousel>.carousel-inner>.carousel-item:nth-child(4)>a:last-child{
    background-color:#02c0f0f5;
  }
  .carousel>.carousel-inner>.carousel-item:nth-child(5)>a:last-child{
    background-color:#bc76dd;
  }
  .carousel>.carousel-inner>.carousel-item:nth-child(6)>a:last-child{
    background-color:#539788;
  }
  .carousel>.carousel-inner>.carousel-item:nth-child(7)>a:last-child{
    background-color:#c67ee79b;
  }
  .carousel>.carousel-inner>.carousel-item:nth-child(8)>a:last-child{
    background-color:#2f49079b;
  }

  /*重写指示符的样式*/
  .carousel-indicators{
    position: absolute;
    left: 50%;
    margin-left: -44px;
    bottom:20px;
  }
  .carousel-indicators li{
    width:12px;height:12px;
    background-color:#fff;
    margin-left:6px;
    margin-right:6px;
    border-radius: 50%;
    float: left;
  }
  .carousel-indicators>li:hover, .carousel-indicators>li.active{
    transform:scale(1.1);
  }
  .carousel-indicators>li:first-child{
    background-color:#f68cc6;
  }
  .carousel-indicators>li:nth-child(2){
    background-color:#fa9c77;
  }
  .carousel-indicators>li:nth-child(3){
    background-color:#ba4b5d;
  }
  .carousel-indicators>li:nth-child(4){
    background-color:#02c0f0f5;
  }
  .carousel-indicators>li:nth-child(5){
    background-color:#bc76dd;
  }
  .carousel-indicators>li:nth-child(6){
    background-color:#539788;
  }
  .carousel-indicators>li:nth-child(7){
    background-color:#c67ee79b;
  }
  .carousel-indicators>li:nth-child(8){
    background-color:#2f49079b;
  }
  /*重写左右箭头的样式*/
  .carousel-control-prev,
  .carousel-control-next{
    width:40px;height:100px;
    background-color:rgba(95, 95, 92, 0.3);
    top:20%;
    margin-left:40px;
    border-radius:0.25rem;
    position: absolute;
    top: 50%;
    left: 0;
  }
  .carousel-control-next{
    margin-right:40px;
  }
</style>


