<template>
  <div style="height:240px;">
    <!-- <mt-swipe :auto="4000">
      <mt-swipe-item><img src="images/h_detail/01/01.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="images/h_detail/01/02.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="images/h_detail/01/03.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="images/h_detail/01/04.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="images/h_detail/01/05.jpg" alt=""></mt-swipe-item>
    </mt-swipe> -->
    <div class="swiper-container carousel">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
      <div class="swiper-slide">Slide 4</div>
      <div class="swiper-slide">Slide 5</div>
      <div class="swiper-slide">Slide 6</div>
      <div class="swiper-slide">Slide 7</div>
      <div class="swiper-slide">Slide 8</div>
      <div class="swiper-slide">Slide 9</div>
      <div class="swiper-slide">Slide 10</div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
export default {
  mounted() {
    new Swiper('.carousel', {
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
        },
      });
  },
}
</script>
<style scoped>
  img{
    width: 100%;
  }
   .swiper-container {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
    
</style>
