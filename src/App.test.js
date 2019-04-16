import React from 'react';
import renderer from 'react-test-renderer'; // 1: install this npm module as a dev dependency can be named anything

import App from './App';

describe('<App />', () => {
  // 2. write this test
  it('matches snapshot', () => {  // it.skip or it.only also works xit can replace skip
    const tree = renderer.create(<App />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });

  // mock test

  it('is mocking me', () => {
    const mock = jest.fn();

    const result = mock();
  
    expect(result).toBeUndefined();
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
  })

  it('is mocking me even more', () => {
    const mock = jest.fn(() => 'hello'); // returns hello

    const result = mock('smile');

    expect(result).toBe('hello');
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith('smile');
  })
});
