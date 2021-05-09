import React, { useState, useEffect } from 'react';
import {} from 'react-dom';
import {Artigo} from '../../components/Article';
import Header from '../../components/Header';
import api from '../../services/api/api';


export default function Homepage(){

    const [result, setResult] = useState<any[]>([]);
 
    const retorno = async () => {
     
        const articles = await api.get(`banana?page=1&pageSize=10&apiKey=0qbBn1GJ8zry7usoUmaXSjZYCpDh2tde`);
        const retorno = articles.data.data
        setResult(retorno)

    }
   const artigos = result.map((article: any) => <Artigo key={article.id} article={article}/>)
    

    return(
        <div>
            <Header/>
        </div>
    )
    }

