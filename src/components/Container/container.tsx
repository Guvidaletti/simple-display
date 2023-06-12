import { createElement, HTMLAttributes, ReactHTML, useMemo } from 'react';
import {
  getMergedClassNames,
  getValueBySpacingVariable,
} from '../../utils/html';
import classes from './container.module.scss';

export interface ContainerProps<Tag extends keyof ReactHTML>
  extends HTMLAttributes<Tag> {
  fluid?: boolean;
  tag?: Tag;
  insiderProps?: HTMLAttributes<HTMLDivElement>;
  padding?: number | string;
}

export default function Container<Tag extends keyof ReactHTML>({
  tag,
  fluid,
  className,
  insiderProps,
  padding,
  ...props
}: ContainerProps<Tag>) {
  const calculatedPadding = useMemo(
    () => getValueBySpacingVariable(padding, '--container-spacing'),
    [padding]
  );

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
      style={{
        padding: calculatedPadding,
        ...(insiderProps?.style ?? {}),
      }}
    >
      {props.children}
    </div>
  );
}
