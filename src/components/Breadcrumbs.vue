<template>
  <ul class="breadcrumbs">
    <li><router-link to="/">Главная</router-link></li>
    <li v-if="!subLink"><span>{{ link }}</span></li>
    <li v-if="subLink"><router-link :to="'/' + linkRoute">{{ link }}</router-link></li>
    <li v-if="subLink"><span>{{ subLink }}</span></li>
  </ul>
</template>

<script>
  export default {
    props: ['link', 'subLink'],
    computed: {
      linkRoute () {
        let route = this.$route.fullPath.split('/')[1]
        return route
      }
    }
  }
</script>

<style scoped>

</style>