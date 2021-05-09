import React from 'react';
import style from './styles.module.scss';
import logoVector from '../../assets/img/Vectorlogovector.png'
import MenuBtn from './HeaderMenu/menuIcon';

export default function Header(){

    return(
       <div className={style.Container}>
        <header className={style.menuBar}>
            <img src={logoVector}/>
        </header>
       </div>
    )

}