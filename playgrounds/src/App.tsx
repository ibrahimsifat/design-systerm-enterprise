import { Button, Color, Text } from "@ds.e/react/lib";
const App = () => {
  return (
    <div>
      <Text size="xl">Hello World</Text>
      <Color hexCode="#ffffff" height="xxl" width="md" />
      <Button title="This is title" onClick={() => alert("this is alert")}>
        Click Me
      </Button>
      <h1>hello </h1>
    </div>
  );
};
export default App;
