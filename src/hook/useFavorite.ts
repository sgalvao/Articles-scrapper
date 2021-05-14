
import { useState } from 'react'

const useFavorite = (Articles: any): any => {

    const [favoritesArticles, setFavoritesArticles] = useState<any>(Articles)

    const updateStorage = () => {

        localStorage.removeItem('@favorites')
        
        let NewLocalStorage = JSON.stringify(favoritesArticles)
        
        localStorage.setItem('@favorites', NewLocalStorage)

    }

    const handleClick = (article: any, callback: any) => {

        let articleId: string = article.id;
        //se o artigo existe, removemos da lista
        if(favoritesArticles && favoritesArticles[articleId])
        {
            let auxiliar = favoritesArticles;

            delete auxiliar[articleId];

            setFavoritesArticles(auxiliar);


            callback("star outline")

            updateStorage();


        }else
        {
            let auxiliar = favoritesArticles ? favoritesArticles : {};

            auxiliar[articleId] = article;

            setFavoritesArticles(auxiliar);

            callback("star")

            updateStorage();

        }

    }




    return [{favoritesArticles}, handleClick];
}

export {useFavorite}