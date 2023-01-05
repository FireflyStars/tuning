<template>
  <div>
  <div class="list-box">
    <div class="item"
         v-for="item in project"
         :key="item.id">
      <div class="item-img">
        <!-- <img :src="item.image" alt="" v-if="!item.type"> -->
        <div class="img" :style="{'backgroundImage': 'url(' + item.image +')'}" alt="" v-if="!item.type"></div>
        <div class="tuning-video" v-if="item.type">
          <video controls="controls" width="360" height="240">
            <source :src="item.image" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
          </video>
        </div>     
      </div>
      <div class="item-text">
        <h2>{{ item.name }}</h2>
        <div v-if="item.description.length >= 255" v-html="lessDesc(item.description)+'&nbsp;&nbsp;<a href=/project/'+item.id+'>читать дальшe</a>'"></div>
        <div v-if="item.description.length < 255" v-html="item.description +'&nbsp;&nbsp;<a href=/project/'+item.id+'>читать дальшe</a>'"></div>
        <!-- <router-link :to="'/project/' + item.id">читать дальшe</router-link> split('</div>')[0].replace('<br>', '') -->
      </div>
    </div>
  </div>
  </div>  
</template>

<script>
  export default {    
    computed: {
      project () {
        return this.$store.getters.project
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

</style>