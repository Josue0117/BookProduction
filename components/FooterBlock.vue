<template>
  <div class="content">
    <p class="footer-block-tittle">{{ blockTitle }}</p>
    <p v-for="value in blockValues" v-bind:key="value" class="footer-block-value">
      {{ value }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    blockTitle: {
      type: String,
      default: ''
    },
    blockValues: {
      type: Array,
      default() {
        return []
      }
    },
  },
}
</script>

<style scoped>
.content {
  position: inherit;
  display: block;
  padding: 20px 0 5px 0;
}

p {
  margin-bottom: 0;
}

p.footer-block-tittle {
  color: #01a4ff;
}

p.footer-block-value {
  color: white;
}


@media (min-width: 768px) {
  .content {
    padding: 0 0 5px 0;
  } 
}
</style>
