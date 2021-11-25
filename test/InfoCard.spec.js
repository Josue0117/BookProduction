import { shallowMount } from '@vue/test-utils'
import InfoCard from '@/components/InfoCard.vue'
import {
  TITLE_CARD_1,
  CARD_1_SUBTITLE,
  TITLE_CARD_2,
  TITLE_CARD_3,
} from '@/constants-static-texts.js'

describe('InfoCard', () => {
  function populateInfoCardContent (cardNumber, title, subtitle, headerImageUrl) {
    return shallowMount(InfoCard, {
      propsData: {
        cardNumber,
        title,
        subtitle,
        headerImageUrl,
      },
      stubs: {
        CardsContent: true
      }
    })
  }

  test('is a Vue instance', () => {
    const wrapper = populateInfoCardContent()
    expect(wrapper).toBeTruthy()
  })

  test('is rendering the header of the "About Me" card correctly', () => {
    const wrapper = populateInfoCardContent(1, TITLE_CARD_1, CARD_1_SUBTITLE, '@/assets/images/hero-image.png')

    const headerImage = wrapper.find(".hero-image")
    const title = wrapper.find("p.title")
    const subtitle = wrapper.find("p.subtitle")  

    expect(headerImage.exists()).toBe(true)
    expect(title.text()).toBe(TITLE_CARD_1)
    expect(subtitle.text()).toBe(CARD_1_SUBTITLE)
  })

  test('is rendering the header of the "Skills" card correctly', () => {
    const wrapper = populateInfoCardContent(2, TITLE_CARD_2)

    const title = wrapper.find("p.title")
    expect(title.text()).toBe(TITLE_CARD_2)
  })

  test('is rendering the header of the "Projects" card correctly', () => {
    const wrapper = populateInfoCardContent(2, TITLE_CARD_3)

    const title = wrapper.find("p.title")
    expect(title.text()).toBe(TITLE_CARD_3)
  })
})
