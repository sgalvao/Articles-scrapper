import React, { useState, useEffect } from 'react';
import {} from 'react-dom';
import {Artigo} from '../../components/Article';
import Header from '../../components/Header';
import SearchComponent from '../../components/SearchComponent';
import api from '../../services/api/api';
import style from './style.module.scss'



export default function Homepage(){

    const [result, setResult] = useState<string[]>([]);
    const [search, setSearch] = useState<string>('');
    const retorno = async (page:string) => {
     
        const articles = await api.get(`${page}?page=1&pageSize=10&apiKey=0qbBn1GJ8zry7usoUmaXSjZYCpDh2tde`);
        const retorno = articles.data.data
        setResult(retorno)

    }
    const artigos = result.map((article: any) => <Artigo key={article.id} article={article}/>)
    

    return(
            
        <div className={style.Container}>
            <Header/>
            <div className={style.Content}>
            <label className={style.title}>Buscar Artigos</label>
            </div>
            <form className={style.searchContainer}>
            <input
            type='text' placeholder="Buscar Artigos..."  onChange={text => setSearch(text.target.value) }/>
            <button type='reset' className={style.searchBtn} onClick={() => {retorno(search)}}></button>
                <button id='sendBtn' type='reset' className={style.sendBtn} >Enviar</button>
            </form>
            {artigos}
        </div>
    )
    }


