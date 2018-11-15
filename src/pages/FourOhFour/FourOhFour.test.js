import React from 'react';
import { shallow } from 'enzyme';
import FourOhFour from './index';

describe('<FourOhFour/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FourOhFour />);
  });

  it('render FourOhFour page container', () => {
    expect(wrapper.find('div').hasClass('page-not-found')).toBe(true);
  });

  it('render FourOhFour text', () => {
    expect(wrapper.find('p').hasClass('page-not-found__message')).toBe(true);
  });

  it('render Link component', () => {
    expect(wrapper.find('Link').exists()).toBe(true);
    expect(wrapper.find('Link').props().to).toEqual('/');
  });
});
