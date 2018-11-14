import React from 'react';
import { shallow } from 'enzyme';
import ErrorMessage from './index';

describe('<ErrorMessage/>', () => {
  let wrapper;

  const props = {
    message: 'Add list',
  };

  const defaultTextMessage = 'An error occurred. Please try again later.';

  beforeEach(() => {
    wrapper = shallow(<ErrorMessage />);
  });

  it('render ErrorMessage with default text', () => {
    expect(wrapper.find('div').props().children).toEqual(defaultTextMessage);
  });

  it('render ErrorMessage with text from props', () => {
    wrapper.setProps({ ...props });

    expect(wrapper.find('div').props().children).toEqual(props.message);
  });
});
