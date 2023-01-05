<template>
  <div>
    <app-header></app-header>
    <div class="content-app">
      <div class="container">
        <breadcrumbs :link="link"
                     :subLink="news.name"></breadcrumbs>
        <pre class="section-ttl left">{{ news.name }}</pre>
        <div class="text-wrap">
          <div class="img-wrap">
            <img :src="news.image" :alt="news.name" v-if="!news.type"  style="width: 100%">
            <video class="tuning-video"  style="width: 100%" controls="controls" v-if="news.type">
              <source :src="news.image" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
            </video>                 
          </div>
          <div v-html="news.description"></div>
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
  import News from '@/components/News'
  import axios from 'axios'

  export default {
    props: ['id'],
    data() {
      return {
        link: 'Новости',
        news: {
              id: 1,
              type:0,
              image: '',
              name: 'Новости1',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius ornare pretium. Cras velsapien et purus efficitur interdu'
            },
      }
    },
    components: {
      Breadcrumbs,
      Ask
    },
    beforeCreate(){
      const app = this;
      let baseUrl = window.location.protocol+"//"+window.location.host+"/";
      axios.get( baseUrl + 'api/news').then(function(response){
       app.news =  response.data.find(item=>item.id == app.id);
      }).catch(function(errors){
        console.log(errors);
      })      
  }      
  }
</script>

<style scoped>

</style>