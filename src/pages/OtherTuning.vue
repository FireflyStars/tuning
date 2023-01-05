<template>
  <div>
    <div class="content-app pt0">
      <div class="top-bg">
        <div class="container">
          <breadcrumbs :link="link"
                       :subLink="brandName"
                       :subLinkModel="modelName"
                       :subLinkYear="yearName"
                       :subLinkEngine="engineName"></breadcrumbs>
          <div class="section-ttl left">Чип Тюнинг</div>
          <div class="filter">
            <select class="select" v-model="searchBrand"  list="brands" @change="selectBrandByName(searchBrand)">
              <option selected disabled>Выбрать марку</option>
              <option>All</option>
              <option v-for="item in brand" :key="item.id">{{ item.title }}</option>
            </select>
            <select class="select" v-model="searchModel"  list="models" @change="selectModelByName(searchModel)">
              <option selected disabled>Модель</option>
              <option v-for="item in model" :key="item.id">{{ item.name }}</option>
            </select>
            <select class="select" v-model="searchYear"  list="years" @change="selectYearByName(searchYear)">
              <option selected disabled>Год</option>
              <option v-for="item in year" :key="item.id">{{ item.name }}</option>
            </select>
            <select class="select" v-model="searchEngine"  list="motors" @change="selectEngineByName(searchEngine)">
              <option selected disabled>Мотор</option>
              <option v-for="item in engine" :key="item.id">{{ item.name }}</option>
            </select>                                    
          </div>
        </div>
      </div>
      <div class="container">
        <div class="tuning-container">
          <div class="grid-tuning" v-if="!brandSelect">
            <div class="item"
                 v-for="item in brand"
                 :key="item.id"
                 @click="selectBrand(item.id)">
              <img :src="item.logo" :alt="item.title" style="cursor:pointer">
            </div>
          </div>
          <div class="grid-wrap" v-if="brandSelect && !modelSelect">
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
          <div class="grid-wrap" v-if="modelSelect && !yearSelect">
            <h2>Год</h2>
            <div class="grid-tuning model">
              <div class="item"
                   v-for="item in year"
                   :key="item.id" @click="selectYear(item.id)">
                   {{ item.name }}
              </div>
            </div>
          </div>
          <div class="grid-wrap" v-if="yearSelect && !engineSelect">
            <h2>Выберите тип двигателя</h2>
            <div class="grid-tuning model">
              <div class="item"
                   v-for="item in engine"
                   :key="item.id"
                   @click="selectEngine(item.id)">
                {{ item.name }}
              </div>
            </div>
          </div>
          <div class="tuning-wrapper" v-if="engineSelect && isExist">
            <div class="content">
              <div class="tuning-stage">
                <div class="ttl">Стадия тюнинга:</div>
                  <div class="btn" style="cursor:pointer" v-for="item in stage" :key="item.stage" :class="{active: (item.stage == selectedStage.stage)}"><span @click="selectStage(item.id)">Stage {{ item.stage }}</span></div>
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
                    <div class="item">
                      <div class="text">Оригинал</div>
                      {{ car.power }} лс
                    </div>
                    <div class="item">
                      <div class="text">Тюнинг</div>
                      {{ selectedStage.power }} лс
                    </div>
                    <div class="item active">
                      <div class="text">Разница</div>
                      {{(selectedStage.power - car.power) }} лс
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="ttl">Момент</div>
                  <div class="item-wrap">
                    <div class="item">
                      <div class="text">Оригинал</div>
                      {{ car.moment }} нм
                    </div>
                    <div class="item">
                      <div class="text">Тюнинг</div>
                      {{ selectedStage.moment }} нм
                    </div>
                    <div class="item active">
                      <div class="text">Разница</div>
                      {{ selectedStage.moment - car.moment }} нм
                    </div>
                  </div>
                </div>
              </div>

              <div class="tuning-options">
                <div class="tuning-options-btn"
                     @click="showOptions = !showOptions">Допорлнительные опции +
                </div>
              </div>

              <div class="total-wrap">
                <div class="tuning-total">
                  Стоимость: {{ totalPrice }} ₽
                </div>
                <div class="btn bigBtn">
                  <span @click="show" style="cursor:pointer">Заказать</span>
                </div>
                <nav class="mainMenu" v-if="isOrder">
                  <div class="order-modal" :class="isOrder ? 'show' : ''">
                    <span class="order-modal-close" @click="modalClose">&times;</span>
                    <div class="order-modal-content">
                      <div class="modal-item">
                        <label for="name">НАЗВАНИЕ:&nbsp;</label>
                        <input type="text" id="name" name="name" :class="isName ? 'invalid': ''" v-model="customerName" />
                      </div>
                      <div class="modal-item">
                        <label for="phone">ТЕЛЕФОН: </label>
                        <input type="text" id="phone" name="phone" :class="isPhone ? 'invalid': ''" v-model="customerPhone" />
                      </div>
                      <div class="modal-item">
                        <label for="name">ПОЧТА: </label>
                        <input type="email" id="email" name="email" :class="isEmail ? 'invalid': ''" v-model="customerEmail" />
                      </div>
                      <div class="modal-item">
                        <label for="name" class="message">СООБЩЕНИЕ: </label>
                        <textarea type="text" id="message" name="message" :class="isMessage ? 'invalid': ''" rows="8" v-model="customerMessage">
                        </textarea>
                      </div>  
                      <div class="modal-item">
                          <div class="btn text-center" @click="cancel">отменить</div>
                          <div class="btn text-center" @click="orderTo">Отправить</div>
                      </div>                                                                              
                    </div>
                  </div>             
                </nav>   
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
                    <div class="tr" v-for="(item, index) in extraService" :key="item.id">
                      <div class="td" v-html="item.name">Снятие ограничения скорости</div>
                      <div class="td" v-html="item.description">Снятие ограничения скорости</div>
                      <div class="td" v-html="item.price">Бесплатно</div>
                      <div class="td">
                        <div class="checkbox_wrap">
                          <label>
                            <input :value="item.price" :checked="item.checked" type="checkbox" @change="addPrice"
                                   :tabindex="index" :name="item.name">
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
                  <img :src="car.image" alt="" v-if="!car.type">
                  <video controls="controls" v-if="car.type">
                    <source :src="car.image" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
                  </video>
                </div>
                <div class="tuning-text">
                  <h4>Описание:</h4>
                  <p v-html="car.description">Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время
                    некий
                    безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для
                    распечатки образцов.</p>
                </div>
              </div>
            </div>
            <aside>
              <div class="tuning-logo">
                <img :src="logoSrc" alt="">
              </div>
              <div class="aside-text">
                <ul class="tuning-list">
                  <li>Спецификация мотора:</li>
                  <li v-for="(item, index) in engineSpec" :key="index">{{item.name}} : {{ item.value }}</li>
                </ul>
              </div>
            </aside>
          </div>
          <div class="tuning-wrapper" v-if="engineSelect && !isExist">
              <div class="content">
                  Nothing to display for your tuning
              </div>
          </div>
        </div>
      </div>
    </div>
    <ask-tuning></ask-tuning>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Breadcrumbs from '@/components/Breadcrumbs1'
  import AskTuning from '@/components/Ask-tuning'
  import axios from 'axios'

  export default {
    data() {
      return {
        link: 'Чип Тюнинг',
        brandSelect: false,
        modelSelect: false,
        yearSelect: false,
        engineSelect: false,
        carDetails: false,
        showOptions: false,
        brandId: 0,
        modelId: 0,
        yearId: 0,
        engineId: 0,
        brandName: '',
        modelName: '',
        yearName: '',
        engineName: '',
        model: [],
        year: [],
        engine: [],
        car: null,
        engineSpec: null,
        extraService: [],
        stage: null,
        isExist: false,
        totalPrice: null,
        totalExtraPrice: 0,
        selectedStage: null,
        logoSrc: '',
        searchBrand: 'Выбрать марку',
        searchModel: 'Модель',
        searchYear: 'Год',
        searchEngine: 'Мотор',
        isOrder: false,
        customerName: '',
        customerPhone: '',
        customerEmail: '',
        customerMessage: '',
        isName: false,
        isPhone: false,
        isEmail: false,
        isMessage: false,        
      }
    },
    methods: {
      show(){
        this.isOrder = true;
        let body = document.querySelector('body');
        body.classList.add('overflow')
      },
      modalClose(){
        let body = document.querySelector('body');
        body.classList.remove('overflow');
        this.isName = false;
        this.isPhone = false;
        this.isEmail = false;
        this.isMessage = false;
        this.customerName = '';
        this.customerPhone = '';
        this.customerEmail = '';
        this.customerMessage = '';
        this.isOrder = false;
      },      
      cancel(){
        let body = document.querySelector('body');
        body.classList.remove('overflow');
        this.isName = false;
        this.isPhone = false;
        this.isEmail = false;
        this.isMessage = false;
        this.customerName = '';
        this.customerPhone = '';
        this.customerEmail = '';
        this.customerMessage = '';        
        this.isOrder = false;
      },
      orderTo(){
        this.isName = false;
        this.isPhone = false;
        this.isEmail = false;
        this.isMessage = false;        
        if(this.customerName == '' || /\d/g.test(this.customerName) || /[~!@\#$%<>^&*\()\-=+_\’]/g.test(this.customerName)){
          this.isName = true;
          return;
        }
        if(this.customerPhone == '' || /\D/g.test(this.customerPhone) || /[~!@\#$%<>^&*\()\-=+_\’]/g.test(this.customerPhone)){
          this.isPhone = true;
          return;
        }
        if(!/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(this.customerEmail)){
          this.isEmail = true;
          return;
        }
        if(this.customerMessage == ''){
          this.isMessage = true;
          return;
        }          
        // const app = this;              
        axios.post('api/create/order', {
          name: this.customerName,
          phone: this.customerPhone,
          email: this.customerEmail,
          message: this.customerMessage
        }).then(function(response){
        });
          this.isName = false;
          this.isPhone = false;
          this.isEmail = false;
          this.isMessage = false;       
          this.customerName = '';
          this.customerPhone = '';
          this.customerEmail = '';
          this.customerMessage = '';                    
          this.isOrder = false;       
          let body = document.querySelector('body');
          body.classList.remove('overflow');           
      },      
      addPrice(event){
        if(event.target.checked){
          const extraServiceId = event.target.name;
          this.extraService.forEach(function(item){
            if(item.name == extraServiceId){
              item.checked = true;
            }
          });
          this.totalPrice = this.totalPrice - this.totalExtraPrice;
          this.totalExtraPrice  =  this.totalExtraPrice + parseInt(event.target.value);
          this.totalPrice = this.totalPrice + this.totalExtraPrice;
        }else{
          const extraServiceId = event.target.name;
          this.extraService.forEach(function(item){
            if(item.name == extraServiceId){
              item.checked = false;
            }
          });          
          this.totalPrice = this.totalPrice - this.totalExtraPrice;
          this.totalExtraPrice  =  this.totalExtraPrice - parseInt(event.target.value);
          this.totalPrice = this.totalPrice + this.totalExtraPrice;
        }
      },
      selectBrand(id) {
        if (id) {
          this.brandSelect = true;
          this.brandId = id;
          this.brandName = this.$store.getters.brandById(id).title;
          this.logoSrc = this.$store.getters.brandById(id).logo;
          this.model = this.$store.getters.model;
          this.model = this.model.filter(function(item){
            return item.brand_id == id;
          })
        }
      },
      selectModel(id) {
        if (id) {
          this.modelSelect = true;
          this.modelId = id;
          this.modelName = this.$store.getters.modelById(id).name;
          // this.brandSelect = false;
          this.year = this.$store.getters.year;
          this.year = this.year.filter(function(item){
            return item.model_id == id;
          })          

        }
      },
      selectYear(id) {
        if (id) {
          this.yearId = id;
          this.yearSelect = true;
          this.yearName = this.$store.getters.yearById(id).name;
          const app = this;
          this.engine = this.$store.getters.engine;
          this.engine = this.engine.filter(function(item){
            return item.year_id == id;
          })                    
        }
      },
      selectEngine(id) {
        if (id) {
          this.engineId = id;
          this.engineSelect = true;
          this.engineName = this.$store.getters.engineById(id).name;
          const app = this;
          axios.get('api/carinfo/'+ this.engineId).then(function(response){
              if(response.data == "empty"){
                  app.isExist = false;
              }else{
                app.car = response.data.car;
                app.engineSpec = response.data.engineSpec;
                response.data.extraService.forEach(function(item){
                  app.extraService.push({'id': item.id, 'name':item.name, 'description':item.description, 'price':item.price, 'checked': false})
                });
                // app.extraService = response.data.extraService;
                app.stage = response.data.stage;
                app.selectedStage = app.stage[0];
                app.totalPrice = app.selectedStage.price;
                app.isExist = true;
              }
          })
        }
      },
      selectBrandByName(name) {
          this.model = [];
          this.year = [];
          this.motor = [];
          this.modelSelect = false;
          this.yearSelect = false;
          this.engineSelect = false;
          this.searchModel = 'Модель',
          this.searchYear = 'Год',
          this.searchEngine = 'Мотор',
          this.isExist = false;        
          this.isOrder = false;
          this.modelName = '';  
          this.yearName = '';  
          this.engineName = '';  
          if(name == 'All'){
            this.searchBrand = 'Выбрать марку'
            this.brandSelect = false;
            return false;
          }else{              
          this.brandSelect = true;
          this.brandName = name;
          const branditem =  this.$store.getters.brandByName(name);
          if(branditem){
            this.brandId=  branditem.id;
            this.logoSrc = branditem.logo;
            this.model = this.$store.getters.model;
            this.model = this.model.filter(item=>item.brand_id == branditem.id);
          }
        }
      },
      selectModelByName(name) {
        if (name) {
          this.modelSelect = true;
          this.modelName = name;
          this.modelId = this.model.find(model=>model.name == name).id;
          this.year = this.$store.getters.yearByModelId(this.modelId);
        }
      },
      selectYearByName(name) {
        if (name) {
          this.yearSelect = true;
          this.yearName = name;
          this.yearId = this.year.find(year=>year.name == name).id;
          this.engine = this.$store.getters.engineByYearId(this.yearId);
        }
      },
      selectEngineByName(name) {
        if (name) {
          this.engineSelect = true;
          this.engineName = name;
          this.engineId = this.engine.find(engine=>engine.name == name).id;
          const app = this;
          axios.get('api/carinfo/'+ this.engineId).then(function(response){
              if(response.data == "empty"){
                  app.isExist = false;
              }else{
                app.car = response.data.car;
                app.engineSpec = response.data.engineSpec;
                response.data.extraService.forEach(function(item){
                  app.extraService.push({'id': item.id, 'name':item.name, 'description':item.description, 'price':item.price, 'checked': false})
                });
                app.stage = response.data.stage;
                app.selectedStage = app.stage[0];
                app.totalPrice = app.selectedStage.price;
                app.isExist = true;
              }
          })
        }
      },  
      setDefaultBrand(){
        if(this.searchBrand == ''){
          this.searchBrand = 'Выбрать марку';
        }
      },
      setDefaultBrand(){
        if(this.searchModel == ''){
          this.searchModel = 'Модель';
        }
      },
      setDefaultBrand(){
        if(this.searchYear == ''){
          this.searchYear = 'Год';
        }
      },
      setDefaultEngine(){
        if(this.searchEngine == ''){
          this.searchEngine = 'Мотор';
        }
      },                         
      selectStage( stageId ){
          this.selectedStage = this.stage.find(stage=>stage.id == stageId);
          this.totalPrice = 0;
          this.totalPrice = this.selectedStage.price + this.totalExtraPrice;
      }
    },
    components: {
      Breadcrumbs,
      AskTuning
    },
    computed: {
      brand() {
        return this.$store.getters.brand;
      }
    },
    beforeCreate(){
      const app = this;
      axios.get('api/chip').then(function(response){
        app.$store.commit('formatBrand');
        app.$store.commit('createBrand', response.data.brand);
        app.$store.commit('formatModel');
        app.$store.commit('createModel', response.data.model);        
        app.$store.commit('formatYear');
        app.$store.commit('createYear', response.data.year);
        app.$store.commit('formatEngine');
        app.$store.commit('createEngine', response.data.motor);                
        app.$store.commit('createCar', response.data.car);                
        app.$store.commit('createEngineSpec', response.data.motorSpec);                
        app.$store.commit('createExtraService', response.data.extraService);                
    })
    },
    created(){
        let body = document.querySelector('body');
        body.classList.remove('overflow');      
    }    
  }
</script>

<style scoped>

</style>