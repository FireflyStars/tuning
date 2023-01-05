<template>
<div>
  <div class="list-box">
    <div class="item"
         v-for="(item,index) in news" :key="index"
        >
      <div class="item-img">
        <img :src="item.image" alt="" v-if="!item.type">
        <div class="tuning-video"  v-if="item.type" >
          <video controls="controls" width="360" height="240">
            <source :src="item.image" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
          </video>
        </div>        
      </div>
      <div class="item-text">
        <h2>{{ item.name }}</h2>
        <div v-if="item.description.length >= 255" v-html="item.description.split('</div>')[0].replace('<br>', '') +'&nbsp;&nbsp;<a href=/news/'+item.id+'>читать дальшe</a>'"></div>
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
 </div>
</template>

<script>
  import Pagination from '@/components/Pagination';
  import axios from 'axios';

  export default {
    data() {
      return {
        news: [],
        total: 0,
        perPage: 3,
        totalPages: 3,
        currentPage: 1,
        totalNews: []
      }
    },    
    components: {
      pagination: Pagination
    },    
    methods: {
      onPageChange(page) {
          let news = this.$store.getters.news;
          this.total = news.length;
          this.totalPages = Math.ceil(this.total / this.perPage);
          this.news = news.slice(this.perPage*(page-1), this.perPage*page);          
          this.currentPage = page;
      },
      created(){
        // const app = this;
        // axios.get('api/news').then(function(response){
        //   app.$store.commit('formatNews');
        //   app.$store.commit('createNews', response.data);
        //   console.log(response.data);
        // }).catch(function(errors){
        //   console.log(errors);
        // })    
      },                
    },
    mounted() {
      this.onPageChange(this.currentPage)
    }    
  }
</script>
<style scoped>

</style>