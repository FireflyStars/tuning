<template>
  <div>
  <section class="section text-center">
    <div class="container">
      <h3>У вас есть вопрос? <br/>
      Напишите нам и наши специалисты ответят вам в ближайшее время.</h3>
      <div class="btn" @click="show"><span class="black">Написать</span></div>
    </div>
  </section>
  <section class="section text-center" style="padding-top:0" v-if="isShow">
    <div class="container custom-container">
        <div class="row">
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
  </section>
  </div>
</template>

<script>
import axios from 'axios'

  export default {
    data() {
        return {
        isShow: false,
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
    methods:{
      show(){
        this.isOrder = true;
        this.isShow = true;
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
      }         
    }
  }
</script>

<style scoped>
h3 {
  margin-bottom: 20px;
}
 input{
   width: 100%;
   height: 40px;
   margin:0 10px 10px 0;
   padding-left: 10px;
 }
 textarea{
   width: 100%;
   margin-bottom: 20px;
   padding-left: 10px;
 }
 .invalid{
  border-color: red;
  /* border-width: 2px; */
 }
  .small-input{
   width: 90%;
 }
 .dynamic-width{
   width: 1024px;
 }
  .custom-container{
   width: 40%;
 } 
  .col-custom{
    text-align: left;
 }
 @media only screen and (max-width: 767px) {
 .small-input{
   width: 100%;
 }
 .col-custom{
   margin-bottom: 0 !important;
 }
 .dynamic-width{
   width: 100%;
 }
 .custom-container{
   width: 100%;
 } 
}
</style>