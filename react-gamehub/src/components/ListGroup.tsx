import { useState } from "react";

function ListGroup() {
  let items = ["osswa", "osswa2", "osswa3", "osswa4"];

  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //has states that change overtime

  return (
    <>
      <h1>List</h1>
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
