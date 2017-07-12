import React from 'react';
import render from 'react-dom';
import createKeyboard from 'components/keyboard/keyboard';

const Keyboard = createKeyboard(React);

const App = React => props => {
  return (
    <div className="jptv-keyboard">
      <Keyboard { ...props } />
    </div>
  );
}

const props = {
  highlightKeys: [
    { note: 'c4' },
    { note: 'e4' },
    { note: 'g4' },
    { note: 'b4' }
  ]
}

render(
  document.getElementById('root'),
  <App />
);