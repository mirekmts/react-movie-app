import React from 'react';
import { mount } from 'enzyme';
import { Filters, mapDispatchToProps } from './Filters';
import * as actions from '../../redux/actions';

describe('<Filters />', () => {
  let wrapper;

  const props = {
    sortBy: 'metascore',
    limit: 10,
    sortDir: -1,
  };
  const mockSetFilter = jest.fn();

  beforeEach(() => {
    wrapper = mount(<Filters {...props} setFilter={mockSetFilter} />);
  });

  it('render Filters correctly', () => {
    expect(wrapper.find('select')).toHaveLength(3);
  });

  it('Call setFilters after change something in select', () => {
    wrapper.find('select').first().props().onChange({ target: { value: 'year', name: 'sortBy' } });

    expect(mockSetFilter.mock.calls.length).toBe(1);
    expect(mockSetFilter.mock.calls[0][0]).toBe('sortBy');
    expect(mockSetFilter.mock.calls[0][1]).toBe('year');
  });

  it('render selects value from props', () => {
    wrapper.find('select').forEach((select) => {
      const selectProps = select.props();
      expect(selectProps.value).toEqual(props[selectProps.name]);
    });
  });

  it('should setFilter', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).setFilter('name', 'value');
    expect(dispatch.mock.calls[0][0]).toEqual({ type: actions.SET_FILTER, payload: { name: 'name', value: 'value' } });
  });
});
