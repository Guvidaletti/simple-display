export function getMergedClassNames(...args: unknown[]): string {
  return args.filter((c) => Boolean(c)).join(' ');
}
