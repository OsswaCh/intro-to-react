import { useState } from "react";

// we want to pass {items: [], heading: string}
interface Props {
  items: string[];
  heading: string; // type annotation
}

function ListGroup({ items, heading }: Props) {
  /* destructuring the props to avoid using the props.sth*/

  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //has states that change overtime

  return (
    <>
      <h1>heading</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group ">
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
