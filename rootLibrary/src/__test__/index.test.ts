import { intializeProssMirror } from '..';

test('My Greeter', () => {
  expect(intializeProssMirror('Carl')).toBe('Hello Carl');
});
