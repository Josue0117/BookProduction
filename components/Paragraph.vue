<template>
  <div :class="'content ' + context">
    <div class="paragraph-title">
      <span class="title-span">{{ title }}</span>
    </div>
    <div class="line"></div>
    <div v-if="content != ''" class="paragraph-content">
      <span class="paragraph-content-span">{{ content }}</span>
    </div>
    <div
      v-else
      class="paragraph-content"
      v-for="paragraph in multiParagraphContent"
      v-bind:key="Object.keys(paragraph)[0]"
    >
      <span v-if="paragraph.hasOwnProperty('normal')" class="normal-text">{{ paragraph.normal }}</span>
      <span v-else-if="context != 'dynamic'" class="strong-text">{{ paragraph.strong }}</span>
    </div>
    <div class="row">
      <div
        class="col-6 col-sm-3 col-lg-4 paragraph-images"
        v-for="skill in skillsList"
        v-bind:key="skill.name"
      >
        <img
          v-if="skill.src != ''"
          :src="require('@/assets/images/' + skill.src + '.png')"
          :alt="skill.name + '-image'"
        />
        <div v-else class="skill-without-logo">
          <p>
            {{ skill.name }}
          </p>
        </div>
        <p
          v-if="skill.isASalesforceSkill"
          :class="'salesforce-skill ' + skill.domain"
        >
          Salesforce
        </p>
        <p v-else :class="'common-skill ' + skill.domain">
          {{ skill.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    skillsList: {
      type: Array,
      default() {
        return []
      }
    },
    multiParagraphContent: {
      type: Array,
      default() {
        return []
      }
    },
    context: {
      type: String,
      default: ''
    }
  },
  data: () => {
    return {
      hover: false,
    }
  }
}
</script>

<style scoped>
.static-page .paragraph-title span {
  font-size: 25px;
}

.static-page .paragraph-content span {
  font-size: 15px;
  color: #aa9f9f;
}

.content {
  text-align: justify;
  padding-bottom: 0;
}

.static-page {
  padding: 10% 0 0 0;
}

.dynamic {
  padding: 5%;
}

.paragraph-title {
  color: #6b6666;
}

.paragraph-content {
  font-size: 12px;
  color: #6b6666;
}

.static-page .paragraph-content span.strong-text {
  color: #01a4ff;
  font-weight: bolder;
}

.line {
  width: 100%;
  height: 2px;
  background-color: #01a4ff;
}

.paragraph-images {
  text-align: center;
}

img {
  width: 100%;
  padding: 25%;
}

@media (min-width: 768px) {
  .static-page {
    padding: 10% 5% 0% 5%;
  }
}
</style>
