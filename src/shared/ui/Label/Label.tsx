import classNames from 'classnames'
import cls from './Label.module.scss'
import { Text } from '@/shared/ui/Text'

import { Icon } from '@/shared/ui/Icon'

interface LabelProps {
  className?: string
  text?: string
  icon?: React.VFC<React.SVGProps<SVGSVGElement>>
}
export const Label = ({ className, text = '', icon }: LabelProps) => {
  return (
        <div className={classNames(cls.Label, {}, [className])}>
            {icon && <Icon Svg={icon} width={'16'} height={'16'} />}
            <Text title={text} size={'m'} />
        </div>
  )
}
