import { Button, Color } from "@ds.e/react/lib";
const App = () => {
  return (
    <div>
      <Color hexCode="#ffffff" height="xxl" width="md" />
      <Button title="This is title" onClick={() => alert("this is alert")}>
        Click Me
      </Button>
      <h1>hello </h1>
    </div>
  );
};
export default App;
