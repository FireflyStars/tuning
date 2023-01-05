<template>
  <div>
    <header>
        <!-- <div class="container">
          <a href="/" class="logo">
            <img src="../assets/images/logo.png" alt="">
          </a>
          <ul class="header">
            <li><a href="https://yandex.ru/maps/?ll=55.731731%2C37.401249&z=13" target="_blank" itemprop="address" itemscope="" itemtype="http://schema.org/PostalAddress">
            <i class="fas fa-map-marker-alt"></i> г. Москва, ул. Молодогвардейская 57 строение 9
            </a></li>
            <li>Пн-Вс | 11:00 - 21:00</li>
          </ul>
          <ul  class="header">
            <li><a href="javascript:void(0)">+7911 208 30 51</a></li>
            <li><a href="javascript:void(0)" style="font-size:14px">info@e-mail.ru</a></li>
          </ul>          
          <a href="/login" class="login"><i class="fa fa-user" style="color:white;cusor:pointer">&nbsp;Вход</i></a>
        </div> -->
        <div class="container navbar">
          <a href="/" class="logo">
            <img src="../assets/images/logo.png" alt="">
          </a>    
          <nav class="mainMenu">
            <div class="burger"
                @click="show"
                :class="showMenu ? 'show' : ''">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul :class="showMenu ? 'show' : ''">
              <li>
                <router-link to="/about">О компании</router-link>
              </li>
              <li>
                <router-link to="/service">Сервис</router-link>
              </li>
              <li>
                <router-link to="/news">Новости</router-link>
              </li>
              <li>
                <router-link to="/project">Проекты</router-link>
              </li>
              <li>
                <router-link to="/contacts">Контакты</router-link>
              </li>
              <li>
                <a href="/login" class="login">Вход</a>
              </li>  
            </ul>
          </nav>     
          <ul class="normal">
            <li>
              <router-link to="/about">О компании</router-link>
            </li>
            <li>
              <router-link to="/service">Сервис</router-link>
            </li>
            <li>
              <router-link to="/news">Новости</router-link>
            </li>
            <li>
              <router-link to="/project">Проекты</router-link>
            </li>
            <li>
              <router-link to="/contacts">Контакты</router-link>
            </li>
            <li>
              <a href="/login" class="login">Вход</a>
            </li>            
          </ul>
        </div>
    </header>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showMenu: false
      }
    },
    methods: {
      show() {
        this.showMenu = !this.showMenu;
        let body = document.querySelector('body');
        if (this.showMenu) {
          body.classList.add('overflow')
        } else {
          body.classList.remove('overflow');
        }
      }
    }
  }
</script>

<style scoped>


</style>