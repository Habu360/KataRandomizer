interface Props {
  actionName: string;
  buttonLabel: string;
  kataName: string;
  onButtonClick: (item: string) => void;
  styleName: string;
  title: string;
}

function ResultsPanel({
  actionName,
  buttonLabel,
  kataName,
  onButtonClick,
  styleName,
  title,
}: Props) {
  return (
    <>
      <h5>{title}</h5>
      <div className="results-container">
        <div>
          Style: <strong>{styleName}</strong>
        </div>
        <div>
          Kata: <strong>{kataName}</strong>
        </div>
        <div>
          Action: <strong>{actionName}</strong>
        </div>

        <div className="button-container">
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
