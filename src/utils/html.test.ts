import { renderHook } from '@testing-library/react';
import { getValueBySpacingVariable, useMergedClassNames } from './html';

describe('useMergedClassNames', () => {
  it('should work normally', () => {
    const classes = ['class1', '', undefined, 2, 'class3'];

    const { result } = renderHook(() => useMergedClassNames(...classes));
    expect(result.current).toBe('class1 2 class3');
  });
});

describe('getValueBySpacingVariable', () => {
  beforeAll(() => {});

  it('should work normally', () => {
    let result = getValueBySpacingVariable('teste');
    expect(result).toBe('teste');
    document.documentElement.style.removeProperty('--spacing');
    result = getValueBySpacingVariable(7);
    expect(result).toBe('56px');
    document.documentElement.style.setProperty('--spacing', '8px');
    result = getValueBySpacingVariable(8);
    expect(result).toBe('64px');
  });
});
