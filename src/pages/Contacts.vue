<template>
  <div>
    <app-header></app-header>
    <div class="content-app">
      <div class="container">
            <breadcrumbs :link="link"></breadcrumbs>
            <div class="section-ttl left">Контакты</div>
            <div class="row">
              <div class="col">            
                <div class="text-wrap">
                  <h3> Основной филиал:</h3>
                  <ul>
                    <li>г. Москва</li>
                    <li>ул. Молодогвардейская 57 строение 9</li>
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
                </div>
                <div class="text-wrap">
                  <ul>
                    <li><strong>График работы:</strong> Понедельник - пятница, с 11:00 до 21:00, в субботу и воскресенье по
                      договоренности.
                    </li>
                  </ul>
                  <h3>Наши дилеры в России:</h3>
                  <ul class="custom-contact">
                    <li> г.Астрахань</li>
                    <li> ул. Украинская 3 литер 7</li>
                    <li class="mb-2"> Телефон: +7 917 181-88-41</li>
                    <li> г. Казань</li>
                    <li> ул. Украинская 3 литер 6</li>
                    <li class="mb-2"> Телефон: +7 987 296-85-79</li>       
                    <li> г. Санкт-Петербург</li>
                    <li class="mb-2"> Телефон: +7 (921) 918-82-48</li>      
                    <li> г. Красноярск</li>
                    <li> Телефон: +7 (967) 608-53-33</li>                                               
                  </ul>
                  <h3 class="dynamic-width">Для первичной консультации рекомендуется звонить/писать в основной Московский филиал.</h3>
                </div>          
              </div>
              <div class="col">
                <div class="row mb-3">
                  <h3>Мы в социальных сетях:</h3>
                  <ul class="soc-link">
                    <li>
                      <a href="https://vk.com/k8_strasse" class="move">
                        <!-- <i class="fab fa-vk"></i> -->
                        <img src="https://img.icons8.com/color/48/000000/vk-com.png" style="max-width:50px; max-height:50px">
                        <!-- <img src="https://img.icons8.com/color/48/000000/vkontakte.png"> -->
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/K8STRASSEDE" class="move">
                        <img src="https://img.icons8.com/color/48/000000/facebook.png" style="max-width:50px; max-height:50px">
                        <!-- <i class="fab fa-facebook-f"></i> -->
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/K8Strasse" class="blue move">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/k8_strasse_official/" class="move">
                         <img :src="instagram" style="max-width:50px; max-height:50px">
                      </a>
                    </li>
                  </ul>
                </div>
                <google-map/>
                <div class="row mt-4">
                  <input type="text" placeholder="ИМЯ *" style="margin-right:0" id="name" name="name" :class="isName ? 'invalid': ''" v-model="customerName" />
                </div>
                <div class="row">
                  <div class="col col-custom">
                    <input type="email" class="small-input" placeholder="E-Mail *" id="email"  name="email" :class="isEmail ? 'invalid': ''" v-model="customerEmail" />
                  </div>
                  <div class="col">
                    <input type="text" id="phone" placeholder="ТЕЛЕФОН *" name="phone" :class="isPhone ? 'invalid': ''" v-model="customerPhone" />
                  </div>
                </div>
                <div class="row">
                  <textarea type="text" id="message" name="message" :class="isMessage ? 'invalid': ''" rows="8" v-model="customerMessage">
                  </textarea>
                </div>  
                <div class="row">
                    <div class="btn text-center" @click="orderTo"><span class="black">Отправить</span></div>
                </div>                                                                              
              </div>
            </div>         
      </div>
    </div>
    <app-footer></app-footer>
  </div>

</template>

<script>
  import Breadcrumbs from '@/components/Breadcrumbs'
  import Ask from '@/components/Ask'
  import GoogleMap from "@/components/GoogleMap";
  import instagram from '../assets/images/social/instagram.png'

  export default {
    data() {
      return {
        link: 'Контакты',
        customerName: '',
        customerPhone: '',
        customerEmail: '',
        customerMessage: '',      
        isName: false,
        isPhone: false,
        isEmail: false,
        isMessage: false,   
        instagram: instagram           
      }
    },
    components: {
      Breadcrumbs,
      Ask,         
      GoogleMap
    },
    methods: {
      orderTo(){
        this.isName = false;
        this.isPhone = false;
        this.isEmail = false;
        this.isMessage = false;        
        if(this.customerName == '' || /\d/g.test(this.customerName) || /[~!@\#$%<>^&*\()\-=+_\’]/g.test(this.customerName)){
          this.isName = true;
          return;
        }
          if(!/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(this.customerEmail)){
            this.isEmail = true;
            return;
          }
        if(this.customerPhone == '' || /\D/g.test(this.customerPhone) || /[~!@\#$%<>^&*\()\-=+_\’]/g.test(this.customerPhone)){
          this.isPhone = true;
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
      },
      created(){
        let body = document.querySelector('body');
        body.classList.remove('overflow');        
      }    
    }   
  }
</script>

<style>
 input{
   width: 100%;
   height: 40px;
   margin:0 10px 10px 0;
   padding-left: 10px;
 }
 .small-input{
   width: 90%;
 }
  .dynamic-width{
   width: 1080px;
 }
  .custom-row{
   margin-left: 30px;
 }
 @media only screen and (max-width: 767px) {
 .small-input{
   width: 100%;
 }
 .dynamic-width{
   width: 100%;
 }
 .col-custom{
   margin-bottom: 0 !important;
 }
 .custom-row{
   margin-left: 0;
 }
}
 textarea{
   width: 100%;
   margin-bottom: 20px;
   padding-left: 10px;
 }
 .blue{
   background: rgb(81, 129, 184) ! important;
   border-radius: 12px;
 }
 .invalid{
  border-color: red;
 }
 .move:hover{
   position: relative;
   top: -5px;
 }
</style>