import { HTMLAttributes } from 'react';
import style from './button.module.scss';

export default function Button(props: HTMLAttributes<HTMLButtonElement>) {
  return <button {...props} className={style.root} />;
}
