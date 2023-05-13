import './index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./page/AboutPage/AboutPage.async";
import {MainPageAsync} from "./page/MainPage/MainPage.async";
import {Suspense, useContext, useState} from 'react';
import './styles/index.scss'
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";

export const App = () => {
        const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>THEME</button>
            <Link to={'/about'}>О Сайте </Link>
            <Link to={'/'}>Главная</Link>
            <Suspense fallback={'LOADING'} >
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense >

        </div>
    );
}