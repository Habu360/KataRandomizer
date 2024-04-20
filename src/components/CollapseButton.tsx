import { useState } from "react";

// interface Props {
//   text: string;
//   color?:
//     | "primary"
//     | "secondary"
//     | "success"
//     | "danger"
//     | "warning"
//     | "info"
//     | "light"
//     | "dark";
//   onClick: () => void;
// }
function CollapseButton() {
  const [sectionVisible, setSectionVisibility] = useState(false);

  return (
    <>
      <p className="d-inline-flex gap-1">
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
          onClick={() =>
            setSectionVisibility((sectionVisible) => !sectionVisible)
          }
        >
          Collapse Button
        </button>
      </p>
      <div
        className={sectionVisible === true ? "collapse.show" : "collapse"}
        id="collapseExample"
      >
        <div className="card card-body">
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
        </div>
      </div>
    </>
  );
}

export default CollapseButton;
