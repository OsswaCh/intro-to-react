import ListGroup from "./components/ListGroup";

function App() {
  let items = ["osswa", "osswa2", "osswa3", "osswa4"];

  return (
    <div>
      <ListGroup
        items={items}
        heading="list of the most amazing creatures ever to exist"
      />
    </div>
  ); //make sure there is no space / and >
}

export default App; // so it can be used somewhere else
