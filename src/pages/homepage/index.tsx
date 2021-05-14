import { useState } from "react";
import { Artigo } from "../../components/Article";
import { Header } from "../../components/Header";
import { SearchComponent } from "../../components/SearchComponent";
import PaginationComponent from "../../components/paginationComponent/index";
import api from "../../services/api/api";
import style from "./style.module.scss";
import { ModalFavorite } from "../../components/FavModal";
import { useFavorite } from "../../hook/useFavorite";
import Loader  from '../../components/Loader'

type DataRequest = {
  query: string;
  page: any;
};

export default function Homepage() {
  const [search, setSearch] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [result, setResult] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  let localFavorites: any = localStorage.getItem("@favorites");
  const [{ favoritesArticles }, handleClick] = useFavorite(
    JSON.parse(localFavorites)
  );

  const retorno = async ({ query, page }: DataRequest) => {
    if (query === "" || query === " ") {
      return;
    }

    setLoading(true);

    const articles = await api.get(
      `${query}?page=${page}&pageSize=10&urls=true&apiKey=0qbBn1GJ8zry7usoUmaXSjZYCpDh2tde`
    );

    const retorno = articles.data;
    setResult(retorno.data);
    setCurrentPage(page);
    
    setLoading(false);
  };

  return (
    <>
      <div>
        <Header />
        <SearchComponent
          page={currentPage}
          retorno={retorno}
          setSearch={setSearch}
          search={search}
        />
        <div className={style.boxContainer}>
          {favoritesArticles && (
            <ModalFavorite
              key="3423452345"
              favoritesArticles={favoritesArticles}
              handleClick={handleClick}
            />
          )}
        </div>
        <div className={style.ArticleContainer}>
          <Articles loading={loading} articles={result} handleClick={handleClick} />
        </div>
        <PaginationComponent
          retorno={retorno}
          query={search}
          currentPage={currentPage}
        />
      </div>
    </>
  );
}

interface IArticles {
  loading: boolean;

  articles: any;

  handleClick: any;
}

const Articles = ({loading, articles, handleClick}: IArticles) => {

  if(loading === true){

    return (
      <div className={style.loader}>
        <Loader />
      </div>
        
    )

  }else
  {
    return (
      <>{
      articles && articles.map(
        (article: any) => (
            <Artigo
            key={article.id}
            article={article}
            handleClick={handleClick}
          />
        ))
      }</>
    )
  }


}