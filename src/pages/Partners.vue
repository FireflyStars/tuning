<template>
  <div>
    <app-header></app-header>
    <div class="content-app">
      <div class="container">
        <breadcrumbs :link="link"></breadcrumbs>
        <div class="section-ttl left">Партнеры</div>
        <div class="list-partners">
          <div class="item" v-for="partner of partners" :key="partner.id">
            <div class="item-img">
              <a :href="partner.url"><img :src="partner.logo" :alt="partner.name"></a>
            </div>
            <div class="item-text">
              <h2>{{ partner.name }}</h2>
              <p>{{ partner.description }}</p>
            </div>
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

  // import logo1 from '../assets/images/partners/partner-1.jpg'

  export default {
    data() {
      return {
        link: 'Партнеры',
        partners: [
          // {logo: logo1, name: 'Allt.ru.com', descr: 'Основное направление это: форсирование моторов и и подготовка автомобилей для спортивных соревнований.'},
        ]
      }
    },
    components: {
      Breadcrumbs,
      Ask
    },
    mounted(){
      const app = this;
      axios('api/partner').then(function(response){
        app.partners = response.data;
      }).catch(function(errors){
        console.log("partner errors");
      });
    },
    created(){
        // let body = document.querySelector('body');
        // body.classList.remove('overflow');      
    }    
  }
</script>

<style scoped>

</style>