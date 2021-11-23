import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue' 
import { TITLE_CARD_1, CARD_1_SUBTITLE } from '@/constants-static-texts.js'

describe('Footer', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(Footer, {
      stubs: {
        FooterLink: true,
        FooterBlock: true
      }
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper).toBeTruthy()
  })

  test('is rendering the title correctly', () => {
    const title = wrapper.find('.footer-title')
    expect(title.text()).toEqual(TITLE_CARD_1.toUpperCase())
  })

  test('is rendering the subtitle correctly', () => {
    const subtitle = wrapper.find('.footer-subtitle')
    expect(subtitle.text()).toEqual(CARD_1_SUBTITLE.toUpperCase())
  })

  test('is rendering all the FooterBlocks', () => {
    const footerBlocks = wrapper.findAll('.footer-block')
    expect(footerBlocks.length).toBe(2)
  })

  test('is rendering all the FooterLinks', () => {
    const footerLinks = wrapper.findAll('.media-link-icon')
    expect(footerLinks.length).toBe(2)
  })
})
