import Button from "./components/Button";
function App() {
  return (
    <div>
      <Button
        onClick={() => console.log("Clicked")}
        children="Click me Daddy"
        // color="secondary"
      />
    </div>
  ); //make sure there is no space / and >
}

export default App; // so it can be used somewhere else
