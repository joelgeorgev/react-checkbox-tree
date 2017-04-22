import React from 'react';
import ReactDOM from 'react-dom';
import CheckboxTree from './CheckboxTree';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CheckboxTree />, div);
});