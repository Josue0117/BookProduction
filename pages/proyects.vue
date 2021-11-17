<template>
  <div class="proyects-container">
    <div class="page-content">
      <NavBar :title="navBarTitle" />
      <div class="row">
        <div class="col-1"></div>
        <div class="col-3 hero-image">
          <div class="row">
            <img
              :src="require('@/assets/images/coronavirus-azul.png')"
              alt="hero-image"
            />
          </div>
          <div class="row blue-buttons">
            <div class="col-6 button-1">
              <a href="#">Simulador</a>
            </div>
            <div class="col-6 button-2">
              <a href="https://github.com/Josue0117/pandemic-simulator">GitHub</a>
            </div>
          </div>
        </div>
        <div class="col-8 about-vision">
          <div class="row">
            <div class="col-6">
              <Paragraph
                :title="simulatorTitle"
                :content="simulatorContent"
                context="static-page"
              />
            </div>
            <div class="col-6">
              <Paragraph
                :title="simulatorCaracteristicsTtitle"
                :content="simulatorCaracteristicsContent"
                context="static-page"
              />
            </div>
          </div>
        </div>
        <div class="row"></div>
      </div>
      <div class="push"></div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { 
  TITLE_CARD_3,
  PANDEMIC_SIMULATOR_TITLE,
  PANDEMIC_SIMULATOR_CONTENT,
  PS_CARACTERISTICS_TITLE,
  PS_CARACTERISTICS_CONTENT,
} from '@/constants-static-texts.js'
export default {
  data: () => {
    return {
      navBarTitle: TITLE_CARD_3,
      simulatorTitle: PANDEMIC_SIMULATOR_TITLE,
      simulatorContent: PANDEMIC_SIMULATOR_CONTENT,
      simulatorCaracteristicsTtitle: PS_CARACTERISTICS_TITLE,
      simulatorCaracteristicsContent: PS_CARACTERISTICS_CONTENT
    }
  }
}
</script>

<style scoped>
.proyects-container {
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0;
}

.page-content {
  min-height: 100%;
  margin-bottom: -200px;
}

div.static-page {
  padding-top: 100px;
}

.row {
  width: 100%;
}

.hero-image img {
  margin-top: 15%;
  width: 100%;
}

.blue-buttons {
  padding-top: 5%;
}

.blue-buttons a {
  padding: 5px 15px 5px 15px;
  background-color: white;
  color: #01a4ff;
  border: solid 1px #01a4ff;
  border-radius: 5px;
}

.blue-buttons a:hover {
  background-color: #01a4ff;
  color: white;
}

.button-1 {
  text-align: right;
}

Footer,
.push {
  height: 200px;
}
</style>
