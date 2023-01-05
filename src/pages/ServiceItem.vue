<template>
  <div>
    <app-header></app-header>
    <div class="content-app">
      <div class="container">
        <breadcrumbs :link="link"
                     :subLink="service.name"></breadcrumbs>
        <div class="section-ttl left">{{ service.name }}</div>
        <div class="text-wrap">
          <div v-html="service.description"></div>
        </div>
        <div class="slider-wrap">
          <h2>Фото и примеры</h2>
          <slick-carousel
            class="slider"
            ref="slick"
            :options="slickOptions">
            <div v-for="(item, index) in allImages" class="item" :key="index">
              <div class="img" style="background-size:contain"
                   :style="{ backgroundImage: 'url(' + item.image + ')'}"></div>
            </div>
          </slick-carousel>
        </div>
      </div>
    </div>
    <ask></ask>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Breadcrumbs from '@/components/Breadcrumbs';
  import Ask from '@/components/Ask';
  import axios from 'axios';
  import SlickCarousel from "vue-slick/src/slickCarousel";
  // import image from '../assets/images/demo/tuning-1.jpg'
  export default {
    props: ['id'],
    data() {
      return {
        link: 'Сервис',
        allImages: [
          {
            image: ""
          },                         
          ],
        service: 
          {
            id: '1',
            image: "",
            name: '',
            description: ''
          } ,          
        slickOptions: {
          slidesToShow: 3,
          dots: false,
          infinite: true,
          speed: 300,
          arrows: true,
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1
              }
            }
          ]
        },
      }
    },
    methods: {
      reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
          this.$refs.slick.reSlick();
      });
      }
    },    
    components: {
      Breadcrumbs,
      Ask,
      SlickCarousel
    },
    created(){
      const app = this;
      let baseUrl = window.location.protocol+"//"+window.location.host+"/";
      axios.get(baseUrl + 'api/service/'+ this.id + '/gallery').then(function(response){
        app.service = response.data.service;
        app.allImages = response.data.allImages;
      }).catch(function(response){

      })
      console.log(this.id);
    },
    beforeUpdate() {
        if (this.$refs.slick) {
            this.$refs.slick.destroy();
        }
    },
    updated() {
        if (this.$refs.slick && !this.$refs.slick.$el.classList.contains('slick-initialized')) {
            this.$refs.slick.create();
        }
    },
  }
</script>
<style>
  .slider-wrap {
    margin: 30px -10px 30px;
  }

  @media only screen and (max-width: 767px) {
    .slider-wrap {
      margin: 0 -5px 30px;
    }
  }

  .slider-wrap h2 {
    margin-bottom: 15px;
  }

  .slider-wrap .slider .item {
    height: 240px;
    padding: 0 10px;
  }
  @media only screen and (max-width: 1023px) and (min-width: 768px) {
    .slider-wrap .slider .item {
      height: 155px;
    }
  }
  @media only screen and (max-width: 767px) {
    .slider-wrap .slider .item {
      height: 240px;
      padding: 0 5px;
    }
  }
  .slider-wrap .slider .item .img {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 100%;
    width: 100%;
  }

  .slider-wrap .slick-arrow {
    width: 30px;
    height: 30px;
    cursor: pointer;
    border-radius: 50%;
    background: #ddd;
    text-indent: -9999px;
    position: absolute;
    border: none;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
  }

  .slider-wrap .slick-arrow:after {
    color: #000;
    font-size: 18px;
    position: absolute;
    font-weight: bold;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-indent: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slider-wrap .slick-prev {
    left: 25px;
  }
  @media only screen and (max-width: 480px) {
    .slider-wrap .slick-prev {
      left: 15px;
    }
  }
  .slider-wrap .slick-next {
    right: 25px;
  }
  @media only screen and (max-width: 480px) {
    .slider-wrap .slick-next {
      right: 15px;
    }
  }
  .slider-wrap .slick-prev:after {
    content: '<';
  }

  .slider-wrap .slick-next:after {
    content: '>';
  }

  .flex-wrap .items {
    display: flex;
    margin: 0 -10px;
  }

  @media only screen and (max-width: 767px) {
    .flex-wrap .items {
      flex-wrap: wrap;
      margin: 0;
    }
  }
  .flex-wrap {
    margin-bottom: 30px;
  }

  .flex-wrap h2 {
    margin-bottom: 15px;
  }

  .flex-wrap .items .item {
    width: calc(100% / 3 - 10px);
    margin: 0 10px;
  }
  @media only screen and (max-width: 767px) {
    .flex-wrap .items .item {
      width: calc(100% / 2 - 10px);
      margin: 0 5px 10px;
    }
  }
  @media only screen and (max-width: 480px) {
    .flex-wrap .items .item {
      width: 100%;
      margin: 0 0 10px;
    }
  }
  .flex-wrap .items .item img {
    width: 100%;
    height: auto;
    max-height: 100%;
  }

</style>