import './css/demo.css';
import React from 'react';
import ReactDOM from 'react-dom';
import createKeyboard from './components/keyboard/keyboard';

const Keyboard = createKeyboard(React);

ReactDOM.render(
  <Keyboard />,
  document.getElementById('root')
);
