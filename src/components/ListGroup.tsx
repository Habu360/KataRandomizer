import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onClickCategory: (item: string, category: string) => void;
  onSelectItem: (item: string) => void;
  selectedItemIndex: number;
}
function ListGroup({
  items,
  heading,
  onClickCategory,
  onSelectItem,
  selectedItemIndex,
}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(selectedItemIndex);

  return (
    <>
      <h5>{heading}</h5>
      <div className="list-group-container">
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                if (index == 0 || index == 3) {
                  setSelectedIndex(index);
                  onSelectItem(item);
                }
              }}
            >
              <div className="d-flex bd-highlight">
                <div
                  className={
                    index == 1 || index == 2 ? "p2" : "p-2 flex-grow-1"
                  } //col-md-4  and col-md-12
                >
                  {item}
                </div>

                <div
                  className={
                    index < 1 || index > 2
                      ? "visually-hidden"
                      : "p-2 flex-grow-1 weapon-category-container" //col-md-8
                  }
                >
                  <button
                    type="button"
                    className="btn btn-warning btn-sm weapon-category pull-right"
                    onClick={() => {
                      setSelectedIndex(index);
                      onClickCategory(item, "long");
                    }}
                  >
                    Longs
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning btn-sm weapon-category"
                    onClick={() => {
                      setSelectedIndex(index);
                      onClickCategory(item, "short");
                    }}
                  >
                    Shorts
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning btn-sm weapon-category"
                    onClick={() => {
                      setSelectedIndex(index);
                      onClickCategory(item, "all");
                    }}
                  >
                    All
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListGroup;
