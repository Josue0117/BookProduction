<template>
  <div class="content navbar-container">
    <nav class="navbar navbar-expand-lg">
      <div class="title background">
        <p class="navbar-title">{{ navBarTitle }}</p>
      </div>
      <button class="navbar-toggler" @click="showMenu">
        <div class="toggler-icon"></div>
        <div class="toggler-icon"></div>
        <div class="toggler-icon"></div>
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
            <div>
              <NuxtLink 
                class="nav-link" 
                to="/skills"
              >{{ skillOptionText }}</NuxtLink>
            </div>
          </li>
          <li class="nav-item">
            <!--- TO DO: Make this navBar option be color:white if is the current page --->
            <div>
              <NuxtLink 
                class="nav-link" 
                to="/about-me"
              >{{ aboutOptionText }}</NuxtLink>
            </div>
          </li>
          <li class="nav-item">
            <!--- TO DO: Make this navBar option be color:white if is the current page --->
            <div>
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
  NAVBAR_TITLE,
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
      navBarTitle: NAVBAR_TITLE,
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

button.navbar-toggler {
  border: 2px solid #6B6666;
  border-radius: 8px;
  margin: -10px 10px 0 0; 
}

.toggler-icon {
  background-color: #6B6666;
  width: 25px;
  height: 3px;
  border-radius: 10px;
  margin: 5px 0 5px 0;
}

#navbarSupportedContent {
  position: relative;
  margin: -15px 0 0 0;
  padding: 30px 0 0 8%;
  background-color: #c4c4c4;
  z-index: 100;
}

div.selected a {
  color: white;
}

.background {
  background-color: #00071f;
  padding: 0px 35px 0px 35px;
}

.title {
  margin: 0 0 0 8%;
  text-align: center;
  z-index: 101;
}

p.navbar-title {
  font-size: 45px;
  color: white;
  padding: 0 0 0 0;
  margin: 0;
  width: 100%;
}

.navbar-nav {
  margin: -25px 0 0 0;
}

.nav-item a {
  color: #6B6666;
  margin-left: 20px;
  font-size: 18px;
}

.nav-item a:hover {
  color:white;
}

.container-link-to-index {
  margin: 20px 0 0 10px;
}

.link-to-index {
  border: solid 2px;
  margin-top: 0;
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



@media (min-width: 992px) {
  #navbarSupportedContent {
    padding: 25px 0 0 8%;
    position: absolute;
    right: 8%;
  }

  .container-link-to-index {
    margin: 5px 0 0 10px;
  }
}
</style>
