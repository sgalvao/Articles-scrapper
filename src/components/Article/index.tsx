import React from 'react';
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
    return(
      
      <section className={style.Container} key={article.id}>
        <div className={style.boxContainer} >
          <h1 className={style.title}>
             {article.title}
          </h1>
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
    )
}