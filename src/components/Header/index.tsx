import style from "./styles.module.scss";
import logoVector from "../../assets/img/Vectorlogovector.png";

const Header = () => {
  return (
    <div>
      <header className={style.menuBar}>
        <img src={logoVector} alt="Logo"/>
        <h1 className={style.title}>Buscador de artigos</h1>
      </header>
    </div>
  );
};

export { Header };
