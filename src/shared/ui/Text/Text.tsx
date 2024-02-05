import cls from './Text.module.scss'
import classNames from 'classnames'

export type TextSize = 'xs' | 's' | 'm' | 'l'

export enum TextTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ERROR = 'error',
}

export enum TextAlign {
  CENTER = 'alignCenter',
  LEFT = 'alignLeft',
  RIGHT = 'alignRight',
}

interface TextProps<T> {
  className?: string
  text?: T
  title?: T
  size?: TextSize
  theme?: TextTheme
  align?: TextAlign
}
export const Text = <T extends string | number>(props: TextProps<T>) => {
  const {
    text,
    title,
    className,
    size = 's',
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT
  } = props

  return (
        <div
            className={classNames(
              cls.Text,
              cls[size],
              cls[theme],
              cls[align],
              className
            )}
        >
            {title && <p className={classNames(cls.title)}>{title}</p>}
            {text && <p className={classNames(cls.text)}>{text}</p>}
        </div>
  )
}
