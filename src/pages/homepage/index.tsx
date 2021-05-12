import React,{useState, useEffect} from 'react';
import { Artigo } from '../../components/Article';
import Header from '../../components/Header';
import {SearchComponent} from '../../components/SearchComponent';
import style from './style.module.scss'



export default function Homepage(){
    
  
    const [result, setResult] = useState<string[]>([]);


    return(
            
        <div>
            <Header/>
            <SearchComponent setResult={setResult}/>
            <div className={style.ArticleContainer}>
            { result && result.map((article:any) => (
                <Artigo key={article.id} article={article} />
                 ))}
            </div>
        </div>
    )
    }


