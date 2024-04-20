import { useEffect, useState } from "react";
import ListGroup from "./components/ListGroup";

function App() {
  const [styleName, setStyleName] = useState("");
  const [selectedKataIndex, setSelectedKataIndex] = useState(-1);
  const [selectedKataName, setSelectedKataName] = useState("");
  const [selectedAction, setSelectedAction] = useState("");
  const styles = ["Isshinryu", "Tokushinryu", "Ryukonkai", "Dojo", "Other"];

  const isshinryuKata = [
    "Seisan",
    "Seiuchin",
    "Naihanchi",
    "Wansu",
    "Chinto",
    "Kusanku",
    "Sunsu",
  ];

  const tokushinKata = [
    "Tekko",
    "Tichu",
    "Eku",
    "Tokumine",
    "Heshikiya",
    "Tinbe/Rochin",
    "Hama Higa no Tuifa",
    "Moha Gama",
  ];
  const ryukonkaiKata = [
    "Fyukyu Bo",
    "Choun No Kun",
    "Sakagawa No Kun",
    "Chikken No Kun",
    "Nunchaku Jitsu",
    "Fyukyu Nunchaku",
    "Katan Cha No Tekko",
    "Ishikagawa Gama",
  ];
  const dojoKatas = ["Chinto Gama", "Seisan Jo", "Kusanku Jo"];
  const actions = ["Bunkai", "Renzoko", "None"];
  const kobudoActions = ["Bunkai", "None"];
  const [kataArray, setKataArray] = useState(isshinryuKata);

  function getRandomDataForStyle(selectedStyle: string) {
    let data = [""];
    let selectedIndex = -1;
    let kataName = "";
    let actionName = "";
    let rndActionIndex = -1;

    if (selectedStyle == "Isshinryu") {
      data = isshinryuKata;
      selectedIndex = randomNumberInRange(0, isshinryuKata.length - 1);
      kataName = isshinryuKata[selectedIndex];
      rndActionIndex = randomNumberInRange(0, actions.length - 1);
      actionName = actions[rndActionIndex];
    }
    if (selectedStyle == "Tokushinryu") {
      data = tokushinKata;
      selectedIndex = randomNumberInRange(0, tokushinKata.length - 1);
      kataName = tokushinKata[selectedIndex];
      rndActionIndex = randomNumberInRange(0, kobudoActions.length - 1);
      actionName = kobudoActions[rndActionIndex];
    }
    if (selectedStyle == "Ryukonkai") {
      data = ryukonkaiKata;
      selectedIndex = randomNumberInRange(0, ryukonkaiKata.length - 1);
      kataName = ryukonkaiKata[selectedIndex];
      rndActionIndex = randomNumberInRange(0, kobudoActions.length - 1);
      actionName = kobudoActions[rndActionIndex];
    }
    if (selectedStyle == "Dojo") {
      data = dojoKatas;
      selectedIndex = randomNumberInRange(0, dojoKatas.length - 1);
      kataName = dojoKatas[selectedIndex];
      actionName = "None";
    }
    if (selectedStyle == "Other") {
      //data = otherKatas;
      actionName = "None";
    }
    setKataArray(data);
    setSelectedKataIndex(selectedIndex);
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
          <div className="col-md-4">
            <ListGroup
              items={styles}
              heading="Select a Style"
              onSelectItem={(style) => {
                setStyleName(style);
              }}
              selectedItemIndex={-1}
            />
          </div>
          <div className="col-md-4">
            <h5>Style: {styleName}</h5>
            <h5>Kata: {selectedKataName}</h5>
            <h5>Action: {selectedAction}</h5>
            <div>
              <button
                className="btn btn-success"
                onClick={() => {
                  getRandomDataForStyle(styleName);
                }}
              >
                Run Again
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="container">
              <ListGroup
                items={kataArray}
                heading={styleName + " Kata"}
                onSelectItem={(kata) => {
                  console.log("clicked - " + kata);
                }}
                selectedItemIndex={selectedKataIndex}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <CollapseButton />
      <TestButton /> */}

      {/* <div className="container">
        <ListGroup
          items={kataArray}
          heading={styleName + " Kata"}
          onSelectItem={(kata) => {
            console.log("clicked - " + kata);
          }}
          selectedItemIndex={selectedKataIndex}
        />
      </div> */}
    </>
  );
}

export default App;
