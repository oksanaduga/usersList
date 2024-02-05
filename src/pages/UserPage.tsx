import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Header } from '@/widgets/Header';
import { OrganizationCard } from '../features/OrganizationCard/OrganizationCard';
import { useAppDispatch, useAppSelector } from '@/shared/store/hooks/hook';
import { organizationActions } from '@/entities/Organization';
import { Loader } from '../shared/ui/Loader/Loader';

export const UserPage = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();
    const organizationName = useAppSelector(
        (state) => state.organization.organization,
    );

    const inited = useAppSelector((state) => state.organization._inited);

    useEffect(() => {
        dispatch(organizationActions.initState(searchParams));
    }, []);

    if (!inited) {
        return <Loader />;
    }

    return (
        <div>
            <Header organizationName={organizationName} />
            <OrganizationCard organizationName={organizationName} />
        </div>
    );
};
