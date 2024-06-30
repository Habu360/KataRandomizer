import { useEffect, useState } from "react";
import ListGroup from "./components/ListGroup";
import KataList from "./components/KataList";
import jsonData from "./assets/karatedata.json";
import PageHeader from "./components/PageHeader";
import ResultsPanel from "./components/ResultsPanel";
import IKata from "./interfaces/IKata";

function App() {
  const [selectedStyleId, setSelectedStyleId] = useState(-1);
  const [selectedKataId, setSelectedKataId] = useState(-1);
  const [styleName, setStyleName] = useState("");
  const [categoryName, setCategoryName] = useState("all");
  const [selectedKataName, setSelectedKataName] = useState("");
  const [selectedAction, setSelectedAction] = useState("");
  const [hideSpinner, setHideSpinner] = useState(true);

  function getKataData(styleId: number, categoryName: string) {
    let kataArray: IKata[] = [];

    if (categoryName === "all") {
      kataArray = jsonData.Katas.filter((k) => k.styleid == styleId).map(
        (k) => k
      );
    } else {
      kataArray = jsonData.Katas.filter(
        (k) => k.styleid == styleId && k.category == categoryName
      ).map((k) => k);
    }
    return kataArray !== undefined ? kataArray : [];
  }

  function getRandomDataForStyle(selectedStyle: string, categoryName: string) {
    let kataArray: IKata[] = [];
    let kataId = -1;
    let styleId = -1;
    let selectedIndex = -1;
    let kataName = "";
    let actionName = "";
    let rndActionIndex = -1;

    if (categoryName === undefined) {
      categoryName = "all";
    }
    if (selectedStyle == "Isshinryu") {
      kataArray = getKataData(1, categoryName);
      selectedIndex = randomNumberInRange(0, kataArray.length - 1);
      kataId = kataArray[selectedIndex].id;
      rndActionIndex = randomNumberInRange(0, jsonData.Actions.length - 1);
      actionName = jsonData.Actions[rndActionIndex].name;
      styleId = 1;
    }
    if (selectedStyle == "Tokushinryu") {
      kataArray = getKataData(2, categoryName);
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
      kataArray = getKataData(3, categoryName);
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
      kataArray = getKataData(4, categoryName);
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

  function displayData() {
    if (styleName !== "") {
      setHideSpinner(false);
      setTimeout(() => {
        setHideSpinner(true);
        getRandomDataForStyle(styleName, categoryName);
      }, 1500);
    }
  }

  useEffect(() => {
    if (styleName !== "") {
      displayData();
    }
  }, [styleName]);

  useEffect(() => {
    if (categoryName !== "") {
      displayData();
    }
  }, [categoryName]);

  return (
    <>
      <PageHeader title="Kata Randomizer" />
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <ListGroup
              items={jsonData.Styles.map((s) => s.name)}
              heading="Select a Style"
              onClickCategory={(style, categoryName) => {
                setCategoryName(categoryName);
                setStyleName(style);
              }}
              onSelectItem={(style) => {
                setCategoryName("all");
                setStyleName(style);
              }}
              selectedItemIndex={-1}
            />
          </div>
          <div className="col-sm-4">
            <ResultsPanel
              actionName={selectedAction}
              buttonLabel="Randomize Again"
              hideSpinner={hideSpinner}
              kataName={selectedKataName}
              onButtonClick={() => {
                displayData();
              }}
              styleName={
                styleName +
                (categoryName != "all" ? " (" + categoryName + "s)" : "")
              }
              title="Action Results"
            />
          </div>
          <div className="col-sm-4">
            <KataList
              heading={
                styleName +
                " Kata List" +
                (categoryName != "all" ? " (" + categoryName + "s)" : "")
              }
              selectedCategory={categoryName}
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
