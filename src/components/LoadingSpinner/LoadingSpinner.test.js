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

  it('render LoadingSpinner correctly', () => {
    expect(wrapper.find('div').hasClass('lds-dual-ring')).toEqual(true);
  });
});
