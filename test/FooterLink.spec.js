import { mount } from '@vue/test-utils'
import FooterLink from '@/components/FooterLink.vue' 
import { MEDIA_LINKS } from '@/constants-urls.js'
const link = MEDIA_LINKS.gitHub.link
const imageSrc = MEDIA_LINKS.gitHub.imageSrc

describe('FooterLink', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(FooterLink, {
      propsData: {
        imageSrc,
        link
      }
    })
    expect(wrapper).toBeTruthy()
  })
})
