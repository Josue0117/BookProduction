import { shallowMount } from '@vue/test-utils'
import CardsContent from '@/components/CardsContent.vue'
import Paragraph from '@/components/Paragraph.vue'

describe('CardsContent', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(CardsContent)
    expect(wrapper).toBeTruthy()
  })

  test('is rendering the first card if cardNumber is equal to 1', () => {
    const wrapper = shallowMount(CardsContent, {
      propsData: {
        cardNumber: 1
      },
      stubs: {
        Paragraph: true
      }
    })
    expect(wrapper.find(".card-1").exists()).toBe(true)  
  })

  test('is rendering the second card if cardNumber is equal to 2', () => {
    const wrapper = shallowMount(CardsContent, {
      propsData: {
        cardNumber: 2
      },
      stubs: {
        Paragraph: true
      }
    })
    expect(wrapper.find(".card-2").exists()).toBe(true)  
  })

  test('is rendering the thirt card if cardNumber is equal to 3', () => {
    const wrapper = shallowMount(CardsContent, {
      propsData: {
        cardNumber: 3
      },
      stubs: {
        Paragraph: true
      }
    })
    expect(wrapper.find(".card-3").exists()).toBe(true)  
  })
})
