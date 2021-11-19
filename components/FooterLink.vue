<template>
  <div class="media-link-container">
    <a
      @mouseover="hover = false"
      @mouseleave="hover = true"
      :href="link"
    >
      <img
        :src="
          hover
            ? require('@/assets/images/' + imageSrc + '.png')
            : require('@/assets/images/' + imageSrc + '-hover.png')
        "
        :alt="imageSrc"
      />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    }
  },
  data: () => {
    return {
      hover: true
    }
  }
}
</script>

<style scoped>
.media-link-container img {
  width: 40px;
  margin: 5px 5% 0 0;
}


@media (min-width: 721px) {
  .media-link-container img {
    margin: 20px 10px 0 0;
    margin-top: 0;
  }  
}
</style>
