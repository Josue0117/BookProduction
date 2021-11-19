<template>
  <div class="projects-container">
    <div class="page-content">
      <NavBar :title="navBarTitle" />

      <!-- PANDEMIC SIMULATOR --->
      <div class="row">
        <div class="col-lg-2"></div>
        <div class="col-lg-2 hero-image">
          <div class="row">
            <img
              :src="require('@/assets/images/coronavirus-azul.png')"
              alt="hero-image"
            />
          </div>
          <div class="row blue-buttons">
            <div class="col-6 button-1">
              <a v-bind:href="simulatorLinks.app">Aplicación</a>
            </div>
            <div class="col-6 button-2">
              <a v-bind:href="simulatorLinks.gitHub">GitHub</a>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-lg-8">
          <div class="row">
            <div class="col-md-12 col-lg-11">
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
        <div class="col-lg-2"></div>
        <div class="col-lg-2 hero-image">
          <div class="row">
            <img
              :src="require('@/assets/images/book.png')"
              alt="hero-image"
            />
          </div>
          <div class="row blue-buttons">
            <div class="col-6 button-1">
              <a v-bind:href="bookLinks.app">Aplicación</a>
            </div>
            <div class="col-6 button-2">
              <a v-bind:href="bookLinks.gitHub">GitHub</a>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-lg-8">
          <div class="row">
            <div class="col-md-12 col-lg-11">
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
import { SIMULATOR_LINKS, BOOK_LINKS } from '@/constants-urls.js'
import { 
  NAVBAR_TITLE,
  PANDEMIC_SIMULATOR_TITLE,
  PANDEMIC_SIMULATOR_CONTENT,
  BOOK_TITLE,
  BOOK_CONTENT
} from '@/constants-static-texts.js'
export default {
  data: () => {
    return {
      navBarTitle: NAVBAR_TITLE,
      simulatorTitle: PANDEMIC_SIMULATOR_TITLE,
      simulatorContent: PANDEMIC_SIMULATOR_CONTENT,
      bookTitle: BOOK_TITLE,
      bookContent: BOOK_CONTENT,
      simulatorLinks: SIMULATOR_LINKS,
      bookLinks: BOOK_LINKS
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

div.static-page {
  padding-top: 50px;
}

.row {
  width: 100%;
  margin: 0;
}

.hero-image img {
  margin: 15% 0 0 15%;
  width: 70%;
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

.page-content {
  min-height: 100%;
  margin-bottom: -300px;
}

Footer,
.push {
  height: 340px;
}

@media (min-width: 768px) {
  .page-content {
    margin-bottom: -170px;
  }

  Footer,
  .push {
    height: 220px;
  }

  div.static-page {
    padding-top: 100px;
  }

  .hero-image img {
    margin: 20% 0 0 0;
    width: 100%;
  }
}
</style>
