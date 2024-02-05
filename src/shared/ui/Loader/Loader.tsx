import cls from './Loader.module.scss'
import classNames from 'classnames'

interface LoaderProps {
  className?: string
}

export const Loader = ({ className }: LoaderProps) => {
  return (
        <div className={classNames(cls.wrapper, className)}>
            <div className={classNames(cls.Loader)}></div>;
        </div>
  )
}
