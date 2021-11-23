import { shallowMount } from '@vue/test-utils'
import FooterBlock from '@/components/FooterBlock.vue' 
import { CONTACT_BLOCK_VALUES } from '@/constants-static-texts.js'
const mailsTitle = CONTACT_BLOCK_VALUES.mails.title
const mails = CONTACT_BLOCK_VALUES.mails.values
const telephonesTitle = CONTACT_BLOCK_VALUES.thelephones.title
const telephones = CONTACT_BLOCK_VALUES.thelephones.values

describe('FooterBlock', () => {
  function populateFooterBlock (blockTitle, blockValues) {
    return shallowMount(FooterBlock, {
      propsData: {
        title: blockTitle,
        values: blockValues
      }
    })
  }

  test('is a Vue instance', () => {
    const wrapper = shallowMount(FooterBlock)
    expect(wrapper).toBeTruthy()
  })

  test('is rendering the mails block correctly', () => {
    const wrapper = populateFooterBlock(mailsTitle, mails)
    const blockValues = wrapper.findAll('.footer-block-value')
    expect(wrapper.find('.footer-block-tittle').text()).toEqual(mailsTitle)
    expect(blockValues.length).toBe(2)
    expect(blockValues.at(0).text()).toEqual(mails[0])
    expect(blockValues.at(1).text()).toEqual(mails[1])
  })

  test('is rendering the telephones block correctly', () => {
    const wrapper = populateFooterBlock(telephonesTitle, telephones)
    const blockValues = wrapper.findAll('.footer-block-value')
    expect(wrapper.find('.footer-block-tittle').text()).toEqual(telephonesTitle)
    expect(blockValues.length).toBe(2)
    expect(blockValues.at(0).text()).toEqual(telephones[0])
    expect(blockValues.at(1).text()).toEqual(telephones[1])
  })
})
