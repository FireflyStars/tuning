<template>
  <div>
    <app-header></app-header>
    <div class="content-app">
      <div class="container">
        <breadcrumbs :link="link"></breadcrumbs>
        <div class="section-ttl left">Сервис</div>
        <!-- <div class="container"> -->
          <div class="grid-service">
            <div class="item">
              <router-link :to="'/service/' + tuning.id">
                <div class="img" :style="{'backgroundImage': 'url(' + tuning.image +')'}" alt=""></div>
                <!-- <img class="service-img" :src="tuning.image"/> -->
                <div class="service-ttl">{{ tuning.name }}</div>
              </router-link>
            </div>
            <div class="item">
              <router-link :to="'/uniqueservice/' + unique.id">
                <!-- <img class="service-img" :src="unique.image"/> -->
                <div class="img" :style="{'background': 'url(' + unique.image +')'}" alt=""></div>
                <div class="service-ttl">{{ unique.name }}</div>              
              </router-link>
            </div>
            <div class="item" v-for="(item, index) in service" :key="index">
              <router-link :to="'/service/' + item.id">
                <!-- <img class="service-img" :src="item.image"/> -->
                <div class="img" :style="{'backgroundImage': 'url(' + item.image +')'}" alt=""></div>
                <div class="service-ttl">{{ item.name }}</div>                  
              </router-link>
            </div>                            
          </div>
        <!-- </div> -->
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
  // import logo1 from '@/assets/images/slider/slide-1.jpg'

  export default {
    data() {
      return {
        link: 'Сервис',
        tuning: 
          {
            name: 'tuning',
            id: 1,
            image: ''
          },
        unique: 
          {
            name: 'unique',
            id: 2,
            image: ''
          }          
        ,
        service: [
          {
            name: 'normal',
            id: 3,
            image: ''
          },                                                    
        ],
      }
    },
    components: {
      Breadcrumbs,
      Ask,
    },
    beforeCreate(){
      const app = this;
      axios.get('api/service').then(function(response){
        app.tuning = response.data.service[0];
        app.service = response.data.service.slice(1, response.data.service.length);
        app.unique = response.data.unique;
      }).catch(function(errors){
        console.log(errors);
      })  
    },
    created(){
      let body = document.querySelector('body');
      body.classList.remove('overflow');        
    }        
  }
</script>

<style scoped>
  .list-services .row a{
    text-decoration: none;
  }
  .list-services .row span{
    font-weight:700;
    font-size:22px;
  }
  .list-services .row span.red{
    color: #ff3737;
  }
  .list-services .row span.black{
    color: #000;
  }
  /* .custom-row{
    display: inherit;
  } */
</style>