<template>
  <slick-carousel
    class="topSlider"
    ref="slick"
    :options="slickOptions">
    <div v-for="(item, index) in slide" class="item" :key="index"
         :style="{ backgroundImage: 'url(' + item.image + ')' }">
      <div class="container">
        <div class="text-wrap">
          <h1>{{ item.name }}</h1>
          <p>{{ item.description }}</p>
          <a :href="item.link" class="btn transform"><span>Подробно</span></a>
        </div>
      </div>
    </div>
  </slick-carousel>
</template>

<script>
  import SlickCarousel from "vue-slick/src/slickCarousel"
  import axios from 'axios'

  export default {
    components: { SlickCarousel },
    data () {
      return {
        slickOptions: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
          autoplay: true,
          infinite:false, 
          speed: 3000,
          autoplaySpeed: 5000,
        },
      }
    },
    computed:{
      slide() {
        return this.$store.getters.slide;
      }
    },
    beforeCreate(){
      const app = this;
      axios('api/slide').then(function(response){
        app.$store.dispatch('formatSlide');
        app.$store.dispatch('createSlide', response.data);
      }).catch(function(errors){
        console.log(errors);
      })      
    },  
    // beforeUpdate() {
    //   if (this.$refs.slick) {
    //       this.$refs.slick.destroy();           
    //   }
      
    // },
    // updated() { 
    //   if (this.$refs.slick && !this.$refs.slick.$el.classList.contains('slick-initialized')) {
    //       this.$refs.slick.create();
    //   }
    // }, 
  }
</script>

<style scoped lang="less">

</style>
