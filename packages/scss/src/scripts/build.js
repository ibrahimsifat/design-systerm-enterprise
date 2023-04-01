const fs = require("fs");
const path = require("path");
const sass = require("sass");

// compile scss to css function
/**
 * compile scss to css
 * @param {string} src - source file
 * @param {string} output - output file
 *
 */
const compile = (src, output) => {
  const result = sass.compile(path.resolve(src), {
    style: "expanded",
    verbose: true,
  });
  fs.writeFileSync(path.resolve(output), result.css);
};

// compile global.scss to global.css
compile("./src/global.scss", "./lib/global.css");

/**
 * get all components from src folder
 * @returns {Array} - array of objects with src and output properties
 */
const getAllComponents = () => {
  let allComponents = [];
  const types = ["atoms", "molecules", "organisms", "templates", "pages"];
  types.forEach((type) => {
    const allFiles = fs.readdirSync(`src/${type}`).map((file) => ({
      src: `src/${type}/${file}`,
      output: `lib/${file.slice(0, -5)}.css`,
    }));
    allComponents = [...allComponents, ...allFiles];
  });
  return allComponents;
};
// console.log(getAllComponents());

// compile all components
getAllComponents().forEach((component) => {
  compile(component.src, component.output);
});
