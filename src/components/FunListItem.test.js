import React from 'react';
import ReactDOM from 'react-dom';
import FunListItem from './FunListItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FunListItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
