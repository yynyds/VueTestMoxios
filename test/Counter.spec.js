import { shallowMount } from '@vue/test-utils'
import Counter from '../src/Counter'

describe('Counter.vue', () => {
  it('увеличивает счётчик по нажатию кнопки', () => {
    const wrapper = shallowMount(Counter)
    wrapper.find('button').trigger('click')
    expect(wrapper.find('div').text()).toMatch('1')
  })
})