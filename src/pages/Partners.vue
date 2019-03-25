<template>
  <div>
    <app-header></app-header>
    <div class="content-app">
      <div class="container">
        <breadcrumbs :link="link"></breadcrumbs>
        <div class="section-ttl left">Партнеры</div>
        <div class="list-partners">
          <div class="item" v-for="partner of partners">
            <div class="item-img">
              <img :src="partner.logo" :alt="partner.name">
            </div>
            <div class="item-text">
              <h2>{{ partner.name }}</h2>
              <p>{{ partner.descr }}</p>
            </div>
          </div>
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
  import logo1 from '../assets/images/partners/partner-1.jpg'
  import logo2 from '../assets/images/partners/partner-2.jpg'
  import logo3 from '../assets/images/partners/partner-3.jpg'
  import logo4 from '../assets/images/partners/partner-4.jpg'
  import logo5 from '../assets/images/partners/partner-5.jpg'

  export default {
    data() {
      return {
        link: 'Партнеры',
        partners: [
          {logo: logo1, name: 'Allt.ru.com', descr: 'Основное направление это: форсирование моторов и и подготовка автомобилей для спортивных соревнований.'},
          {logo: logo2, name: 'Cartuning.ru', descr: 'Основное направление это: подборка, заказ, и доставка тюнинг комплектующих из Европы и США, чип-тюнинг и подготовка автомобилей для спортивных соревнований.'},
          {logo: logo3, name: 'iron-s.ru', descr: 'Основное направление это: установка проитвоугонных систем и систем слежения и мониторинга, установка более качественной мультимедии и шумоизоляция салона.'},
          {logo: logo4, name: 'vc-tuning.ru', descr: 'Основное направление тюнинг автомобилей бизнес и премиум сегмента. '},
          {logo: logo5, name: 'zrdesign.ru', descr: 'Основное направление это: подборка, заказ, и доставка тюнинг комплектующих из Европы и США.'}
        ]
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