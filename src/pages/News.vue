<template>
  <div>
    <app-header></app-header>
    <div class="content-app">
      <div class="container">
        <breadcrumbs :link="link"></breadcrumbs>
        <div class="section-ttl left">Новости</div>
        <div class="list-box">
          <div class="item"
              v-for="(item,index) in news" :key="index"
              >
            <div class="item-img">
              <div class="img" :style="{'backgroundImage': 'url(' + item.image +')'}" alt="" v-if="!item.type"></div>
              <div class="tuning-video"  v-if="item.type" >
                <video controls="controls" width="360" height="240">
                  <source :src="item.image" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
                </video>
              </div>        
            </div>
            <div class="item-text">
              <h2>{{ item.name }}</h2>
              <div v-if="item.description.length >= 255" v-html="lessDesc(item.description) +'&nbsp;&nbsp;<a href=/news/'+item.id+'>читать дальшe</a>'"></div>
              <div v-if="item.description.length < 255" v-html="item.description  +'&nbsp;&nbsp;<a href=/news/'+item.id+'>читать дальшe</a>'"></div>
            </div>
          </div>
        </div>
        <pagination
        :total-pages="totalPages"
        :total="total"
        :per-page="perPage"
        :current-page="currentPage"
        @pagechanged="onPageChange"
        ></pagination>        
        <!-- <news></news> -->
      </div>
    </div>
    <ask></ask>
    <app-footer></app-footer>
  </div>

</template>

<script>
  import Breadcrumbs from '@/components/Breadcrumbs'
  import Ask from '@/components/Ask'
  import Pagination from '@/components/Pagination';
  import axios from 'axios'

  export default {
    data() {
      return {
        link: 'Новости',
        news: [],
        total: 0,
        perPage: 3,
        totalPages: 3,
        currentPage: 1,
        totalNews: []        
      }
    },
    components: {
      Breadcrumbs,
      Ask,
      Pagination,
    },
    methods: {
      onPageChange(page) {
          let news = this.totalNews;
          this.total = news.length;
          this.totalPages = Math.ceil(this.total / this.perPage);
          this.news = news.slice(this.perPage*(page-1), this.perPage*page);          
          this.currentPage = page;
      },
      lessDesc(desc){
        var div = document.createElement("div");
        div.innerHTML = desc;
        var text = div.textContent || div.innerText || "";
        return text.substring(0,255);        
      }      
    },
    beforeCreate(){
      // if(this.$store.getters.news[0].name === ''){
        const app = this;
        axios.get('api/news').then(function(response){
          app.totalNews = response.data
          app.onPageChange(app.currentPage)
        }).catch(function(errors){
          console.log(errors);
        })      
      // } 
    },
    mounted(){
      let body = document.querySelector('body');
      body.classList.remove('overflow');      
    }    
  }
</script>

<style scoped>

</style>