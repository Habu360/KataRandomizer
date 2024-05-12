interface Props {
  hideSpinner: boolean;
}

function SpinnerComponent({ hideSpinner }: Props) {
  return (
    <>
      <div
        className={`spinner-text-container ${
          hideSpinner ? "visually-hidden" : ""
        }`}
        role="status"
      >
        <i>Randomizing...</i>
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
