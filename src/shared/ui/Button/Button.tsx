import classNames from 'classnames'
import cls from './Button.module.scss'
import { type ButtonHTMLAttributes, type ReactNode, memo } from 'react'

export enum ButtonTheme {
  CLEAR = 'clear',
  BACKGROUND = 'background',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  children?: ReactNode
  disabled?: boolean
  widht?: string
  height?: string
}
export const Button = memo(
  ({
    className,
    theme = ButtonTheme.BACKGROUND,
    children,
    disabled = false,
    ...otherProps
  }: ButtonProps) => {
    return (
            <button
                type="button"
                disabled={disabled}
                className={classNames(
                  cls.Button,
                  cls[theme],
                  { [cls.disabled]: disabled },
                  className
                )}
                {...otherProps}
            >
                {children}
            </button>
    )
  }
)
