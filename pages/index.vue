<template>
  <div>
    <div class="container-cards-roulete">
      <div class="cards-roulete">
        <NuxtLink to="/about-me">
          <InfoCard
            class="info-card card-1"
            :header-image-url="require('@/assets/images/hero-image.png')"
            :title="titleCard1"
            :subtitle="subtitleCard1"
            :cardNumber="1"
          />
        </NuxtLink>
        <NuxtLink to="/skills">
          <InfoCard
            class="info-card card-2"
            :title="titleCard2"
            :cardNumber="2"
          />
        </NuxtLink>
        <NuxtLink to="/proyects">
          <InfoCard
            class="info-card card-3"
            :title="titleCard3"
            :cardNumber="3"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import {
  TITLE_CARD_1,
  CARD_1_SUBTITLE,
  TITLE_CARD_2,
  TITLE_CARD_3,
} from '@/constants-static-texts.js'
export default {
  data: () => {
    return {
      titleCard1: TITLE_CARD_1,
      subtitleCard1: CARD_1_SUBTITLE,
      titleCard2: TITLE_CARD_2,
      titleCard3: TITLE_CARD_3,
    }
  },
}
</script>

<style>
.container-cards-roulete {
  position: relative;
  height: 100px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.cards-roulete {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  max-width: 1060px;
  width: 600px;
  height: 100%;
}

.info-card.card-1 {
  z-index: 116;
  transform: translateX(50%) scale(116%);
  animation: animation-card1 20s linear infinite;
}

.info-card.card-2 {
  animation: animation-card2 20s linear infinite;
}

.info-card.card-3 {
  transform: translateX(100%);
  animation: animation-card3 20s linear infinite;
}

@keyframes animation-card1 {
  0% {
    transform: translateX(50%) scale(116%);
    z-index: 116;
  }

  6.25% {
    transform: translateX(70%) scale(113%);
    z-index: 113;
  }

  12.5% {
    transform: translateX(85%) scale(110%);
    z-index: 110;
  }

  18.75% {
    transform: translateX(95%) scale(105%);
    z-index: 105;
  }
  
  25% {
    transform: translateX(100%) scale(100%);
    z-index: 100;
  }

  50% {
    transform: translateX(50%) scale(84%);
    z-index: 84;
  }

  75% {
    transform: translateX(0%) scale(100%);
    z-index: 100;
  }

  81.25%{
    transform: translateX(5%) scale(105%);
    z-index: 105;
  }

  87.25% {
    transform: translateX(15%) scale(110%);
    z-index: 110;
  }

  93.75% {
    transform: translateX(30%) scale(113%);
    z-index: 113;
  }
}

@keyframes animation-card2 {
  0% {
    transform: translateX(0) scale(100%);
    z-index: 100;
    /* z-index: 4; */
  }

  6.25% {
    transform: translateX(5%) scale(105%);
    z-index: 105;
  }

  12.5% {
    transform: translateX(15%) scale(110%);
    z-index: 110;
    /* z-index: 6; */
  }

  18.75% {
    transform: translateX(30%) scale(113%);
    z-index: 113;
    /* z-index: 6; */
  }

  25% {
    transform: translateX(50%) scale(116%);
    z-index: 116;
  }

  31.25% {
    transform: translateX(70%) scale(113%);
    z-index: 113;
  }

  37.5% {
    transform: translateX(85%) scale(110%);
    z-index: 110;
    /* z-index: 5; */
  }

  43.75% {
    transform: translateX(95%) scale(105%);
    z-index: 105;
  }

  50% {
    transform: translateX(100%) scale(100%);
    z-index: 100;
    /* z-index: 3; */
  }

  56.25% {
    transform: translateX(90%) scale(95%);
    z-index: 95;
  }

  75% {
    transform: translateX(50%) scale(85%);
    z-index: 85;
  }
}

@keyframes animation-card3 {
  0% {
    transform: translateX(100%) scale(100%);
    z-index: 100;
  }

  25% {
    transform: translateX(50%) scale(84%);
    z-index: 84;
  }

  50% {
    transform: translateX(0%) scale(100%);
    z-index: 100;
  }

  56.25% {
    transform: translateX(5%) scale(105%);
    z-index: 105;
  }

  62.5% {
    transform: translateX(15%) scale(110%);
    z-index: 110;
  }

  68.75% {
    transform: translateX(30%) scale(113%);
    z-index: 113;
  }

  75% {
    transform: translateX(50%) scale(116%);
    z-index: 116;
  }

  81.25% {
    transform: translateX(70%) scale(113%);
    z-index: 113;
  }

  87.5% {
    transform: translateX(85%) scale(110%);
    z-index: 110;
  }

  93.75% {
    transform: translateX(95%) scale(105%);
    z-index: 105;
  }
}

a:hover {
  text-decoration: none;
}
</style>
