<template>
  <div>
    <app-header></app-header>
    <div class="content-app">
      <div class="container">
        <breadcrumbs :link="link"
                     :subLink="service.name"></breadcrumbs>
        <pre class="section-ttl left">{{ service.name }}</pre>
        <div class="text-wrap">
          <div v-html="service.description"></div>
        </div>
        <div class="service-items" v-for="(subservice, index) in groupImage" :key="index">
          <div class="service-ttl"  v-html="subservice.name">CMD</div>
          <div class="items">
            <div class="item" v-for="(item, index) in subservice.image" :key="index">
              <div class="item-ttl center"  v-html="item.name">Master</div>
              <div class="img-wrap">
                <img :src="item.image" alt="" style="background-size:contain">
              </div>
              <div class="item-sub-ttl" v-html="item.description">OBD + Tricor + Fxx plugin</div>
              <div class="item-ttl">{{ item.price }}€</div>
            </div>
            <!-- <div class="item"></div>
              <div class="item-ttl center">Master</div>
              <div class="img-wrap">
                <img src="../assets/images/slider/slide-1.jpg" alt="">
              </div>
              <div class="item-sub-ttl">OBD + Tricor + Fxx plugin</div>
              <div class="item-ttl">4900€</div>
            </div> -->
          </div>
        </div>        
      </div>
    </div>
    <ask></ask>
    <app-footer></app-footer>
  </div>

</template>

<script>
  import Breadcrumbs from '@/components/Breadcrumbs'
  import Ask from '@/components/Ask'
  import axios from 'axios'
  // import slide1 from '@/assets/images/services/service-4.jpg';
  
  export default {
    props: ['id'],

    data() {
      return {
        link: 'Сервис',
        groupImage: [
          {
            name: '',
            image: [
              {
                name: '',
                image: "",
                description: '',
                price: null
              },
              {
                name: '',
                image: "",
                description: '',
                price: null
              }              
            ]
          },        
          ],
        service: 
          {
            id: '1',
            image: "",
            name: '',
            description: ''
          } ,          
        url: 'http://tuning.uniq-st.cz/'
      }
    },
    components: {
      Breadcrumbs,
      Ask
    },
    created(){
      const app = this;
        // axios.get('http://localhost:8000/api/uniqueservice/'+ this.id + '/gallery').then(function(response){
        axios.get('http://chiptuning.uniq-st.cz/api/uniqueservice/'+ this.id + '/gallery').then(function(response){
        app.service = response.data.service;
        app.groupImage = response.data.groupImage;
      }).catch(function(response){

      })
    },
  }
</script>

<style>
  .service-items {
    margin-bottom: 30px;
  }
  @media only screen and (max-width: 480px) {
    .service-items {
      margin-bottom: 15px;
    }
  }
  .service-items .service-ttl {
    font-size: 30px;
    font-family: "Roboto Black", sans-serif;
    text-align: center;
    margin-bottom: 30px;
  }
  @media only screen and (max-width: 480px) {
    .service-items .service-ttl {
      font-size: 18px;
      margin-bottom: 15px;
    }
  }
  .service-items .items {
    display: flex;
    margin: 0 -15px;
  }
  @media only screen and (max-width: 480px) {
    .service-items .items {
      margin: 0;
      flex-direction: column;
    }
  }
  .service-items .items .item {
    margin: 0 15px;
    width: 50%;
  }
  .service-items .items .item img{
    width: 100%;
    height: 360px;
  }
  @media only screen and (max-width: 480px) {
    .service-items .items .item {
      margin: 0 0 15px;
    }
  .service-items .items .item {
    width: 100%;
  }
  .service-items .items .item img{
    height: 200px;

  }
  }
  .service-items .items .item .img-wrap {
    margin-bottom: 10px;
  }
  .service-items .items .item .item-ttl {
    font-size: 30px;
    font-family: "Roboto Black", sans-serif;
  }
  @media only screen and (max-width: 480px) {
    .service-items .items .item .item-ttl {
      font-size: 18px;
    }
  }
  .service-items .items .item .item-sub-ttl {
    font-size: 24px;
    font-family: "Roboto Black", sans-serif;
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 480px) {
    .service-items .items .item .item-sub-ttl {
      font-size: 16px;
      margin-bottom: 10px;
    }
  }
  .service-items .items .item .item-ttl.center {
    text-align: center;
    margin-bottom: 10px;
  }

</style>