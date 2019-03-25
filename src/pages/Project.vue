<template>
  <div>
    <app-header></app-header>
    <div class="content-app">
      <div class="container">
        <breadcrumbs :link="link"></breadcrumbs>
        <div class="section-ttl left">Проекты</div>
        <project></project>
        <div class="pager">
          <div class="item prev"><</div>
          <ul>
            <li class="item"><a href="">1</a></li>
            <li class="item"><a href="">2</a></li>
            <li class="item"><a href="">3</a></li>
          </ul>
          <div class="item next">></div>
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
  import Project from '@/components/Project'

  export default {
    data() {
      return {
        link: 'Проекты'
      }
    },
    components: {
      Breadcrumbs,
      Ask,
      Project
    }
  }
</script>

<style scoped>

</style>