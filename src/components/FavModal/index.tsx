import React,{useState} from 'react';
import { Button, Icon, Image, Modal } from 'semantic-ui-react';
import style from './styles.module.scss';

const ModalFavorite = () => {
  const [open, setOpen] = useState(false)

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button>Favoritos</Button>}
    >
      <Modal.Header>Artigos Favoritados</Modal.Header>
      <Modal.Content image scrolling>

        <Modal.Description>
          <div>
            <h1>Titulo</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et rerum perspiciatis voluptas quidem quis, vero praesentium minus rem repellat illo aperiam quod eos consectetur fugiat suscipit sint nesciunt. Cupiditate, incidunt?</p>
            <h2>Author</h2>
          </div>

    
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} primary>
          Fechar <Icon name='close' />
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalFavorite
