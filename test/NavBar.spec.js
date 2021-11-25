import { shallowMount } from '@vue/test-utils'
import NavBar from '@/components/NavBar.vue'
import {
  NAVBAR_TITLE,
  ABOUT_ME_TITLE,
  TITLE_CARD_2,
  TITLE_CARD_3,
} from '@/constants-static-texts.js'

describe('NavBar', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(NavBar, {
      data() {
        return {
          navBarTitle: NAVBAR_TITLE,
          skillOptionText: TITLE_CARD_2,
          aboutOptionText: ABOUT_ME_TITLE,
          projectsOptionText: TITLE_CARD_3,
        }
      },
      stubs: {
        NuxtLink: true
      }
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper).toBeTruthy()
  })
  
  test('is rendering all the elements (title and options) correctly', () => {
    const title = wrapper.find('.navbar-title')
    const linkToIndex = wrapper.find('.container-link-to-index')
    const skillOption = wrapper.findAll(".nav-link").at(1)
    const aboutMeOption = wrapper.findAll(".nav-link").at(2)
    const projectsOption = wrapper.findAll(".nav-link").at(3)
    
    expect(title.text()).toBe(NAVBAR_TITLE)
    expect(linkToIndex.exists()).toBe(true)
    expect(skillOption.text()).toBe(TITLE_CARD_2)
    expect(aboutMeOption.text()).toBe(ABOUT_ME_TITLE)
    expect(projectsOption.text()).toBe(TITLE_CARD_3)
    
  })
})