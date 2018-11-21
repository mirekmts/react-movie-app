import React from 'react';
import { shallow } from 'enzyme';
import { Login } from './Login';

describe('<Login/>', () => {
  let wrapper;

  const username = 'login';
  const password = 'password';

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
    wrapper.find('input[name="username"]').simulate('change', { target: { value: username, name: 'username' } });
    wrapper.find('input[name="password"]').simulate('change', { target: { value: password, name: 'password' } });

    expect(wrapper.state().username).toEqual(username);
    expect(wrapper.state().password).toEqual(password);
  });

  it('should submit form properly', () => {
    const mockUserLogin = jest.fn(() => Promise.resolve('rozwiazanie'));
    const historyMock = { replace: jest.fn() };

    const wrapperWithMock = shallow(<Login loginUser={mockUserLogin} history={historyMock} />);
    wrapperWithMock.setState({ username, password });
    wrapperWithMock.find('form').simulate('submit', { preventDefault() {} });

    expect(mockUserLogin).toHaveBeenCalled();
    expect(mockUserLogin).toHaveBeenCalledWith(username, password);
  });
});
