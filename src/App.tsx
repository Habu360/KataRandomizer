import { useEffect, useState } from "react";
import ListGroup from "./components/ListGroup";
import KataList from "./components/KataList";
import jsonData from "./assets/karatedata.json";

function App() {
  const [selectedStyleId, setSelectedStyleId] = useState(-1);
  const [selectedKataId, setSelectedKataId] = useState(-1);
  const [styleName, setStyleName] = useState("");
  const [selectedKataName, setSelectedKataName] = useState("");
  const [selectedAction, setSelectedAction] = useState("");

  function getRandomDataForStyle(selectedStyle: string) {
    let kataArray: any[] = [];
    let kataId = -1;
    let styleId = -1;
    let selectedIndex = -1;
    let kataName = "";
    let actionName = "";
    let rndActionIndex = -1;

    if (selectedStyle == "Isshinryu") {
      kataArray = jsonData.Katas.filter((k) => k.styleid == 1).map((k) => k);
      selectedIndex = randomNumberInRange(0, kataArray.length - 1);
      kataId = kataArray[selectedIndex].id;
      rndActionIndex = randomNumberInRange(0, jsonData.Actions.length - 1);
      actionName = jsonData.Actions[rndActionIndex].name;
      styleId = 1;
    }
    if (selectedStyle == "Tokushinryu") {
      kataArray = jsonData.Katas.filter((k) => k.styleid == 2).map((k) => k);
      selectedIndex = randomNumberInRange(0, kataArray.length - 1);
      kataId = kataArray[selectedIndex].id;
      rndActionIndex = randomNumberInRange(
        0,
        jsonData.KobudoActions.length - 1
      );
      actionName = jsonData.KobudoActions[rndActionIndex].name;
      styleId = 2;
    }
    if (selectedStyle == "Ryukonkai") {
      kataArray = jsonData.Katas.filter((k) => k.styleid == 3).map((k) => k);
      selectedIndex = randomNumberInRange(0, kataArray.length - 1);
      kataId = kataArray[selectedIndex].id;
      rndActionIndex = randomNumberInRange(
        0,
        jsonData.KobudoActions.length - 1
      );
      actionName = jsonData.KobudoActions[rndActionIndex].name;
      styleId = 3;
    }
    if (selectedStyle == "Dojo") {
      kataArray = jsonData.Katas.filter((k) => k.styleid == 4).map((k) => k);
      selectedIndex = randomNumberInRange(0, kataArray.length - 1);
      kataId = kataArray[selectedIndex].id;
      actionName = "None";
      styleId = 4;
    }
    if (selectedStyle == "Other") {
      actionName = "None";
    }

    if (kataId != -1) {
      setSelectedKataId(kataId);
      let k = jsonData.Katas.filter((k) => k.id === kataId)[0];
      kataName = k.name;
    }

    if (styleId > 0) {
      setSelectedStyleId(styleId);
    }

    setSelectedKataName(kataName);
    if (kataName.length > 0) {
      setSelectedAction(actionName);
    }
  }

  function randomNumberInRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    getRandomDataForStyle(styleName);
  }, [styleName]);

  return (
    <>
      <div className="container">
        <h3>Kata Randomizer</h3>
        <div className="row">
          <div className="col-sm-4">
            <ListGroup
              items={jsonData.Styles.map((s) => s.name)}
              heading="Select a Style"
              onSelectItem={(style) => {
                setStyleName(style);
              }}
              selectedItemIndex={-1}
            />
          </div>
          <div className="col-sm-4">
            <h5>Results</h5>
            <div className="results-container">
              <div>
                Style: <strong>{styleName}</strong>
              </div>
              <div>
                Kata: <strong>{selectedKataName}</strong>
              </div>
              <div>
                Action: <strong>{selectedAction}</strong>
              </div>

              <div className="button-container">
                <button
                  className="btn btn-success"
                  onClick={() => {
                    getRandomDataForStyle(styleName);
                  }}
                >
                  Randomize Again
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <KataList
              heading={styleName + " Kata List"}
              selectedKataId={selectedKataId}
              selectedStyleId={selectedStyleId}
            ></KataList>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
