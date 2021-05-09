import React from 'react';


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

    <div>
        <li > { article.title } </li>
    </div>
    )
}