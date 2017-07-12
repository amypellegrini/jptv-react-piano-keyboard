import test from 'tape';
import dom from 'cheerio';
import React from 'react';
import render from 'react-dom/server';

import createKeyboard from './keyboard';

test('Keyboard component', nest => {
  nest.test('rendering', assert => {
    const message = 'It should render a keyboard image.';

    const actual = 0;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });
});