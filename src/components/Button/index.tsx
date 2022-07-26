import { ButtonComponent } from './styles';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  bgColor: string;
}

export function Button({ title, bgColor }: ButtonProps) {
  return <ButtonComponent bgColor={bgColor}>{title}</ButtonComponent>;
}
