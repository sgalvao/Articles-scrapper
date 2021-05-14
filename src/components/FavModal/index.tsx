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
      trigger={<Button>Favoritos</Button>}
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
        <Button onClick={() => setOpen(false)} primary>
          Fechar <Icon name="close" />
        </Button>
      </Modal.Actions>
    </Modal>
    </div>
  );
};

export { ModalFavorite };
