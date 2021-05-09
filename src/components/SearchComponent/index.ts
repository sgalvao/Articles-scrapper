import api from '../../services/api/api'

type Search = {
    query: string;
    page: number;
    apiKey:string;
} 
//

export default async function Search({query, page}: Search) {

        const articles = await api.get(`${query}?page=${page}&pageSize=10&apiKey=0qbBn1GJ8zry7usoUmaXSjZYCpDh2tde`);
        const response = articles.data.data

        return response;

}