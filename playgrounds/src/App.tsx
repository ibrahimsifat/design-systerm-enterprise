import { Button, Color, spacing } from "@ds.e/react/lib";
const App = () => {
  return (
    <div>
      <Color hexCode="#ffffff" height={spacing.xxl} width={spacing.xxl} />
      <Button title="This is title" onClick={() => alert("this is alert")}>
        Click Me
      </Button>
      <h1>hello </h1>
    </div>
  );
};
export default App;
