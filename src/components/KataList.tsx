//import { useState } from "react";
import jsonData from "../assets/karatedata.json";

interface Props {
  heading: string;
  selectedKataId: number;
  selectedStyleId: number;
}
function KataList({ heading, selectedKataId, selectedStyleId }: Props) {
  //const [selectedId, setSelectedId] = useState(selectedKataId);
  return (
    <>
      <h5>{heading}</h5>
      <ul className="list-group">
        {jsonData.Katas.filter((k) => k.styleid == selectedStyleId).map(
          (kata) => (
            <li
              className={
                selectedKataId === kata.id
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={kata.id}
              onClick={() => {
                //setSelectedId(kata.id);
                return kata;
              }}
            >
              {kata.name}
            </li>
          )
        )}
      </ul>
    </>
  );
}

export default KataList;
