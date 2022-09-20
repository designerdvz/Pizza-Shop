import React from 'react';
import s from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
    return (
        <div className={s.root}>
            <span className={s.smile}> 🙁 </span>
            <h1>Ничего не найдено </h1>
            <p>К сожалению, данная страница отсутствует в нашем интренет-магазине</p>
        </div>
    );
};

export default NotFoundBlock;