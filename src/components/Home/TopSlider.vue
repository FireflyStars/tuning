<template>
  <slick-carousel
    class="topSlider"
    ref="slick"
    :options="slickOptions">
    <div v-for="item in slides" class="item"
         :style="{ backgroundImage: 'url(' + item.src + ')' }">
      <div class="container">
        <div class="text-wrap">
          <h1>{{ item.title }}</h1>
          <p>{{ item.subTitle }}</p>
          <router-link to="/tuning" class="btn bigBtn"><span>Подробнее</span></router-link>
        </div>
      </div>
    </div>
  </slick-carousel>
</template>

<script>
  import SlickCarousel from "vue-slick/src/slickCarousel"
  import slide1 from '@/assets/images/slider/slide-1.jpg';

  export default {
    components: {SlickCarousel},
    data () {
      return {
        slickOptions: {
          slidesToShow: 1,
          dots: true,
          infinite: true,
          speed: 300,
          arrows: false,
          autoplaySpeed: 2000
        },
        slides: [
          {src: slide1, title: 'Чип-тюнинг', subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, nemo.'},
          {src: slide1, title: 'Чип-тюнинг', subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, nemo.'}
        ]
      }
    }
  }
</script>

<style scoped lang="less">

</style>
