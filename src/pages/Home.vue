<template>
  <div>
    <app-header></app-header>
    <top-slider></top-slider>
    <section class="section-default">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="text-wrap">
              <h2>Чип-тюнинг</h2>
              <p>
                Воспользуйтесь нашей формой подбора
                для получения информации по увеличению
                мощности на вашем транспортном средстве.</p>
              <div class="btn"><span>Подробнее</span></div>
            </div>
          </div>
          <div class="col">
            <img src="../assets/images/section-one-img.jpg" alt="">
          </div>
        </div>
      </div>
    </section>
    <section class="section-default section-two white">
      <div class="container">
        <div class="row reverse">
          <div class="col">
            <img src="../assets/images/section-two-img.png" alt="">
          </div>
          <div class="col">
            <div class="text-wrap">
              <h2>Выхлопные системы</h2>
              <p>
                Мы предлагаем широкий выбор различных
                выхлопных систем.</p>
              <div class="btn"><span>Подробнее</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-default">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="text-wrap">
              <h2>Кованные диски</h2>
              <p>
                Мы предлагаем широкий выбор качественных
                колесных дисков.</p>
              <div class="btn"><span>Подробнее</span></div>
            </div>
          </div>
          <div class="col">
            <img src="../assets/images/section-three-img.jpg" alt="">
          </div>
        </div>
      </div>
    </section>
    <section class="section section-four white">
      <div class="container">
        <div class="section-ttl">
          Последние посты из instagram
          <span>подписывайтесь на нас</span>
        </div>
        <div class="grid">
          <div class="item">
            <img src="../assets/images/demo/img-1.jpg" alt="">
          </div>
          <div class="item">
            <img src="../assets/images/demo/img-2.jpg" alt="">
          </div>
          <div class="item">
            <img src="../assets/images/demo/img-1.jpg" alt="">
          </div>
          <div class="item">
            <img src="../assets/images/demo/img-2.jpg" alt="">
          </div>
          <div class="item">
            <img src="../assets/images/demo/img-1.jpg" alt="">
          </div>
          <div class="item">
            <img src="../assets/images/demo/img-2.jpg" alt="">
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="section-ttl">Новости</div>
        <news></news>
      </div>
    </section>
    <section class="section section-six white">
      <div class="container">
        <div class="section-ttl">Проекты</div>
        <project></project>
      </div>
    </section>
    <ask></ask>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import TopSlider from '@/components/Home/TopSlider'
  import Ask from '@/components/Ask'
  import News from '@/components/News'
  import Project from '@/components/Project'

  export default {
    data() {
      return {}
    },
    components: {
      TopSlider,
      Ask,
      News,
      Project
    }
  }
</script>

<style scoped>

</style>
