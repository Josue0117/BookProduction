<template>
  <div class="container">
    <div class="row header">
      <div class="col-1"></div>
      <div class="col-3 hero-image" v-if="headerImageUrl != ''">
        <img v-bind:src="headerImageUrl" />
      </div>
      <div class="col-7 title" v-if="headerImageUrl != ''">
        <div class="row">
          <p class="title">{{ title }}</p>
        </div>
        <div class="row">
          <p class="subtitle">{{ subtitle }}</p>
        </div>
      </div>
      <div class="col-12 title" v-else>
        <div class="row">
          <p class="title">{{ title }}</p>
        </div>
        <div class="row subtitle">
          <span>{{ subtitle }}</span>
        </div>
      </div>
    </div>
    <CardsContent :cardNumber="cardNumber"/>
  </div>
</template>

<script>
export default {
  props: {
    headerImageUrl: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    cardNumber: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>
.container {
  position: absolute;
  width: 50%;
  min-height: 400px;
  top: 150px;
  box-shadow: 0 0 15px #938e7e;
  background: white;
  transition: 0.5s;
}

.container:hover {
  box-shadow: 0 0 25px #73ceff;
}

.header {
  background-color: #c4c4c4;
  padding-top: 5px;
}

.hero-image {
  padding: 0;
  display: none;
}

.hero-image img {
  position: relative;
  width:100%;
  padding-top: 10%;
  padding: 0;
}

.title {
  padding: 0;
  text-align: center;
}

p.title {
  color: white;
  font-size: 20px;
  text-align: center;
  padding-top: 5%;
  margin-bottom: 0;
  width: 100%;
}

p.subtitle {
  color: #01A4FF;
  font-size: 15px;
  text-align: center;
  width: 100%;
  margin-top: -8px;
}

@media (min-width: 600px) {
  .container {
    width: 300px;
    height: 450px;
  }

  .hero-image {
    display: block;
  }
}
</style>
