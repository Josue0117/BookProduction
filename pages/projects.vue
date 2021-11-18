<template>
  <div class="projects-container">
    <div class="page-content">
      <NavBar :title="navBarTitle" />

      <!-- PANDEMIC SIMULATOR --->
      <div class="row">
        <div class="col-2"></div>
        <div class="col-2 hero-image">
          <div class="row">
            <img
              :src="require('@/assets/images/coronavirus-azul.png')"
              alt="hero-image"
            />
          </div>
          <div class="row blue-buttons">
            <div class="col-6 button-1">
              <a href="https://josue0117.github.io/PandemicSimulator/">Aplicación</a>
            </div>
            <div class="col-6 button-2">
              <a href="https://github.com/Josue0117/pandemic-simulator">GitHub</a>
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="row">
            <div class="col-12">
              <Paragraph
                :title="simulatorTitle"
                :content="simulatorContent"
                context="static-page"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- BOOK --->
      <div class="row">
        <div class="col-2"></div>
        <div class="col-2 hero-image">
          <div class="row">
            <img
              :src="require('@/assets/images/book.png')"
              alt="hero-image"
            />
          </div>
          <div class="row blue-buttons">
            <div class="col-6 button-1">
              <a href="/">Aplicación</a>
            </div>
            <div class="col-6 button-2">
              <a href="https://github.com/Josue0117/book/tree/master">GitHub</a>
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="row">
            <div class="col-12">
              <Paragraph
                :title="bookTitle"
                :content="bookContent"
                context="static-page"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="push"></div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { 
  NAVBAR_TITLE,
  PANDEMIC_SIMULATOR_TITLE,
  PANDEMIC_SIMULATOR_CONTENT,
  BOOK_TITLE,
  BOOK_CONTENT,
} from '@/constants-static-texts.js'
export default {
  data: () => {
    return {
      navBarTitle: NAVBAR_TITLE,
      simulatorTitle: PANDEMIC_SIMULATOR_TITLE,
      simulatorContent: PANDEMIC_SIMULATOR_CONTENT,
      bookTitle: BOOK_TITLE,
      bookContent: BOOK_CONTENT
    }
  }
}
</script>

<style scoped>
.projects-container {
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
  margin-top: 20%;
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
  height: 250px;
}
</style>
