import { useEffect } from "react";
import jsonData from "../assets/karatedata.json";
import IQuote from "../interfaces/IQuote";
import ".././i18n";
import { useTranslation } from "react-i18next";

function QuotesList() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, []);

  function getQuotes() {
    let quoteArray: IQuote[] = [];
    quoteArray = jsonData.Quotes;
    return quoteArray !== undefined ? quoteArray : [];
  }

  return (
    <>
      <h5>{t("quotes")}</h5>
      <div className="list-group-container">
        <ul className="list-group">
          {getQuotes().map((item) => (
            <li className={"list-group-item quote"} key={item.id}>
              {item.quote} <br />
              <span className="quote-author">-- {item.author}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default QuotesList;
