<template>
  <ul class="breadcrumbs">
    <li><a href="http://localhost:8000/othertuning">Чип-тюнинг</a></li>
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
        let route = this.$route.fullPath.split('/')[1]
        return route
      }
    }
  }
</script>

<style scoped>

</style>