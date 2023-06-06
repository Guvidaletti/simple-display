import { createElement, HTMLAttributes, ReactHTML } from 'react';
import { getMergedClassNames } from '../../utils/html';
import classes from './container.module.scss';

export interface ContainerProps<Tag extends keyof ReactHTML>
  extends HTMLAttributes<Tag> {
  fluid?: boolean;
  tag?: Tag;
  insiderProps?: HTMLAttributes<HTMLDivElement>;
}

export default function Container<Tag extends keyof ReactHTML>({
  tag,
  fluid,
  className,
  insiderProps,
  ...props
}: ContainerProps<Tag>) {
  return createElement(
    tag ?? 'div',
    {
      ...props,
      className: classes.wrapper,
    },
    <div
      {...insiderProps}
      className={getMergedClassNames(
        className,
        classes.container,
        fluid && classes.fluid,
        insiderProps?.className ?? ''
      )}
    >
      {props.children}
    </div>
  );
}
