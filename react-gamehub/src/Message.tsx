//we describe what the UI is going to look like where we use this component
function Message() {
  const name = "Osswa";

  //this code is not html but jsx
  return <h1>Hello {name}</h1>;
}

//to use it we need to export it as a default object of thi smodule
export default Message;
