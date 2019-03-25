<template>
  <div>
    <app-header></app-header>
    <div class="content-app">
      <div class="container">
        <breadcrumbs :link="link" :subLink="project.title"></breadcrumbs>
        <pre class="section-ttl left">{{ project.title }}</pre>
        <div class="text-wrap">
          <div class="img-wrap">
            <img :src="project.imageSrc" :alt="project.title">
          </div>
          <p>{{ project.descr }}</p>
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
      project () {
        const id = this.id
        return this.$store.getters.projectById(id)
      }
    },
    data() {
      return {
        link: 'Проекты'
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