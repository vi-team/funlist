import React from 'react';
import ReactDOM from 'react-dom';
import FunList from './FunList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FunList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
