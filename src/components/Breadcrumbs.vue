<template>
  <ul class="breadcrumbs">
    <li><router-link to="/">Главная</router-link></li>
    <li v-if="!subLink"><span>{{ link }}</span></li>
    <li v-if="subLink"><router-link :to="'/' + linkRoute">{{ link }}</router-link></li>
    <li v-if="subLink"><span>{{ subLink }}</span></li>
    <li v-if="subLinkModel"><span>{{ subLinkModel }}</span></li>
    <li v-if="subLinkYear"><span>{{ subLinkYear }}</span></li>
    <li v-if="subLinkEngine"><span>{{ subLinkEngine }}</span></li>
  </ul>
</template>

<script>
  export default {
    props: ['link', 'subLink', 'subLinkModel', 'subLinkYear', 'subLinkEngine'],
    computed: {
      linkRoute () {
        let route = this.$route.fullPath.split('/')[1];
        if(route == 'uniqueservice')
          route = 'service';
        return route
      }
    }
  }
</script>

<style scoped>

</style>