<template>
  <div class="content">

    <!-- CARD 1 -->
    <div class="card-1" v-if="cardNumber == 1">
      <div class="row">
        <Paragraph
          class="desktop-version"
          :title="myHistoryTitle"
          :multi-paragraph-content="myHistoryContent"
          context="dynamic"
        />
      </div>
      <div class="row">
        <Paragraph
          class="mobile-version"
          :title="myHistoryTitle"
          :content="myHistoryMobile"
          context="dynamic"
        />
      </div>
      <div class="row">
        <button class="red-button">
          {{ buttonText }}
        </button>
      </div>
    </div>

    <!-- CARD 2 -->
    <div class="card-2" v-if="cardNumber == 2">
      <Paragraph
        class="desktop-version"
        :title="languagesSection.title"
        :skills-list="languagesSection.values"
        context="dynamic"
      />
      <Paragraph
        class="mobile-version"
        :title="languagesSectionMovile.title"
        :skills-list="languagesSectionMovile.values"
        context="dynamic"
      />
    </div>

    <!-- CARD 3 -->
    <div class="card-2" v-if="cardNumber == 3">
      <div class="row">
        <Paragraph
          :title="proyectTittle"
          :content="proyectDescription"
          context="dynamic"
        />
      </div>
      <div class="row proyect-img">
        <div class="col-2"></div>
        <img
          class="col-8"
          :src="require('@/assets/images/coronavirus-azul.png')"
          alt="virus-image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {
  MY_HISTORY_TITLE,
  MY_HISTORY_CONTENT,
  MY_HISTORY_MOBILE,
  DOWNLOAD_BUTTON_TEXT,
  LANGUAGES_SECTION,
  LANGUAGES_SECTION_MOBILE,
  PANDEMIC_SIMULATOR_TITLE,
  CARD_VERSION_PS_CONTENT
} from '@/constants-static-texts.js'
export default {
  props: {
    cardNumber: {
      Type: Number,
      default: 0,
    },
  },
  data: () => {
    return {
      myHistoryTitle: MY_HISTORY_TITLE,
      myHistoryContent: MY_HISTORY_CONTENT,
      myHistoryMobile: MY_HISTORY_MOBILE,
      buttonText: DOWNLOAD_BUTTON_TEXT,
      languagesSection: LANGUAGES_SECTION,
      languagesSectionMovile: LANGUAGES_SECTION_MOBILE,
      proyectTittle: PANDEMIC_SIMULATOR_TITLE,
      proyectDescription: CARD_VERSION_PS_CONTENT,
    }
  },
}
</script>

<style scoped>
.desktop-version {
  display: none;
}

.mobile-version {
  display: block;
}

.red-button {
  margin: 10%;
  padding-bottom: 6px;
  width: 100%;
  font-size: 14px;
  background-color: #7e0000;
  color: white;
  border-radius: 5px;
  border: none;
}

.languages-container {
  padding: 10%;
  padding-bottom: 0;
}

.language-icon img {
  width: 100%;
  margin-bottom: 10px;
}

.proyect-img img {
  width: 100%;
  padding: 5% 10% 0 10%;
}

@media (min-width: 576px) {
  div.desktop-version {
    display: block;
  }

  .mobile-version {
    display: none;
  }
}
</style>
