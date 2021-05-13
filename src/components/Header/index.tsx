import style from './styles.module.scss';
import logoVector from '../../assets/img/Vectorlogovector.png'
import ModalFavorite from '../FavModal/index'
export default function Header(){

    return(
       <div>
        <header className={style.menuBar}>
                <img src={logoVector}/>
            <h1 className={style.title}>Buscador de artigos</h1>
            <div className={style.favoriteBtn}>
                <ModalFavorite/>
            </div>
        </header>
       </div>
    )
}