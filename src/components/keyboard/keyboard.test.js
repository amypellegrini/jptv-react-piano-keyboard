import test from 'tape';
import dom from 'cheerio';
import React from 'react';
import reactDOM from 'react-dom/server';

import createKeyboard from './keyboard';

const render = reactDOM.renderToString;

test('Keyboard component', nest => {
  nest.test('. rendering', assert => {
    const message = 'It should render a keyboard.';

    const Keyboard = createKeyboard(React);
    const $ = dom.load(render(<Keyboard />));
    const actual = $('svg').length > 0;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('. first key', assert => {
    const message = 'First key should have an id of "a0".';

    const Keyboard = createKeyboard(React);
    const $ = dom.load(render(<Keyboard />));
    const actual = $('svg').find('rect')[0].attribs.id;
    const expected = 'a0';

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('. second key', assert => {
    const message = 'Second key should have an id of "b0".';

    const Keyboard = createKeyboard(React);
    const $ = dom.load(render(<Keyboard />));
    const actual = $('svg').find('rect')[1].attribs.id;
    const expected = 'b0';

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('. third key', assert => {
    const message = 'Third key should have an id of "c1".';

    const Keyboard = createKeyboard(React);
    const $ = dom.load(render(<Keyboard />));
    const actual = $('svg').find('rect')[2].attribs.id;
    const expected = 'c1';

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('. 4th key', assert => {
    const message = '4th key should have an id of "d1".';

    const Keyboard = createKeyboard(React);
    const $ = dom.load(render(<Keyboard />));
    const actual = $('svg').find('rect')[3].attribs.id;
    const expected = 'd1';

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('. 5th key', assert => {
    const message = '5th key should have an id of "e1".';

    const Keyboard = createKeyboard(React);
    const $ = dom.load(render(<Keyboard />));
    const actual = $('svg').find('rect')[4].attribs.id;
    const expected = 'e1';

    assert.equal(actual, expected, message);
    assert.end();
  });
});