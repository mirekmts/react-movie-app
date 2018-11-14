import React from 'react';
import { shallow } from 'enzyme';
import Table from './index';
import { rows, columns } from '../../data/fixtures';

describe('<Table/>', () => {
  let wrapper;

  const props = {
    rows,
    columns,
  };

  beforeEach(() => {
    wrapper = shallow(<Table {...props} />);
  });

  it('render Table correctly', () => {
    expect(wrapper.find('table').exists()).toBe(true);
  });

  it('render Table header correctly', () => {
    expect(wrapper.find('table thead th')).toHaveLength(Object.keys(columns).length);
  });

  it('render one Table header', () => {
    expect(wrapper.find('table thead tr')).toHaveLength(1);
  });

  it('render the right amount of rows', () => {
    expect(wrapper.find('table tbody tr')).toHaveLength(rows.length);
  });

  it('render Table row correctly', () => {
    expect(wrapper.find('table tbody td')).toHaveLength(Object.keys(columns).length * rows.length);
  });

  it('render Link in Table', () => {
    wrapper.setProps({ linkCell: 'title' });
    expect(wrapper.find('Link').exists()).toBe(true);
  });
});
