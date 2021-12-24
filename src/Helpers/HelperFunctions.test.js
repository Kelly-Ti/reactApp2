import { multiply, makeLowerCase } from './HelperFunction';

test('multiply', () => {
  expect(multiply(2, 10)).toBe(20);
  expect(multiply(9, 10)).toBe(90);
});

test('makeLowerCase', () => {
  expect(makeLowerCase('ABCD')).toBe('abcd');
});
