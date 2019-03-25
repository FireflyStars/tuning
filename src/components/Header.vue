<template>
  <div>
    <div class="overlay" :class="showMenu ? 'show' : ''"></div>
    <header>
      <div class="container">
        <a href="/" class="logo">
          <img src="../assets/images/logo.png" alt="">
        </a>
        <ul class="soc-link">
          <li>
            <a href="">
              <i class="fab fa-vk"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fab fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
        <div class="btn"><span>Чип-тюнинг</span></div>
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
              <router-link to="/services">Услуги</router-link>
            </li>
            <li>
              <router-link to="/news">Новости</router-link>
            </li>
            <li>
              <router-link to="/project">Проекты</router-link>
            </li>
            <li>
              <router-link to="/partners">Партнеры</router-link>
            </li>
            <li>
              <router-link to="/contacts">Контакты</router-link>
            </li>
            <li>
              <router-link to="/tuning" class="btn">
                <span>Чип-тюнинг</span>
              </router-link>
            </li>
          </ul>
        </nav>
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