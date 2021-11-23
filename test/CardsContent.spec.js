import { shallowMount } from '@vue/test-utils'
import CardsContent from '@/components/CardsContent.vue'

describe('CardsContent', () => {
  function setupCardNumber (cardNumber) {
    return shallowMount(CardsContent, {
      propsData: {
        cardNumber
      },
      stubs: {
        Paragraph: true
      }
    })
  }

  test('is a Vue instance', () => {
    const wrapper = shallowMount(CardsContent)
    expect(wrapper).toBeTruthy()
  })

  test('is rendering the correct card depending on the given value as prop', () => {
    const wrapper = setupCardNumber(1)
    expect(wrapper.find(".card-1").exists()).toBe(true)  
  })

  test('is rendering the second card if cardNumber is equal to 2', () => {
    const wrapper = setupCardNumber(2)
    expect(wrapper.find(".card-2").exists()).toBe(true)  
  })

  test('is rendering the thirt card if cardNumber is equal to 3', () => {
    const wrapper = setupCardNumber(3)
    expect(wrapper.find(".card-3").exists()).toBe(true)  
  })
})
