import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from '../../src/components/footer/Footer'


describe('<Footer />', () => {
  test('renders the component', () => {
    const component = shallow(<Footer />)

    expect(toJson(component)).toMatchSnapshot()
  })
})