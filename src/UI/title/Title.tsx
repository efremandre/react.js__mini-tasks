import React from 'react';
import s from './MainTitle.module.scss'

interface TitleProps {
    children: React.ReactNode;
}

const MainTitle: React.FC<TitleProps> = ({children}) => {
    return (
        <div className={s.wrapper}>
            <h1>{children}</h1>
        </div>
    );
};

export default MainTitle;
