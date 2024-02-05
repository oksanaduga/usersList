import { Popover as BasicPopover } from '@headlessui/react';
import classNames from 'classnames';
import cls from './Popover.module.scss';

export const Popover = () => {
    return (
        <BasicPopover className={classNames(cls.Popover)}>
            <BasicPopover.Button>Solutions</BasicPopover.Button>

            <BasicPopover.Panel className={classNames(cls.panel)}>
                <div className="grid grid-cols-2">
                    <a href="/analytics">Analytics</a>
                    <a href="/engagement">Engagement</a>
                    <a href="/security">Security</a>
                    <a href="/integrations">Integrations</a>
                </div>

                <img src="/solutions.jpg" alt="" />
            </BasicPopover.Panel>
        </BasicPopover>
    );
};
