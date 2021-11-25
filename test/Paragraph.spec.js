import { shallowMount } from '@vue/test-utils'
import Paragraph from '@/components/Paragraph.vue'
import { GITHUB_SECTION } from '@/constants-static-texts'

const title = 'Test title'
const normalContent = 'Test content'
const multiParagraphContent = [
  {normal: 'Example of normal paragraph to test'},
  {strong: 'Example of STRONG paragraph to test'},
]
const listOfImages =  {
  title: 'Example of content of type "List images"',
  values: [
    {
      name: 'value 1',
      src: 'value 1 src',
      domain: 'high',
      isASalesforceSkill: true
    },
    {
      name: 'value 2',
      src: 'value 2 src',
      domain: 'medium',
      isASalesforceSkill: false
    },
    {
      name: 'value 3',
      src: '',
      domain: 'low',
      isASalesforceSkill: false
    }
  ]
}
describe('Paragraph', () => {
  function setupParagraphContent (title, content, skillsList, multiParagraphContent) {
    return shallowMount(Paragraph, {
      propsData: {
        title,
        content,
        skillsList,
        multiParagraphContent,
      }
    })
  }

  test('is a Vue instance', () => {
    const wrapper = shallowMount(Paragraph)
    expect(wrapper).toBeTruthy()
  })

  test('is rendering normal content correctly', () => {
    const wrapper = setupParagraphContent(title, normalContent)
    expect(wrapper.find(".title-span").text()).toBe(title)
    expect(wrapper.find(".paragraph-content-span").text()).toBe(normalContent)
  })

  test('is rendering multi paragraph content correctly', () => {
    const wrapper = setupParagraphContent(title, '', [], multiParagraphContent)
    expect(wrapper.findAll('span').length).toBe(3)
    expect(wrapper.find(".normal-text").text()).toBe(multiParagraphContent[0].normal)
    expect(wrapper.find(".strong-text").text()).toBe(multiParagraphContent[1].strong)
  })

  test('is rendering content of type "images list" correctly', () => {
    const wrapper = setupParagraphContent(listOfImages.title, '', listOfImages.values, [])
    expect(wrapper.findAll('img').length).toBe(2)
    expect(wrapper.findAll('.skill-without-logo').length).toBe(1)
    expect(wrapper.findAll('.salesforce-skill').length).toBe(1)
    expect(wrapper.findAll('.common-skill').length).toBe(2)
  })
})
