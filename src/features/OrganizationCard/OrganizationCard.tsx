import classNames from 'classnames';
import cls from './OrganizationCard.module.scss';
import { Text } from '@/shared/ui/Text';

import { UsersTable } from '@/features/UsersTable/UsersTable';
import { Search } from '@/shared/ui/Search';
import { BasicPagination } from '@/widgets/BasicPagination';
import { useGetUsers } from '@/entities/Users';
import { useAppSelector } from '@/shared/store/hooks/hook';
import { useState } from 'react';
import { Popover } from '@/shared/ui/Popover';

interface OrganizationCardProps {
    className?: string;
    organizationName?: string;
}
export const OrganizationCard = ({
    className,
    organizationName,
}: OrganizationCardProps) => {
    const page = useAppSelector((state) => state.organization.currentPage);
    const tokensOrder = useAppSelector(
        (state) => state.organization.tokensOrder,
    );
    const { data, isLoading, error } = useGetUsers({ page, tokensOrder });
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = data?.users.filter((item) =>
        Object.values(item).some(
            (value) =>
                typeof value === 'string' &&
                value.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
    );

    return (
        <div className={classNames(cls.OrganizationCard, className)}>
            {organizationName && (
                <Text
                    title={organizationName}
                    className={classNames(cls.organizationName)}
                    size={'m'}
                />
            )}
            <hr className={cls.line} />
            <Text
                title={'Пользователи'}
                className={classNames(cls.title)}
                size={'m'}
            />
            <Search onChange={handleSearch} />
            <UsersTable
                users={filteredData}
                isLoading={isLoading}
                error={error}
            />
            <BasicPagination
                className={classNames(cls.pagination)}
                pages={data?.pages}
            />
        </div>
    );
};
