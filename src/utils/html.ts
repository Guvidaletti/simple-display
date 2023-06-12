export function getMergedClassNames(...args: unknown[]): string {
  return args.filter((c) => Boolean(c)).join(' ');
}

export const getValueBySpacingVariable = (
  v?: number | string,
  key = '--spacing'
) => {
  if (typeof v === 'number') {
    const p = parseInt(
      window.getComputedStyle(document.documentElement).getPropertyValue(key) ??
        '8'
    );
    return `${v * p}px`;
  }

  return v;
};
