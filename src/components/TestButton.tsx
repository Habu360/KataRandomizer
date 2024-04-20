import { useState } from "react";

function TestButton() {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggleOpen = () => setIsOpen(!isOpen);

  //const [selectedIndex, setSelectedIndex] = useState(-1);
  const [sectionVisible, setSectionVisibility] = useState(false);
  //var [toggle, setToggle] = useState(false);

  //   useEffect(() => {
  //     var myCollapse = document.getElementById("collapseTarget");
  //     var bsCollapse = new Collapse(myCollapse, { toggle: false });
  //     toggle ? bsCollapse.show() : bsCollapse.hide();
  //   });
  return (
    <>
      <div>
        <button
          className="btn btn-primary"
          onClick={() =>
            setSectionVisibility((sectionVisible) => !sectionVisible)
          }
        >
          Test Button Toggle collapse
        </button>
        <div
          className={sectionVisible === true ? "collapse.show" : "collapse"}
          id="collapseTarget"
        >
          This is the toggle-able content!
        </div>
      </div>
    </>
  );
}

export default TestButton;
