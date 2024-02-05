import classNames from 'classnames';
import cls from './Card.module.scss';
import { Text, TextTheme } from '@/shared/ui/Text';
import Avatar from '@/shared/assets/default-avatar.svg?react';
import { Icon } from '@/shared/ui/Icon';
import { useAppSelector } from '@/shared/store/hooks/hook';

interface CardProps {
    className?: string;
}
export const Card = ({ className }: CardProps) => {
    const userRole = useAppSelector((state) => state.user.data?.role);
    return (
        <div className={classNames(cls.Card, className)}>
            <Icon Svg={Avatar} width={'32'} height={'32'} />
            <div>
                <Text
                    text={'Вы авторизованы'}
                    theme={TextTheme.SECONDARY}
                    size={'xs'}
                />
                {userRole != null && <Text title={userRole} size={'xs'} />}
            </div>
        </div>
    );
};
