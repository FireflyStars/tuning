<template>
    <div class="list-services">
        <div class="item" v-for="item in service" :key="item.id">
        <div class="item-text">
            <h2>{{ item.name }}</h2>
            <div v-if="item.description.length >= 255" v-html="item.description.substring(0,255)"></div>
            <div v-if="item.description.length < 255" v-html="item.description"></div>
            <router-link :to="'/service/' + item.id" class="btn" style="margin-top:20px"><span>Перейти</span></router-link>
        </div>
        <div class="item-img">
            <img :src="item.image" :alt="item.name">
        </div>
        </div>
    </div>
</template>

<script>
  export default {
    computed: {
      service () {
        return this.$store.getters.service
      }
    }
  }
</script>

<style scoped>

</style>