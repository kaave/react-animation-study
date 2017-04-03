import test from 'ava';
import 'babel-polyfill';

import * as calc from './calc';

test('sum', t => {
  t.is(calc.sum(1, 2), 3);
  t.is(calc.sum(2, -2), 0);
});

test('asyncSum', async t => {
  t.is(await calc.asyncSum(3, 4), 7);
  t.is(await calc.asyncSum(-5, 4), -1);
});

