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
    assert.plan(2);

    const idMessage = 'First key should have an id of "a0".';
    const colorMessage = 'First key should be white.';

    const Keyboard = createKeyboard(React);
    const $ = dom.load(render(<Keyboard />));
    const key = $('svg').find('rect')[0];

    const isWhite = key.attribs.style.match('fill:white').length > 0;
    const id = key.attribs.id;
    const expectedId = 'a0';
    const expectedColor = true;

    assert.equal(id, expectedId, idMessage);
    assert.equal(isWhite, expectedColor, colorMessage);
    assert.end();
  });

  nest.test('. second key', assert => {
    assert.plan(2);

    const idMessage = 'Second key should have an id of "b0".';
    const colorMessage = 'Second key should be white.';

    const Keyboard = createKeyboard(React);
    const $ = dom.load(render(<Keyboard />));

    const id = $('svg').find('rect')[1].attribs.id;
    const expectedId = 'b0';

    const isWhite = $('svg')
      .find('rect')[1]
      .attribs.style
      .match('fill:white').length > 0;
    const expectedColor = true;

    assert.equal(id, expectedId, idMessage);
    assert.equal(isWhite, expectedColor, colorMessage);
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