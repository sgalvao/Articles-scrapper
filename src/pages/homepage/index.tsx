import React,{useState, useEffect} from 'react';
import { Artigo } from '../../components/Article';
import Header from '../../components/Header';
import {SearchComponent} from '../../components/SearchComponent';
import api from '../../services/api/api';
import style from './style.module.scss'


type DataRequest = {
    query:string;
    page:number;
  }

export default function Homepage(){


    const [search, setSearch] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1);

    const [result, setResult] = useState<string[]>([]);
    const [pagination, setPagination] = useState<any[]>([]);

    const retorno = async ({query, page}:DataRequest) => {
        if (query === "" || query === ' ') {
          return;
        }
    
        const articles = await api.get(
          `${query}?page=${page}&pageSize=10&urls=true&apiKey=0qbBn1GJ8zry7usoUmaXSjZYCpDh2tde`
        );
    
        const retorno = articles.data;
        setResult(retorno.data);
        const totalQtd = retorno.totalHits/10
    
        let links =[]
        
        if(page -1 > 0){
          links.push( page -1)
        }
        if(page +1 < Math.floor(totalQtd)){
          links.push(page +1)
        }
        setPagination(links)
       console.log(result)
      };
    

    return(
            
        <div>
            <Header/>
            <SearchComponent page={currentPage} retorno={retorno} setSearch={setSearch} search={search} />
            <div className={style.ArticleContainer}>
            { result && result.map((article:any) => (
                <Artigo key={article.id} article={article} />
                 ))}
            </div>
                {pagination.map((page, index) => (
                    <p key={index} onClick={() => {retorno({query:search, page})}}>{page}</p>
                )
                   
                )}
        </div>
        
    )
    }


