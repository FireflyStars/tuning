<template>
  <div>
    <app-header></app-header>
    <div class="content-app pt0">
      <div class="top-bg">
        <div class="container">
          <breadcrumbs :link="link"></breadcrumbs>
          <div class="section-ttl left">Чип Тюнинг</div>
          <div class="filter">
            <div class="select">Выбрать марку</div>
            <div class="select">Модель</div>
            <div class="select">Год</div>
            <div class="select">Мотор</div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="tuning-container">
          <div class="grid-tuning" v-if="brandSelect">
            <div class="item"
                 v-for="item in brand"
                 :key="item.id"
                 @click="selectBrand(item.id)">
              <img :src="item.logo" :alt="item.title">
            </div>
          </div>
          <div class="grid-wrap" v-if="brandSelect">
            <h2>Выберите свою модель</h2>
            <div class="grid-tuning model">
              <div class="item"
                   v-for="item in model"
                   :key="item.id"
                   @click="selectModel(item.id)">
                {{ item.name }}
              </div>
            </div>
          </div>
          <div class="grid-wrap" v-if="brandSelect">
            <h2>Год</h2>
            <div class="grid-tuning model">
              <div class="item">
                Все
              </div>
            </div>
          </div>
          <div class="grid-wrap" v-if="brandSelect">
            <h2>Выберите тип двигателя</h2>
            <div class="grid-tuning model">
              <div class="item"
                   v-for="item in engine"
                   :key="item.id"
                   @click="selectModel(item.id)">
                {{ item.name }}
              </div>
            </div>
          </div>
          <div class="tuning-wrapper" v-if="!brandSelect">
            <div class="content">
              <div class="tuning-stage">
                <div class="ttl">Стадия тюнинга:</div>
                <div class="">
                  <div class="btn active"><span>Stage 1</span></div>
                  <div class="btn"><span>Stage 2</span></div>
                  <div class="btn"><span>Stage 3</span></div>
                </div>
              </div>
              <div class="tuning-table">
                <div class="row row-first">
                  <div class="ttl"></div>
                  <div class="item-wrap">
                    <div class="item-ttl">Оригинал</div>
                    <div class="item-ttl">Тюнинг</div>
                    <div class="item-ttl">Разница</div>
                  </div>
                </div>
                <div class="row">
                  <div class="ttl">Мощность</div>
                  <div class="item-wrap">
                    <div class="item"><div class="text">Оригинал</div>555 лс</div>
                    <div class="item"><div class="text">Тюнинг</div>333 лс</div>
                    <div class="item active"><div class="text">Разница</div>222 лс</div>
                  </div>
                </div>
                <div class="row">
                  <div class="ttl">Момент</div>
                  <div class="item-wrap">
                    <div class="item"><div class="text">Оригинал</div>555 нм</div>
                    <div class="item"><div class="text">Тюнинг</div>333 нм</div>
                    <div class="item active"><div class="text">Разница</div>222 нм</div>
                  </div>
                </div>
              </div>

              <div class="tuning-options">
                <div class="tuning-options-btn"
                    @click="showOptions = !showOptions">Допорлнительные опции +</div>
              </div>

              <div class="total-wrap">
                <div class="tuning-total">
                  Стоимость: 48 000 ₽
                </div>
                <div class="btn bigBtn">
                  <span>Заказать</span>
                </div>
              </div>
              <div class="table-wrap" v-if="showOptions">
                <div class="table">
                  <div class="thead">
                    <div class="tr">
                      <div class="td">Название опции</div>
                      <div class="td">Описание опции</div>
                      <div class="td">Цена</div>
                      <div class="td"></div>
                    </div>
                  </div>
                  <div class="tbody">
                    <div class="tr">
                      <div class="td">Снятие ограничения скорости</div>
                      <div class="td">Снятие ограничения скорости</div>
                      <div class="td">Бесплатно</div>
                      <div class="td">
                        <div class="checkbox_wrap">
                          <label>
                            <input value="1" required name="check" type="checkbox"
                                   tabindex="0">
                            <span></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tuning-info">
                <div class="tuning-video">
                  <video controls="controls">
                    <source src="../assets/video/video.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
                  </video>
                </div>
                <div class="tuning-text">
                  <h4>Описание:</h4>
                  <p>Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий
                    безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для
                    распечатки образцов.</p>
                </div>
              </div>

            </div>
            <aside>
              <div class="tuning-logo">
                <img src="../assets/images/logo/bmw.jpg" alt="">
              </div>
              <div class="aside-text">
                <ul class="tuning-list">
                  <li>Спецификация мотора:</li>
                  <li>Тип мотора:</li>
                  <li>Объем мотора:</li>
                  <li>Номер мотора:</li>
                </ul>
                <div class="note">
                  7-10 параметров,
                  которые можно будет
                  добавить и
                  отредактировать в
                  админке
                </div>
              </div>

            </aside>
          </div>
        </div>
      </div>
    </div>
    <ask-tuning></ask-tuning>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Breadcrumbs from '@/components/Breadcrumbs'
  import AskTuning from '@/components/Ask-tuning'

  export default {
    data() {
      return {
        link: 'Чип Тюнинг',
        brandSelect: false,
        showOptions: false
      }
    },
    methods: {
      selectBrand(id) {
        console.log(id);
        if (id) {
          this.brandSelect = true;
        }
      }
    },
    components: {
      Breadcrumbs,
      AskTuning
    },
    computed: {
      brand() {
        return this.$store.getters.brand;
      },
      model() {
        return this.$store.getters.model;
      },
      engine() {
        return this.$store.getters.engine;
      }
    }
  }
</script>

<style scoped>

</style>