import { useState} from "react";
import { Icon } from "semantic-ui-react";
import { SemanticICONS } from "semantic-ui-react/dist/commonjs/generic";
import style from "./styles.module.scss";

type Article = {
  article: {
    id: number;
    title: string;
    description: string;
    authors: string;
    fulltextUrls: string[];
  };
  handleClick: any;
};

export const Artigo = ({ article, handleClick }: Article) => {
  let local: any = localStorage.getItem("@favorites");
  local = JSON.parse(local);

  let starInitValue: SemanticICONS;

  if (local && local[article.id]) starInitValue = "star";
  else starInitValue = "star outline";

  const [star, setStar] = useState<SemanticICONS>(starInitValue);

  return (
    <>
      <section className={style.Container} key={article.id}>
        <div className={style.boxContainer}>
          <div className={style.headerContainer}>
            <h1 className={style.title}>{article.title}</h1>
            <div
              className={style.starIcon}
              onClick={() => handleClick(article, setStar)}
            >
              <Icon name={star} size='large' />
            </div>
          </div>
          <p>{article.description}</p>
          <div className={style.footerBoxContainer}>
            <h1 className={style.author}>{article.authors}</h1>
            <a
              href={article.fulltextUrls[0]}
              target="_blank"
              rel="noreferrer"
              className={style.urlAccess}
            >
              <Icon name="book" /> Ler artigo
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
