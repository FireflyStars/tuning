<template>
<div>
  <div class="list-box">
    <div class="item" v-for="(item, index) in news" :key="index">
      <div class="item-img">
        <div class="img" :style="{'backgroundImage': 'url(' + item.image +')'}" alt="" v-if="!item.type"></div>
        <div class="tuning-video" v-if="item.type" >
          <video controls="controls" width="360" height="240">
            <source :src="item.image" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
          </video>
        </div>        
      </div>
      <div class="item-text">
        <h2>{{ item.name }}</h2>
          <div v-if="item.description.length >= 255" v-html="lessDesc(item.description)+'&nbsp;&nbsp;<a href=/news/'+item.id+'>читать дальшe</a>'"></div>
          <div v-if="item.description.length < 255" v-html="item.description + '&nbsp;&nbsp;<a href=/news/'+item.id+'>читать дальшe</a>'"></div>
      </div>
    </div>
  </div>
 </div> 
</template>

<script>

  export default {
    computed: {
      news () {
        return this.$store.getters.news
      }
    },  
    methods: {
      lessDesc(desc){
        var div = document.createElement("div");
        div.innerHTML = desc;
        var text = div.textContent || div.innerText || "";
        return text.substring(0,255);        
      }      
    }
  }
</script>

<style scoped>
  /* .desc a{
    text-decoration: none;
  } */
</style>