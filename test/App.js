import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import MockProviders from './helpers/MockProviders';
import App from '../src/components/App';

describe('App', () => {
  const appComponent = <MockProviders><App /></MockProviders>;
  let appMount;

  const button = label =>
    appMount.find('button').findWhere(node => node.is('button') && node.text() === label);

  it('should mount', () => {
    appMount = mount(appComponent);
  });
  it('should render', () => {
    appMount.render();
  });
  it('has title "To do"', () => {
    expect(appMount.text()).to.contain('To do');
  });
  it('should add a to do item', () => {
    // TODO: write an `input` method that searches by label, like `button`
    const input = appMount.find('#add-todo');
    const addTodo = button('Add Todo');
    input.simulate('focus');
    input.simulate('change', { target: { value: 'test-todo-item' } });
    input.simulate('blur');
    addTodo.simulate('click');
    expect(appMount.text()).to.contain('test-todo-item');
  });
  it('should filter on visibility', () => {
    const completed = button('Completed');
    const active = button('Active');
    expect(appMount.text()).to.contain('test-todo-item');
    completed.simulate('click');
    expect(appMount.text()).to.not.contain('test-todo-item');
    active.simulate('click');
    expect(appMount.text()).to.contain('test-todo-item');
  });
});
