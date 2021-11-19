<template>
  <footer>
    <div class="title">
      <div>
        <p class="footer-title">{{ navBarTitle }}</p>
        <p class="footer-subtitle">{{ navBarSubtitle }}</p>
      </div>
    </div>
    <div class="contact">
      <div class="row">
        <div
          class="col-md-12 col-lg-3"
          v-for="contact in contactBlocksValues"
          v-bind:key="contact.title"
        >
          <FooterBlock :title="contact.title" :values="contact.values" />
        </div>
        <div class=" col-lg-3"></div>
        <div class=" col-lg-3">
          <div class="row media-links">
            <div class="col-md-10 col-lg-4"></div>
            <div
            class="media-link-icon"
              v-for="mediaLink in mediaLinks"
              v-bind:key="mediaLink"
            >
              <FooterLink 
                :image-src="mediaLink.imageSrc"
                :link="mediaLink.link"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import {
  TITLE_CARD_1,
  CARD_1_SUBTITLE,
  CONTACT_BLOCK_VALUES,
  MEDIA_LINKS,
} from '@/constants-static-texts.js'
export default {
  data: () => {
    return {
      navBarTitle: TITLE_CARD_1.toUpperCase(),
      navBarSubtitle: CARD_1_SUBTITLE.toUpperCase(),
      contactBlocksValues: CONTACT_BLOCK_VALUES,
      mediaLinks: MEDIA_LINKS,
    }
  },
}
</script>

<style scoped>
footer {
  position: relative;
  left: 0;
  right: 0;
  background-color: #00071f;
  min-height: 200px;
}

.title {
  padding: 20px;
  text-align: left;
  background: linear-gradient(180deg, #00071f 0%, #000000 100%);
}

.title div {
  width: auto;
  margin-left: 2%;
  text-align: center;
}

p.footer-title {
  color: white;
  margin-bottom: 0;
}

p.footer-subtitle {
  color: #01a4ff;
  font-size: 12px;
  margin-bottom: 0;
}

.contact {
  position: relative;
  bottom: 0;
  padding: 0% 5% 0% 5%;
}

.media-links {
  text-align: right;
}

.media-link-icon {
  margin-left: 2%;
}


@media (min-width: 768px) {
  .contact {
    padding: 20px 20px 20px 9%;
  }  

  .media-link-icon {
    margin-top: 20px;
  }
}
</style>
