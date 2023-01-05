<template>
  <div>
    <app-header></app-header>
    <div class="content-app">
      <div class="container">
        <breadcrumbs :link="link"></breadcrumbs>
        <div class="section-ttl left">О компании</div>
        <div class="text-wrap">
          <p>С момента основания мы зарекомендовали себя одним из лидеров в области повышения мощности автомобилей, наша
            компания имеет собственный отдел исследований и разработок для непрерывного развития продукта, все решения
            тестируются и проверяются на диностенде для достижения наилучших результатов.
          </p>
          <p>Программное увеличение мощности является основным направлением нашей компании. Мы можем предложить вам как
            готовое, протестированное решения, так и специально для вас подготовить индивидуальное программное
            обеспечение, исходя из ваших желаний, и изменений в конфигурации автомобиля.</p>
          <p>Постоянное развитие, инвестиция в новейшее оборудование, и высокая квалификация наших сотрудников, дает
            нашим клиентам гарантию качества нашего продукта. </p>
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
        link: 'О компании'
      }
    },
    components: {
      Breadcrumbs,
      Ask
    },
    created(){
        let body = document.querySelector('body');
        body.classList.remove('overflow');      
    }
  }
</script>

<style scoped>

</style>