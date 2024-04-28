import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
  selectedItemIndex: number;
}
function ListGroup({ items, heading, onSelectItem, selectedItemIndex }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(selectedItemIndex);

  return (
    <>
      <h5>{heading}</h5>
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
              setSelectedIndex(index);
              onSelectItem(item);
              return item;
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
