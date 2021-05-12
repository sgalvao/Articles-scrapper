import React, { useState } from "react";
import { Button, Icon} from "semantic-ui-react";
import api from "../../services/api/api";
import { Artigo } from "../Article";
import style from "./style.module.scss";

export const SearchComponent: React.FC<any> = ({ setResult }: any) => {




  
  const [search, setSearch] = useState<string>("");

  const retorno = async (query: string) => {
    if (query === "") {
      return;
    }

    const articles = await api.get(
      `${query}?page=1&pageSize=10&apiKey=0qbBn1GJ8zry7usoUmaXSjZYCpDh2tde`
    );

    const retorno = articles.data.data;
    setResult(retorno);
  };

  return (
    <>
      <div className={style.Content}>
        <label className={style.title}>Buscar Artigos</label>
      </div>
      <form className={style.searchContainer}>
        <input
          placeholder="Buscar Artigos..."
          onChange={(text) => setSearch(text.target.value)}
        />
        <Button 
          type="reset"
          className={style.searchBtn}
          onClick={() => {
            retorno(search);
          }} 
          animated>
          <Button.Content className={style.textSearchBtn} visible>
            Buscar
          </Button.Content>
          <Button.Content hidden>
            <Icon name='arrow right' />
          </Button.Content>
        </Button>

      </form>
    </>
  );
};
