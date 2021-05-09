import api from '../../services/api/api'

type Search = {
    query: string;
    page: number;
    apiKey:string;
} 
//0qbBn1GJ8zry7usoUmaXSjZYCpDh2tde

export default async function search({query, page, apiKey}: Search) {

        const articles = await api.get(`${query}?page=${page}&pageSize=10&apiKey=${apiKey}`);
        const retorno = articles.data.data

        retorno.map((article: any) => {
            return  article['id'];
        });
        
    
}