import { expect, test } from 'vitest';
import { getFormattedDate } from '../../src/utils';

test('getFormattedDate', () => {
    expect(getFormattedDate('2019-04-01')).toBe('April 1, 2019')
})