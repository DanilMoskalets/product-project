import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import {FC} from "react";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import IconButtonDark from 'shared/assets/icons/theme-dark.svg'
import IconButtonLight from 'shared/assets/icons/theme-light.svg'
import {Button, ThemeButton} from "shared/ui/Button/Button";


interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const {className} = props
    const {theme, toggleTheme} = useTheme()

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
        >
            {theme === Theme.LIGHT ? <IconButtonLight/> : <IconButtonDark/>}
        </Button>
    );
};

