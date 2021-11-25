<template>
  <div class="about-me-container">
    <div class="page-content">
      <NavBar />
      <div class="row">
        <div class="col-sm-12 col-lg-4 hero-image">
          <img
            :src="require('@/assets/images/hero-image.png')"
            alt="hero-image"
          />
        </div>
        <div class="col-sm-12 col-lg-8">
          <div class="row">
            <div class="col-12">
              <Paragraph
                id="about-me-page"
                :title="aboutMeTitle"
                :content="aboutMeContent"
                context="static-page"
              />
            </div>
            <div class="col-12">
              <Paragraph
                id="about-me-page"
                :title="myHistoryTitle"
                :multi-paragraph-content="myHistoryContent"
                context="static-page"
              />
            </div>
            <div class="col-12 red-button-container">
              <a href="/CV.pdf" download="">
                <button class="red-button">
                  {{ buttonText }}
                </button>
              </a>
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
  ABOUT_ME_TITLE,
  ABOUT_ME_CONTENT,
  MY_HISTORY_TITLE,
  MY_HISTORY_CONTENT,
  DOWNLOAD_BUTTON_TEXT,
} from '@/constants-static-texts.js'
export default {
  data: () => {
    return {
      aboutMeTitle: ABOUT_ME_TITLE,
      aboutMeContent: ABOUT_ME_CONTENT,
      myHistoryTitle: MY_HISTORY_TITLE,
      myHistoryContent: MY_HISTORY_CONTENT,
      buttonText: DOWNLOAD_BUTTON_TEXT,
    }
  },
}
</script>

<style scoped>
.about-me-container {
  position: absolute;
  height: 100%;
  margin: 0;
}

.row {
  width: 100%;
  height: 100%;
}

.hero-image {
  text-align: center;
}

.hero-image img {
  border-radius: 50%;
  box-shadow: 0 0 15px #938e7e;
  margin-top: 15%;
  width: 70%;
}

.red-button-container {
  text-align: center;
}

button.red-button {
  margin: 5% 0% 5% 0%;
  padding-top: 6px;
  padding-bottom: 6px;
  width: 40%;
  font-size: 14px;
  background-color: #7e0000;
  color: white;
  border-radius: 5px;
  border: none;
}

button.red-button:hover {
  background-color: #b90101;
}

.row {
  margin-left: 0;
}

.page-content {
  min-height: 100%;
  margin-bottom: -340px;
}

Footer,
.push {
  height: 340px;
}

@media (min-width: 768px) {
  .row {
    margin-left: -15px;
  }

  .hero-image img {
    margin-left: 25%;
  }

  #about-me-page {
    padding-top: 5%;
  }

  .page-content {
    margin-bottom: -200px;
  }

  Footer,
  .push {
    height: 220px;
  }
}
</style>
