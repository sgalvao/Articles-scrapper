import React, {useState, useEffect} from 'react';
import { Icon } from 'semantic-ui-react';
import style from './styles.module.scss'

type Article = {
    article: {
        id:number;
        title:string;
        description:string;
        authors:string;
    }

}







export const Artigo = ({article}: Article) => {

  const [fav, setFav] = useState<string>('star outline')
  



    return(<>
      {console.log(fav)}
      <section className={style.Container} key={article.id}>
        <div className={style.boxContainer} >
          <div className={style.headerContainer}>
          <h1 className={style.title}>
             {article.title}
          </h1>
          <a className={style.starIcon} onClickCapture={() => setFav('star')}>
            <Icon name='star'  />
          </a>
          </div>
          <p>
            {article.description}
          </p>
          <div className={style.footerBoxContainer}>
            <h1 className={style.author}>
              {article.authors}
            </h1>
          </div>

        </div>
      </section>
      </>
    )
}