<template>
  <div>
    <app-header></app-header>
    <div class="content-app">
      <div class="container">
        <breadcrumbs :link="link"
                     :subLink="news.title"></breadcrumbs>
        <pre class="section-ttl left">{{ news.title }}</pre>
        <div class="text-wrap">
          <div class="img-wrap">
            <img :src="news.imageSrc" :alt="news.title">
          </div>
          <p>{{ news.descr }}</p>
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

  export default {
    props: ['id'],
    computed: {
      news () {
        const id = this.id
        return this.$store.getters.newsById(id)
      }
    },
    data() {
      return {
        link: 'Новости'
      }
    },
    components: {
      Breadcrumbs,
      Ask
    }
  }
</script>

<style scoped>

</style>