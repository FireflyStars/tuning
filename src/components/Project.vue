<template>
  <div class="list-box">
    <div class="item"
         v-for="item in project"
         :key="item.id">
      <div class="item-img">
        <img :src="item.imageSrc" alt="">
      </div>
      <div class="item-text">
        <h2>{{ item.title }}</h2>
        <p>{{ item.descr }}</p>
        <router-link :to="'/project/' + item.id">читать дальшe</router-link>
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
    }
  }
</script>

<style scoped>

</style>