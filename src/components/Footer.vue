<template>
  <footer>
    <div class="footer-info">
      <div class="container">
        <div class="row space-between">
          <div class="col">
            <h3>Адрес: г. Москва, ул. Автомоторная, д. 7</h3>
            <h3>Телефон: +7 123 456 7890</h3>
            <h3>E-mail: info@info.com</h3>
          </div>
          <div class="col">
            <ul class="menu">
              <li><router-link to="/about">О компании</router-link></li>
              <li><router-link to="/services">Услуги</router-link></li>
              <li><router-link to="/news">Новости</router-link></li>
              <li><router-link to="/project">Проекты</router-link></li>
              <li><router-link to="/partners">Партнеры</router-link></li>
              <li><router-link to="/contacts">Контакты</router-link></li>
            </ul>
          </div>
          <div class="col">
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
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copy">
      <div class="container">
        <p>&copy; Лок Бокс Автосервис 2018. Предложения на сайте не являются публичной офертой. Подробности уточняйте у
          менеджера.</p>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>

</style>