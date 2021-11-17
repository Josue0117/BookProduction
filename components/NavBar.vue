<template>
  <div class="content">
    <nav class="navbar navbar-expand-lg">
      <div class="title">
        <p v-if="title != aboutOptionText" class="navbar-title" id="background">{{ title }}</p>
        <p v-else class="navbar-title">{{ title }}</p>
        <p class="navbar-subtitle">{{ subtitle }}</p>
      </div>
      <button class="navbar-toggler" @click="showMenu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="navbar-collapse collapse"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/">
              <div class="container-link-to-index">
                <div class="link-to-index left"></div>
                <div class="link-to-index center"></div>
                <div class="link-to-index rigth"></div>
              </div>
            </NuxtLink>
          </li>
          <li class="nav-item">
            <div v-bind:class="{selected: (title === skillOptionText)}">
              <NuxtLink 
                class="nav-link" 
                to="/skills"
              >{{ skillOptionText }}</NuxtLink>
            </div>
          </li>
          <li class="nav-item">
            <div v-bind:class="{selected: (title === aboutOptionText)}">
              <NuxtLink 
                class="nav-link" 
                to="/about-me"
              >Acerca de mi</NuxtLink>
            </div>
          </li>
          <li class="nav-item">
            <div v-bind:class="{selected: (title === proyectsOptionText)}">
              <NuxtLink 
                class="nav-link" 
                to="proyects"
              >{{ proyectsOptionText }}</NuxtLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { 
  TITLE_CARD_1,
  TITLE_CARD_2,
  TITLE_CARD_3,
} from '@/constants-static-texts.js'
export default {
  props: {
    title: {
      type: String,
      default:''
    },
    subtitle: {
      type: String,
      default:''
    }
  },
  data: () => {
    return {
      skillOptionText: TITLE_CARD_2,
      aboutOptionText: TITLE_CARD_1,
      proyectsOptionText: TITLE_CARD_3,
    }
  },
  methods: {
    showMenu() {
      const menu = document.getElementById('navbarSupportedContent')
      if (menu.classList.contains('show')) {
        menu.classList.remove('show')
      } else {
        menu.classList.add('show')
      }
    },
  },
}
</script>

<style scoped>
.content {
  background-color: #c4c4c4;
}

.navbar {
  padding: 0;
}

div.selected a {
  color: white;
}

.title {
  margin: 5px 0 20px 8%;
  text-align: center;
}

#background {
  background-color: white;
  padding: 0px 25px 0px 25px;
  color: #6B6666;
}

p.navbar-title {
  color: white;
  text-align: center;
  margin-bottom: 0;
}

p.navbar-subtitle {
  position: absolute;
  color: #01A4FF;
}

.nav-item a {
  color: #6B6666;
  margin-left: 20px;
  font-size: 18px;
}

.nav-item a:hover {
  color:white;
}

.link-to-index {
  border: solid 2px;
  display: none;
}

.left {
  border-right: #6B6666;
  border-radius: 5px 0px 0px 5px;
  width: 10px;
  height: 20px;
  margin-left: -13px;
  margin-bottom: -25px;
}

.center {
  border-radius: 5px;
  width: 25px;
  height: 30px;
}

.rigth {
  border-left: #6B6666;
  border-radius: 0px 5px 5px 0px;
  width: 10px;
  height: 20px;
  margin-left: 28px;
  margin-top: -25px;
}


@media (min-width: 954px) {
  p.navbar-title {
    font-size: 25px;
    margin-top: 10px;
    width: 100%;
  }

  p.navbar-subtitle {
    margin-top: -8px;
  }

  #navbarSupportedContent {
    position: absolute;
    right: 8%;
  }

  .container-link-to-index {
    margin-top: 5px;
  }

  .link-to-index {
    display: block;
  }
}

</style>
