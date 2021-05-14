
import style from './paginationStyle.module.scss';
import {Icon} from 'semantic-ui-react';

type PageRequest ={
    retorno: any;
    query?:string;
    pgQtd?:number;
    currentPage:any;
    page?:number;

}



export default function PaginationComponent({retorno,currentPage,query}:PageRequest){

    if(currentPage !== 0){
        return(
            <div className={style.paginationContainer}>
          {currentPage - 1 !== 0 &&  <button  onClick={() => {retorno({query:query,page:--currentPage})}}>
                <Icon className={style.previous} size='large' name='chevron up' />
            </button>}
            <h1 className={style.currentPage}>{currentPage}</h1>
            <button   onClick={() => {retorno({query:query,page:++currentPage })}}
                >
                <Icon className={style.next} size='large' name='chevron up'/>
            </button>
        </div>
    
    
        )
    }else{
        return (
            <div></div>
        )
    }



  


}