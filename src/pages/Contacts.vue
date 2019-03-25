<template>
  <div>
    <app-header></app-header>
    <div class="content-app">
      <div class="container">
        <breadcrumbs :link="link"></breadcrumbs>
        <div class="section-ttl left">Контакты</div>
        <div class="text-wrap">
          <h3> Основной филиал:</h3>
          <ul>
            <li>г. Москва</li>
            <li>ул. Молодогвардейская 57 строение 9</li>
            <li>Телефон: +7 985 638-07-37</li>
            <li>
              Телефон: +7 911 208 30 51
              <div class="soc">
                <div class="item w">
                  <i class="fab fa-whatsapp"></i>
                </div>
                <div class="item v">
                  <i class="fab fa-viber"></i>
                </div>
                <div class="item t">
                  <i class="fab fa-telegram-plane"></i>
                </div>
              </div>
            </li>
          </ul>
          <ul>
            <li><strong>График работы:</strong> Понедельник - пятница, с 11:00 до 21:00, в субботу и воскресенье по
              договоренности.
            </li>
          </ul>
          <h3>Наши дилеры в России:</h3>
          <ul>
            <li> г.Астрахань</li>
            <li> ул. Украинская 3 литер 7</li>
            <li> Телефон: +7 917 181-88-41</li>
          </ul>
          <h3>Для первичной консультации рекомендуется звонить/писать в основной Московский филиал.</h3>
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

  export default {
    data() {
      return {
        link: 'Контакты'
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