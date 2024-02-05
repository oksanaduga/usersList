import classNames from 'classnames';
import cls from './Header.module.scss';
import { Text } from '@/shared/ui/Text';

import OrganizationLabel from '@/shared/assets/organization.svg';
import { Card } from '@/widgets/Card';
import { Label } from '../../shared/ui/Label';

interface headerProps {
    className?: string;
    organizationName?: string;
}
export const Header = ({ className, organizationName }: headerProps) => {
    return (
        <div className={classNames(cls.Header, className)}>
            <div className={classNames(cls.organizationWrapper)}>
                <Text title={'BigTest'} size={'m'} />
                <Label text={organizationName} icon={OrganizationLabel} />
            </div>
            <Card />
        </div>
    );
};
