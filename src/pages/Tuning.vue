<template>
  <div>
    <app-header></app-header>
    <div class="content-app">
      <div class="container">
        <breadcrumbs :link="link"></breadcrumbs>
        <div class="section-ttl left">Чип Тюнинг</div>
        <div class="filter">
          <div class="select-wrap">
            <select name="">
              <option value="">Выбрать марку</option>
              <option value="">1</option>
              <option value="">12</option>
              <option value="">123</option>
            </select>
            <div class="arrow"><i class="fas fa-chevron-down"></i></div>
          </div>
          <div class="select-wrap">
            <select name="" disabled>
              <option value="">Модель</option>
              <option value="">1</option>
              <option value="">12</option>
              <option value="">123</option>
            </select>
            <div class="arrow"><i class="fas fa-chevron-down"></i></div>
          </div>
          <div class="select-wrap">
            <select name="">
              <option value="">Год</option>
              <option value="">1</option>
              <option value="">12</option>
              <option value="">123</option>
            </select>
            <div class="arrow"><i class="fas fa-chevron-down"></i></div>
          </div>
          <div class="select-wrap">
            <select name="">
              <option value="">Мотор</option>
              <option value="">1</option>
              <option value="">12</option>
              <option value="">123</option>
            </select>
            <div class="arrow">
              <i class="fas fa-chevron-down"></i>
            </div>
          </div>
        </div>
        <div class="grid-tuning">
          <div class="item" v-for="item in [1,2,3,4,5,6,7,8]">
            <img src="../assets/images/demo/tuning-1.jpg" alt="">
            <div class="ttl">Audi</div>
          </div>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Breadcrumbs from '@/components/Breadcrumbs'

  export default {
    data() {
      return {
        link: 'Чип Тюнинг'
      }
    },
    components: {
      Breadcrumbs
    }
  }
</script>

<style scoped>

</style>