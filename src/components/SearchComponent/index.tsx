import React from "react";
import { Button, Icon } from "semantic-ui-react";
import style from "./style.module.scss";

export const SearchComponent: React.FC<any> = ({
  retorno,
  setSearch,
  search,
}: any) => {
  return (
    <>
      <div className={style.Content}>
        <label className={style.title}>Buscar Artigos</label>
      </div>
      <div className={style.searchContainer}>
        <input
          value={search}
          placeholder="Buscar Artigos..."
          onChange={(text) => setSearch(text.target.value)}
        />
        <Button
          className={style.searchBtn}
          onClick={() => {
            retorno({ query: search, page: 1 });
          }}
          animated
        >
          <Button.Content className={style.textSearchBtn} visible>
            Buscar
          </Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      </div>
    </>
  );
};
