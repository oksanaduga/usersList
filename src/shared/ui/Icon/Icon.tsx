import classNames from 'classnames'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
  inverted?: boolean
}

export const Icon = ({ Svg, className, ...otherProps }: IconProps) => {
  return <Svg className={classNames('', className)} {...otherProps} />
}
