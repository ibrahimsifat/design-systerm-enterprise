import { Button, Color, Margin, Select, Text } from "@ds.e/react/lib";
import "./App.css";
const colorOptions = [
  { label: "Red", value: "red" },
  { label: "Green", value: "green" },
  { label: "Blue", value: "blue" },
  { label: "Black", value: "black" },
  { label: "Yellow", value: "yellow" },
];
const App = () => {
  return (
    <div>
      <Margin bottom top>
        <Text size="xl">Hello World</Text>
      </Margin>
      <Color hexCode="#ffffff" height="xxl" width="md" />
      <Button title="This is title" onClick={() => alert("this is alert")}>
        Click Me
      </Button>
      <Margin>
        <Text size="xl">This is select</Text>
        <Margin>
          <Select
            label="Select A Color"
            options={colorOptions}
            onOptionSelected={console.log}
            // renderOption={({
            //   option,
            //   getOptionRecommendedProps,
            //   isSelected,
            // }) => (
            //   <li
            //     {...getOptionRecommendedProps({
            //       className: `custom-selected-option ${
            //         isSelected ? "custom-selected-option--selected" : ""
            //       }`,
            //     })}
            //   >
            //     <div style={{ display: "flex" }}>
            //       <input
            //         type="checkbox"
            //         name="check"
            //         id="check"
            //         checked={isSelected}
            //       />
            //       <Text> {option.label}</Text>
            //     </div>
            //   </li>
            // )}
          ></Select>
        </Margin>
      </Margin>
    </div>
  );
};
export default App;
