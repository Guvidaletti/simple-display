import { useMemo } from 'react';

export function useMergedClassNames(...args: unknown[]): string {
  return useMemo(
    () =>
      args
        .filter(
          (c) =>
            ['string', 'number'].includes(typeof c) && String(c).trim().length
        )
        .join(' '),
    [args]
  );
}

export const getValueBySpacingVariable = (
  v?: number | string,
  key = '--spacing'
) => {
  if (typeof v === 'number') {
    const p = parseInt(
      window.getComputedStyle(document.documentElement).getPropertyValue(key) ||
        '8'
    );
    return `${v * p}px`;
  }

  return v;
};
