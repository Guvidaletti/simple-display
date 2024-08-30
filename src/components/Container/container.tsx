import {
  createElement,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactHTML,
  useMemo,
} from 'react';
import {
  getValueBySpacingVariable,
  useMergedClassNames,
} from '../../utils/html';
import classes from './container.module.scss';
export interface ContainerProps<Tag extends keyof ReactHTML>
  extends DetailedHTMLProps<HTMLAttributes<Tag>, Tag> {
  fluid?: boolean;
  tag?: Tag;
  insiderProps?: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > & { 'data-testid'?: string };
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

  const classNames = useMergedClassNames(
    className,
    classes.container,
    fluid && classes.fluid,
    insiderProps?.className ?? ''
  );

  return createElement(
    tag ?? 'div',
    {
      ...props,
      className: classes.wrapper,
    },
    <div
      {...insiderProps}
      className={classNames}
      style={{
        padding: calculatedPadding,
        ...(insiderProps?.style ?? {}),
      }}
    >
      {props.children}
    </div>
  );
}
