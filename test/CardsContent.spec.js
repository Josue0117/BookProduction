import { mount, shallowMount } from '@vue/test-utils'
import CardsContent from '@/components/CardsContent.vue'

describe('CardsContent', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(CardsContent)
    expect(wrapper).toBeTruthy()
  })

  test('is rendering the first card if cardNumber is equal to 1', () => {
    const wrapper = mount(CardsContent, {
      propsData: {
        cardNumber: 1
      }
    })
    expect(wrapper.find(".card-1").exists()).toBe(true)  
  })

  test('is rendering the second card if cardNumber is equal to 2', () => {
    const wrapper = mount(CardsContent, {
      propsData: {
        cardNumber: 2
      }
    })
    expect(wrapper.find(".card-2").exists()).toBe(true)  
  })

  test('is rendering the thirt card if cardNumber is equal to 3', () => {
    const wrapper = mount(CardsContent, {
      propsData: {
        cardNumber: 3
      }
    })
    expect(wrapper.find(".card-3").exists()).toBe(true)  
  })
})
