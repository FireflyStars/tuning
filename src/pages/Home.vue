<template>
  <div>
    <app-header></app-header>
    <top-slider></top-slider>
    <section class="section" style="padding-bottom:0; padding-top:25px">
      <div class="container">     
        <tuning></tuning>
      </div>
    </section>
    <!-- <section class="section section-four white">
      <div class="container">
        <div class="section-ttl">
          Последние посты из instagram
          <span>подписывайтесь на нас</span>
        </div>
        <div class="grid">
          <div class="item" v-for="(item,index) in gallery" :key="index">
            <img :src="item.image" alt="" style="width:100%; height:100%">
          </div>
        </div>
      </div>
    </section> -->
    <section class="section">
      <div class="container">
        <div class="section-ttl">Новости</div>
        <news></news>
      </div>
    </section>
    <section class="section section-six white">
      <div class="container">
        <div class="section-ttl">Проекты</div>
        <project></project>
      </div>
    </section>
    <ask></ask>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import TopSlider from '@/components/Home/TopSlider'
  import Ask from '@/components/Ask'
  import News from '@/components/Latestnews'
  import Project from '@/components/Latestproject'
  import Tuning from '@/components/HomeTuning'
  import axios from 'axios'

  export default {
    data() {
      return {
        service: [
          {
            id: 1,
            image: "",
            name: 'Проект 1',
            description: ''
          },
          {
            id: 2,
            image: "",
            name: 'Проект 1',
            description: ''
          },
          {
            id: 3,
            image: "",
            name: 'Проект 1',
            description: ''
          }                                               
        ],
        gallery: [
          {
            image: "",
          },             
        ],
      }
    },
    components: {
      TopSlider,
      Ask,
      News,
      Project,
      Tuning,
    },      
    created(){
      const app = this;
      axios('api/homedata').then(function(response){
        app.$store.commit('formatNews');
        app.$store.commit('createNews', response.data.news);
        app.$store.commit('formatProject');
        app.$store.commit('createProject', response.data.projects);
        app.$store.commit('formatService');
        app.$store.commit('createService', response.data.twoServices);
        app.service = response.data.threeServices;
      }).catch(function(errors){
        console.log(errors);
      })
    },
  }
</script>

<style scoped>

</style>
