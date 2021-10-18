export const classnames = (
  ...names: Array<string | null | undefined>
): string => Array.from(new Set(names.filter(Boolean))).join(' ');
