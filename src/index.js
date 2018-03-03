import './css/demo.css';
import React from 'react';
import ReactDOM from 'react-dom';
import createKeyboardViewer from './components/keyboard/keyboard';

const KeyboardViewer = createKeyboardViewer(React);

ReactDOM.render(
  <KeyboardViewer />,
  document.getElementById('root')
);
