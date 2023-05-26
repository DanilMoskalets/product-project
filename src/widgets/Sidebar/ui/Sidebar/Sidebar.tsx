import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/ui/LangSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const { className } = props;

    const onToggle = () => {
        setCollapsed((prevState) => !prevState);
    };

    return (
        <div
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button theme={ThemeButton.CLEAR} onClick={onToggle}>Toggle</Button>
            <div className={cls.switchers}>
                <LangSwitcher />
                <ThemeSwitcher />
            </div>
        </div>
    );
};
