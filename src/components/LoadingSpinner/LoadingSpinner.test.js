import React from 'react';
import { shallow } from 'enzyme';
import LoadingSpinner from './index';

describe('<LoadingSpinner/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LoadingSpinner />);
  });

  it('render LoadingSpinner correctly', () => {
    expect(wrapper.find('div').props().children).toEqual();
  });

  it('render LoadingSpinner with correctly class', () => {
    expect(wrapper.find('div').hasClass('lds-dual-ring')).toEqual(true);
  });

  it('render LoadingSpinner with class black', () => {
    wrapper.setProps({ black: true });
    expect(wrapper.find('div').hasClass('lds-dual-ring black')).toEqual(true);
  });
});
