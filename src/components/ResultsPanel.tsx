import { useEffect } from "react";
import SpinnerComponent from "./SpinnerComponent";
import ".././i18n";
import { useTranslation } from "react-i18next";

interface Props {
  actionName: string;
  buttonLabel: string;
  hideSpinner: boolean;
  kataName: string;
  onButtonClick: (item: string) => void;
  styleName: string;
  title: string;
}

function ResultsPanel({
  actionName,
  buttonLabel,
  hideSpinner,
  kataName,
  onButtonClick,
  styleName,
  title,
}: Props) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, []);

  return (
    <>
      <h5>{title}</h5>
      <div className="results-container">
        <div className="d-flex bd-highlight">
          <div className="p-2">{t("styleLabel")}:</div>
          <div className="p-2 flex-grow-1">
            <strong>{styleName}</strong>
          </div>
        </div>
        <div className="d-flex bd-highlight">
          <div className="p-2">{t("kataLabel")}:</div>
          <div className="p-2 flex-grow-1">
            <strong>{kataName}</strong>
          </div>
        </div>
        <div className="d-flex bd-highlight">
          <div className="p-2">{t("actionLabel")}:</div>
          <div className="p-2 flex-grow-1">
            <strong>{actionName}</strong>
          </div>
        </div>

        <div className="results-button-container">
          <SpinnerComponent hideSpinner={hideSpinner} />
          <button
            className="btn btn-success"
            onClick={() => {
              onButtonClick(styleName);
            }}
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </>
  );
}

export default ResultsPanel;
