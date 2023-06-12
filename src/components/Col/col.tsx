import { createElement, HTMLAttributes, ReactHTML, useMemo } from 'react';
import {
  getMergedClassNames,
  getValueBySpacingVariable,
} from '../../utils/html';
import classes from './col.module.scss';

type size = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface ColProps<Tag extends keyof ReactHTML>
  extends HTMLAttributes<Tag> {
  tag?: Tag;
  xs?: size;
  sm?: size;
  md?: size;
  lg?: size;
  xl?: size;
  fullfill?: boolean;
  gap?: number | string;
  padding?: number | string;
}

export default function Col<Tag extends keyof ReactHTML>({
  tag,
  gap,
  style,
  className,
  children,
  padding,
  xs,
  sm,
  md,
  lg,
  xl,
  fullfill,
  ...props
}: ColProps<Tag>) {
  const calculatedGap = useMemo(
    () => getValueBySpacingVariable(gap, '--spacing'),
    [gap]
  );

  const calculatedPadding = useMemo(
    () => getValueBySpacingVariable(padding, '--spacing'),
    [padding]
  );

  return createElement(
    tag ?? 'div',
    {
      ...props,
      className: getMergedClassNames(
        className,
        classes.col,
        xs && classes[`col-xs-${xs}`],
        sm && classes[`col-sm-${sm}`],
        md && classes[`col-md-${md}`],
        lg && classes[`col-lg-${lg}`],
        xl && classes[`col-xl-${xl}`],
        fullfill && classes.fullfill
      ),
      style: {
        gap: calculatedGap,
        padding: calculatedPadding,
        ...(style ?? {}),
      },
    },
    children
  );
}
