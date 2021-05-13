import React, {useState, useEffect} from 'react';
import { Icon } from 'semantic-ui-react';
import { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic';
import style from './styles.module.scss'

type Article = {
    article: {
        id:number;
        title:string;
        description:string;
        authors:string;
        fulltextUrls:string[];
    }

}






export const Artigo = ({article}: Article) => {

  const [fav, setFav] = useState<SemanticICONS>('star outline')
  const [addFav, setAddFav] = useState<any[]>([])


  const removeFavorite = (article:any) => {
    const favoriteList:any[] = addFav.filter(
      (addFav) => addFav.id !== article.id
      )
      setAddFav(favoriteList)
      
  }


  const addTofavorite = (article:any) => {
    const favoriteList:any[] = [...addFav, article]
      setAddFav(favoriteList)
    
    if(fav === 'star'){
      setFav('star outline')
    }else{
      setFav('star')
    }
    console.log(favoriteList)
  }


    return(<>
      <section className={style.Container} key={article.id}>
        <div className={style.boxContainer} >
          <div className={style.headerContainer}>
          <h1 className={style.title}>
             {article.title}
          </h1>
          <a className={style.starIcon} onClickCapture={() => addTofavorite(article) }>
            <Icon name={fav}  />
          </a>
          <button onClick={() => removeFavorite(article)}>remover</button>
          </div>
          <p>
            {article.description}
          </p>
          <div className={style.footerBoxContainer}>
            <h1 className={style.author}>
              {article.authors}
            </h1>
            <a>
              {article.fulltextUrls[0]}
            </a>
          </div>

        </div>
      </section>
      </>
    )
}