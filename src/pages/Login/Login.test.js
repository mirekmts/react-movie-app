import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('<Login/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it('should render Login page container', () => {
    expect(wrapper.find('div').first().hasClass('center')).toBe(true);
  });

  it('should render Login page header', () => {
    expect(wrapper.find('h1').text()).toEqual('Login');
  });

  it('should render button', () => {
    expect(wrapper.find('button').text()).toEqual('Submit');
    expect(wrapper.find('button').hasClass('form-submit')).toBe(true);
    expect(wrapper.find('button').props().type).toEqual('submit');
  });

  it('should render form', () => {
    expect(wrapper.find('form').exists()).toBe(true);
  });

  it('should render two inputs', () => {
    expect(wrapper.find('input')).toHaveLength(2);
  });

  it('should change input value', () => {
    const username = 'login';
    const password = 'password';
    wrapper.find('input[name="username"]').simulate('change', { target: { value: username, name: 'username' } });
    wrapper.find('input[name="password"]').simulate('change', { target: { value: password, name: 'password' } });

    expect(wrapper.state().username).toEqual(username);
    expect(wrapper.state().password).toEqual(password);
  });
});
