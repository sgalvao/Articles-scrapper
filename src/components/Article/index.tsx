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
         <section>
        <table>
          <thead>
          </thead>
          <tbody>
                <tr key={article.id}>
                  <td>
                      <a >{article.title}</a>
                  </td>
                  <td>{article.title}</td>
                  <td>{article.authors} </td>
                  <td> </td>
                  <td>
                    <button type="button">
                    </button>
                  </td>
                </tr>
          </tbody>
        </table>
      </section>
    </div>
    )
}