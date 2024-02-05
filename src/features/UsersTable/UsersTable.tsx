import classNames from 'classnames';
import cls from './UsersTable.module.scss';
import { Text, TextTheme } from '@/shared/ui/Text';
import { memo, useCallback, useMemo } from 'react';
import { TABLE_HEAD } from '@/shared/const';
import { Loader } from '../../shared/ui/Loader/Loader';
import { TextAlign } from '../../shared/ui/Text/Text';
import { type IUser } from '@/entities/User';
import { type FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { type SerializedError } from '@reduxjs/toolkit';
import ArrowDown from '@/shared/assets/arrowDown.svg?react';
import ArrowUp from '@/shared/assets/arrowUp.svg?react';
import EditIcon from '@/shared/assets/edit.svg?react';
import TrashIcon from '@/shared/assets/trash.svg?react';
import { Icon } from '@/shared/ui/Icon';
import { TableTitles } from '@/shared/types/types';
import { organizationActions } from '@/entities/Organization';
import { addQueryParams } from '@/shared/helpers';
import { useAppDispatch, useAppSelector } from '@/shared/store/hooks/hook';

interface UsersTableProps {
    className?: string;
    users?: IUser[];
    isLoading?: boolean;
    error?: FetchBaseQueryError | SerializedError | undefined;
}
export const UsersTable = memo(
    ({ className, users = [], isLoading, error }: UsersTableProps) => {
        const tokensOrder = useAppSelector(
            (state) => state.organization.tokensOrder,
        );

        const dispatch = useAppDispatch();

        const onTokenOrderHandler = useCallback(() => {
            const newTokenOrder =
                tokensOrder === 'tokens:asc' ? 'tokens:desc' : 'tokens:asc';

            addQueryParams({ orderBy: encodeURIComponent(newTokenOrder) });
            dispatch(organizationActions.setTokenOrder(newTokenOrder));
        }, [tokensOrder]);

        const tokenSvg = {
            'tokens:asc': ArrowUp,
            'tokens:desc': ArrowDown,
        };

        const token = tokenSvg[tokensOrder];

        const tableHead = useMemo(() => {
            return (
                <tr>
                    {TABLE_HEAD.map((title) => {
                        let currentTitle = (
                            <Text
                                title={title}
                                size={'xs'}
                                theme={TextTheme.SECONDARY}
                            />
                        );

                        if (title === TableTitles.TOKENS) {
                            currentTitle = (
                                <div
                                    className={cls.titleWrapper}
                                    onClick={onTokenOrderHandler}
                                >
                                    <Text
                                        title={title}
                                        size={'xs'}
                                        theme={TextTheme.SECONDARY}
                                    />
                                    {token && <Icon Svg={token} />}
                                </div>
                            );
                        }

                        return <th key={title}>{currentTitle}</th>;
                    })}
                </tr>
            );
        }, [TABLE_HEAD, token]);

        const usersList = useMemo(
            () =>
                users.map((user) => {
                    return (
                        <tr key={user.id}>
                            <td>
                                <Text title={user.email} size={'xs'} />
                            </td>
                            <td>
                                <Text title={user.name} size={'xs'} />
                            </td>
                            <td>
                                <Text title={user.role} size={'xs'} />
                            </td>
                            <td>
                                <Text title={user.subscription} size={'xs'} />
                            </td>
                            <td>
                                <Text title={user.tokens} size={'xs'} />
                            </td>
                            <td>
                                <Icon
                                    className={cls.pointer}
                                    Svg={EditIcon}
                                    width={'18'}
                                    height={'18'}
                                />
                                <Icon
                                    className={cls.pointer}
                                    Svg={TrashIcon}
                                    width={'18'}
                                    height={'18'}
                                />
                            </td>
                        </tr>
                    );
                }),
            [users],
        );

        if (isLoading) {
            return <Loader />;
        }
        if (error) {
            return (
                <div className={classNames(cls.wrapper)}>
                    <Text
                        title={'Something went wrong, reload page or try later'}
                        size={'m'}
                        theme={TextTheme.ERROR}
                        align={TextAlign.CENTER}
                    />
                </div>
            );
        }

        return (
            <div className={classNames(cls.UsersTable, className)}>
                <table>
                    <thead>{tableHead}</thead>
                    <tbody>{usersList}</tbody>
                </table>
            </div>
        );
    },
);
