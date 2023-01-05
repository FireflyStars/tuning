<template>
  <footer>
    <div class="footer-info">
      <div class="container">
        <div class="row space-between">
          <div class="col custom-col">
            <h3>Адрес: г. Москва ул. Молодогвардейская 57 строение 9</h3>
            <h3>Телефон: +7 911 208 30 51</h3>
            <h3>E-mail: info@info.com</h3>
          </div>
          <div class="col">
            <ul class="menu">
              <li><router-link to="/about">О компании</router-link></li>
              <li><router-link to="/service">Сервис</router-link></li>
              <li><router-link to="/news">Новости</router-link></li>
              <li><router-link to="/project">Проекты</router-link></li>
              <li><router-link to="/contacts">Контакты</router-link></li>
            </ul>
          </div>
          <div class="col">
            <ul class="soc-link">
              <li>
                <a href="https://vk.com/k8_strasse" class="red-color">
                  <i class="fab fa-vk"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/K8STRASSEDE" class="red-color">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/K8Strasse" class="red-color">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/k8_strasse_official/" class="red-color">
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
        <p>&copy; Предложения на сайте не являются публичной офертой. Подробности уточняйте у
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
  .red-color:hover{
    background: red;
    border-radius: 10px;
  }
  .custom-col h3{
    font-size: 18px;
    line-height: 30.4px;
    font-weight: normal;
  }
  @media only screen and (max-width:767px){
    .custom-col h3{
      font-size: 14px;
    }
  }
</style>