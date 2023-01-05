<template>
    <div class="content-app pt0" style="padding-bottom:0">        
        <div class="container" v-if="!engineSelect">         
          <div class="filter">
            <select class="select" v-model="searchBrand"  list="brands" @change="selectBrandByName(searchBrand)">
              <option selected disabled>Выбрать марку</option>
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
              <option v-for="item in engineGas" :key="item.id">{{ item.name }}</option>
              <option v-for="item in engineDisel" :key="item.id">{{ item.name }}</option>
            </select>                                    
          </div>
      </div>
      <div class="container"  v-if="brandSelect">
        <div class="tuning-container">
          <ul class="breadcrumbs">
            <li><a href="/">Главная</a></li>
            <li v-if="brandName"
                @click="modelDestroy">
              <a>{{ brandName }}</a>
            </li>
            <li v-if="modelName"
                @click="yearDestroy">
              <a>{{ modelName }}</a>
            </li>
            <li v-if="yearName"
                @click="engineDestroy">
              <a>{{ yearName }}</a>
            </li>
            <li v-if="engineName">
              <span>{{ engineName }}</span>
            </li>
          </ul>
          <div class="title">
            <h2 v-if="brandSelect && !modelSelect">Выберите свою модель</h2>
            <h2 v-if="modelSelect && !yearSelect">Год</h2>
            <h2 v-if="yearSelect && !engineSelect">Выберите тип двигателя</h2>
          </div>
          <div class="tuning-grid-wrapper">
            <div class="col-select-box" v-if="brandSelect && !engineSelect">
              <div class="col-select-box-header">
                <h3>{{ brandName }}</h3>
                <img :src="logoSrc" :alt="brandName">
              </div>
              <ul class="items">
                <li v-for="item in model"
                    :key="item.id"
                    @click="selectModel(item.id)">
                  {{ item.name }}
                </li>
              </ul>
            </div>

            <div class="col-select-box" v-if="modelSelect && brandSelect && !engineSelect">
              <div class="col-select-box-header">
                <h3>{{ modelName }}</h3>
                <img :src="logoSrc" :alt="brandName">
              </div>
              <ul class="items">
                <li v-for="item in year"
                    :key="item.id" @click="selectYear(item.id)">
                  {{ item.name }}
                </li>
              </ul>
            </div>
            <div class="col-select-box" v-if="yearSelect && !engineSelect">
              <div class="col-select-box-header">
                <div>
                  <h3>{{ yearName }}</h3>
                  <span>Бензин</span>
                </div>
                <img :src="logoSrc" :alt="brandName">
              </div>
              <ul class="items">
                <li v-for="item in engineGas" 
                    :key="item.id"
                    @click="selectEngine(item.id)">
                  {{ item.name }}
                </li>
              </ul>
              <div class="col-select-box-header">
                <div>
                  <h3>{{ yearName }}</h3>
                  <span>Дизель</span>
                </div>

                <img :src="logoSrc" :alt="brandName">
              </div>
              <ul class="items">
                <li v-for="item in engineDisel"
                    :key="item.id"
                    @click="selectEngine(item.id)">
                  {{ item.name }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        type: 1,
        isCar: true,
        isBike: false,
        isShip: false,
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
        engineGas: [],
        engineDisel: [],
        // car: null,
        // engineSpec: null,
        // extraService: [],
        // stage: null,
        // isExist: false,
        // totalPrice: null,
        // totalExtraPrice: 0,
        // selectedStage: null,
        logoSrc: '',
        searchBrand: 'Выбрать марку',
        searchModel: 'Модель',
        searchYear: 'Год',
        searchEngine: 'Мотор',      
      }
    },
    methods: {
      selectCar(){
          this.formatVariable();
          this.isCar = true;
          this.isBike = false;
          this.isShip = false;
          this.brandDestroy();
          const app = this;
          axios.get('api/chip/1').then(function(response){
            app.$store.commit('formatBrand');
            app.$store.commit('createBrand', response.data.brand);
            app.$store.commit('formatModel');
            app.$store.commit('createModel', response.data.model);        
            app.$store.commit('formatYear');
            app.$store.commit('createYear', response.data.year);
            app.$store.commit('formatEngine');
            app.$store.commit('createEngine', response.data.motor);                            
        })
      },
      selectBike(){
          this.formatVariable();
          this.isBike = true;
          this.isCar = false;
          this.isShip = false;
          this.brandDestroy();
          const app = this;
          axios.get('api/chip/2').then(function(response){
            app.$store.commit('formatBrand');
            app.$store.commit('createBrand', response.data.brand);
            app.$store.commit('formatModel');
            app.$store.commit('createModel', response.data.model);        
            app.$store.commit('formatYear');
            app.$store.commit('createYear', response.data.year);
            app.$store.commit('formatEngine');
            app.$store.commit('createEngine', response.data.motor);                              
        })
      },
      selectShip(){
          this.formatVariable();
          this.isBike = false;
          this.brandDestroy();
          this.isCar = false;
          this.isShip = true;
          const app = this;
          axios.get('api/chip/3').then(function(response){
            app.$store.commit('formatBrand');
            app.$store.commit('createBrand', response.data.brand);
            app.$store.commit('formatModel');
            app.$store.commit('createModel', response.data.model);        
            app.$store.commit('formatYear');
            app.$store.commit('createYear', response.data.year);
            app.$store.commit('formatEngine');
            app.$store.commit('createEngine', response.data.motor);                             
        })
      },  
      formatVariable(){
          this.searchBrand= 'Выбрать марку';
          this.searchModel= 'Модель';
          this.searchYear= 'Год';
          this.searchEngine= 'Мотор';   
          this.model = [];
          this.year = [];
          this.engineGas = [];
          this.engineDisel = [];   
      },                
      selectBrand(id) {
        if (id) {
          this.brandSelect = true;
          this.modelDestroy();        
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
          this.yearDestroy();          
          this.modelId = id;
          this.modelName = this.$store.getters.modelById(id).name;
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
          this.engineDestroy();
          this.yearName = this.$store.getters.yearById(id).name;
          const app = this;
          let engine = this.$store.getters.engine;
          engine = engine.filter(function(item){
            return item.year_id == id;
          });
          this.engineGas = engine.filter(function(item){
            return item.type == 1;
          });        
          this.engineDisel = engine.filter(function(item){
            return item.type != 1;
          });                         
        }
      },
      selectEngine(id) {
        if (id) {
          this.engineId = id;
          this.$router.push({ name: 'Tuning', params: {engineid: id}, });
        }
      },
      selectBrandByName(name) {
          this.model = [];
          this.year = [];
          this.engineGas = [];
          this.engineDisel = [];
          this.modelDestroy();
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
          this.year = [];
          this.engineGas = [];
          this.engineDisel = [];          
          this.modelSelect = true;
          this.yearDestroy();     
          this.searchModel =name;
          this.modelName = name;
          this.modelId = this.model.find(model=>model.name == name).id;
          this.year = this.$store.getters.yearByModelId(this.modelId);
        }
      },
      selectYearByName(name) {
        if (name) {
          this.yearSelect = true;
          this.engineDestroy();
          this.yearName = name;
          this.searchYear = name;
          this.yearId = this.year.find(year=>year.name == name).id;
          let engine = this.$store.getters.engineByYearId(this.yearId);
          this.engineGas = engine.filter(function(item){
            return item.type == 1;
          });        
          this.engineDisel = engine.filter(function(item){
            return item.type != 1;
          });    
        }
      },
      selectEngineByName(name) {
        if (name) {
          let engine = this.engineGas.find(engine=>engine.name == name);
          if(engine){
              this.engineId = engine.id;
          }else{
            engine = this.engineDisel.find(engine=>engine.name == name);
            this.engineId = engine.id;
          }
          this.$router.push({ name: 'Tuning', params: {engineid: engine.id}});
        }
      },                      
      selectStage( stageId ){
          this.selectedStage = this.stage.find(stage=>stage.id == stageId);
          this.totalPrice = 0;
          this.totalPrice = this.selectedStage.price + this.totalExtraPrice;
      },
      engineDestroy() {
        this.engineSelect = false;
        this.engineName = '';
      },
      yearDestroy() {
        this.engineSelect = false;
        this.yearSelect = false;
        this.engineName = '';
        this.yearName = '';
      },
      modelDestroy() {
        this.engineSelect = false;
        this.yearSelect = false;
        this.modelSelect = false;
        this.yearName = '';
        this.modelName = '';
        this.engineName = '';
      },
      brandDestroy() {
        this.engineSelect = false;
        this.yearSelect = false;
        this.modelSelect = false;
        this.brandSelect = false;
        this.modelName = '';
        this.yearName = '';
        this.engineName = '';
        this.brandName = '';

      }
    },
    computed: {
      brand() {
        return this.$store.getters.brand;
        // return this.$store.getters.brand.filter(item => item.type == 1);
      }
    },
    beforeCreate(){
      const app = this;
      axios.get('api/chip/1').then(function(response){
        app.$store.commit('formatBrand');
        app.$store.commit('createBrand', response.data.brand);
        app.$store.commit('formatModel');
        app.$store.commit('createModel', response.data.model);        
        app.$store.commit('formatYear');
        app.$store.commit('createYear', response.data.year);
        app.$store.commit('formatEngine');
        app.$store.commit('createEngine', response.data.motor);                
    })
    }
  }
</script>

<style scoped>
  .title {
    text-align: center;
    margin-bottom: 20px;
  }
  .breadcrumbs {
    margin-bottom: 30px;
    flex-wrap: wrap;
  }
  .tuning-grid-wrapper {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 767px) {
    .tuning-grid-wrapper {
      display: flex;
      flex-wrap: wrap;
    }
  }
  .tuning-grid-wrapper .col-select-box {
    border: 1px solid #c3c3c3;
    border-radius: 3px;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.4);
  }
  @media only screen and (max-width: 767px) {
    .tuning-grid-wrapper .col-select-box {
      width: 100%;
      margin-bottom: 15px;
    }
  }
  .tuning-grid-wrapper .col-select-box-header {
    padding: 0 10px 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #c3c3c3;
  }
  @media only screen and (max-width: 767px) {
    .tuning-grid-wrapper .col-select-box-header {
      padding: 0 15px;
    }
  }
  .tuning-grid-wrapper .col-select-box-header img {
    max-width: 80px;
  }
  @media only screen and (max-width: 767px) {
    .tuning-grid-wrapper .col-select-box-header h3 {
      font-size: 14px;
    }
  }
  .tuning-grid-wrapper .col-select-box-header span {
    color: #69696a;
  }
  .tuning-grid-wrapper .col-select-box .items {
    padding: 10px;
    background: #d7d7d7;
  }
  .tuning-grid-wrapper .col-select-box .items li {
    padding: 10px;
    font-size: 14px;
    cursor: pointer;
    border-bottom: 1px solid #fff;
    color: #000;
  }
  @media only screen and (max-width: 767px) {
    .tuning-grid-wrapper .col-select-box .items li {
      font-size: 14px;
    }
  }
  .tuning-grid-wrapper .col-select-box .items li:last-child {
    border: none;
  }
</style>