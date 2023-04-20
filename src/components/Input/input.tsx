import { HTMLAttributes } from 'react';

export default function Input(props: HTMLAttributes<HTMLInputElement>) {
  return <input defaultValue='teste' {...props} />;
}
