//import { useState } from "react";
import jsonData from "../assets/karatedata.json";

interface Props {
  heading: string;
  selectedCategory: string;
  selectedKataId: number;
  selectedStyleId: number;
}
function KataList({
  heading,
  selectedCategory,
  selectedKataId,
  selectedStyleId,
}: Props) {
  function getKataArray() {
    if (selectedCategory !== "all") {
      return jsonData.Katas.filter(
        (k) => k.styleid == selectedStyleId && k.category == selectedCategory
      );
    }
    return jsonData.Katas.filter((k) => k.styleid == selectedStyleId);
  }

  return (
    <>
      <h5>{heading}</h5>
      <div className="list-group-container">
        <ul className="list-group">
          {getKataArray().map((kata) => (
            <li
              className={
                selectedKataId === kata.id
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={kata.id}
              onClick={() => {
                return kata;
              }}
            >
              {kata.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default KataList;
