import { createElement, HTMLAttributes, ReactHTML } from 'react';
import { useMergedClassNames } from '../../utils/html';
import classes from './row.module.scss';

export interface RowProps<Tag extends keyof ReactHTML>
  extends HTMLAttributes<Tag> {
  tag?: Tag;
  centralized?: boolean;
}

export default function Row<Tag extends keyof ReactHTML>({
  tag,
  children,
  className,
  centralized,
  ...props
}: RowProps<Tag>) {
  const classNames = useMergedClassNames(
    className,
    classes.row,
    centralized && classes.centralized
  );

  return createElement(
    tag ?? 'div',
    {
      ...props,
      className: classNames,
    },
    children
  );
}
