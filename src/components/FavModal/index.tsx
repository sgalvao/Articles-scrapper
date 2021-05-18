import { useState } from "react";
import { Button, Icon, Modal } from "semantic-ui-react";
import style from "./styles.module.scss";
import { Artigo } from "../Article";

const ModalFavorite = ({ favoritesArticles, handleClick }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={style.Modal}>
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<button className={style.favBtn}>Favoritos</button>}
    >
      <Modal.Header>Artigos Favoritados</Modal.Header>
      <Modal.Content image scrolling>
        <Modal.Description>
          <div className={style.boxModal}>
            {favoritesArticles !== null &&
              Object.values(favoritesArticles).map((article: any) => (
                <Artigo
                  key={article.id}
                  article={article}
                  handleClick={handleClick}
                />
              ))}
          </div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <button className={style.closeBtn} onClick={() => setOpen(false)} >
          Fechar <Icon name="close" />
        </button>
      </Modal.Actions>
    </Modal>
    </div>
  );
};

export { ModalFavorite };
