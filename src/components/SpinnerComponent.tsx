import { useEffect, useState } from "react";
import jsonData from "../assets/karatedata.json";
interface Props {
  hideSpinner: boolean;
}

function SpinnerComponent({ hideSpinner }: Props) {
  const [selectedQuoteId, setSelectedQuoteId] = useState(1);

  useEffect(() => {
    let random = randomNumberInRange(1, jsonData.Quotes.length);
    setSelectedQuoteId(random);
  });

  function getRandomQuote() {
    return jsonData.Quotes.filter((q) => q.id == selectedQuoteId);
  }
  function randomNumberInRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <>
      <div
        className={`spinner-text-container ${
          hideSpinner ? "visually-hidden" : ""
        }`}
        role="status"
      >
        {getRandomQuote().map((q) => (
          <div key={q.id}>
            <p>
              <i>{q.quote}</i>
              <br /> --{q.author}
            </p>
            <i>Randomizing...</i>
          </div>
        ))}
      </div>
      <div
        className={`spinner-wrapper d-flex justify-content-center ${
          hideSpinner ? "visually-hidden" : ""
        } `}
      >
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Randomizing...</span>
        </div>
      </div>
    </>
  );
}

export default SpinnerComponent;
