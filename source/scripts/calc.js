// @flow
import 'babel-polyfill';

export function sum (num1: number, num2: number): number {
  return num1 + num2;
}

export async function asyncSum (num1: number, num2: number): Promise<number> {
  await wait({ waitMSec: 1000 });
  return num1 + num2;
}

function wait ({ waitMSec }: { waitMSec: number }) {
  return new Promise(resolve => setTimeout(() => resolve(`wait finished. ${waitMSec}`), waitMSec));
}
