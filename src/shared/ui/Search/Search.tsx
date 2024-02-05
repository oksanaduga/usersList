import classNames from 'classnames';
import cls from './Search.module.scss';
import { Icon } from '@/shared/ui/Icon';
import SearchIcon from '@/shared/assets/search.svg?react';

interface SearchProps {
    className?: string;
    onChange: (value: any) => void;
    placeholder?: string;
}
export const Search = ({
    className,
    onChange,
    placeholder = 'Поиск',
}: SearchProps) => {
    return (
        <div className={classNames(cls.Search, className)}>
            <div className={classNames(cls.inputWrapper)}>
                <input
                    className={classNames(cls.input)}
                    type="text"
                    placeholder={placeholder}
                    onChange={onChange}
                />
                <Icon
                    Svg={SearchIcon}
                    className={classNames(cls.inputSvg)}
                    width={'16'}
                    height={'16'}
                />
            </div>
        </div>
    );
};
