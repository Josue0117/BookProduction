<template>
  <div class="content navbar-container">
    <nav class="navbar navbar-expand-lg">
      <div class="title background">
        <p class="navbar-title">{{ title }}</p>
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
            <!--- TO DO: Make this navBar option be color:white if is the current page --->
            <div v-bind:class="{selected: (this.$route.path === '/' + skillOptionText)}">
              <NuxtLink 
                class="nav-link" 
                to="/skills"
              >{{ skillOptionText }}</NuxtLink>
            </div>
          </li>
          <li class="nav-item">
            <!--- TO DO: Make this navBar option be color:white if is the current page --->
            <div v-bind:class="{selected: (this.$route.path === '/' + aboutOptionText)}">
              <NuxtLink 
                class="nav-link" 
                to="/about-me"
              >{{ aboutOptionText }}</NuxtLink>
            </div>
          </li>
          <li class="nav-item">
            <!--- TO DO: Make this navBar option be color:white if is the current page --->
            <div v-bind:class="{selected: (this.$route.path === '/' + projectsOptionText)}">
              <NuxtLink 
                class="nav-link" 
                to="/projects"
              >{{ projectsOptionText }}</NuxtLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { 
  ABOUT_ME_TITLE,
  TITLE_CARD_2,
  TITLE_CARD_3,
} from '@/constants-static-texts.js'
export default {
  props: {
    title: {
      type: String,
      default:''
    }
  },
  data: () => {
    return {
      skillOptionText: TITLE_CARD_2,
      aboutOptionText: ABOUT_ME_TITLE,
      projectsOptionText: TITLE_CARD_3
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
.navbar-container {
  background-color: #c4c4c4;
  height: 55px;
}

.navbar {
  padding: 0;
}

div.selected a {
  color: white;
}

.background {
  background-color: #00071f;
  padding: 0px 35px 0px 35px;
}

.title {
  margin: 0px 0 20px 8%;
  text-align: center;
}

p.navbar-title {
  color: white;
  padding: 0px 0 0 0;
}

.navbar-nav {
  margin: -35px 0 0 0;
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
    margin: 0;
    font-size: 45px;
    width: 100%;
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
