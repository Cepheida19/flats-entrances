import { FC, ReactNode } from 'react'
import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'
import styles from './button.module.scss'

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
    variant?: 'small' | 'standart' | 'list'
    isActive?: boolean
    className?: string
    children?: React.ReactNode | ReactNode
}

export const Button: FC<ButtonProps> = ({
  variant = 'standart',
  className,
  isActive,
  children,
  ...props
}) => {
  const buttonClasses = clsx(
    styles['button'],
    styles[`button_${variant}`],
    isActive ? styles[`button_${variant}_active`] : null,
    className,
  )

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  )
}