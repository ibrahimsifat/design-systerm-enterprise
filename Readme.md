# Design System steps 📝

This is a [design](https://www.figma.com/file/mJZ1H9VvUbxFB84vkSHsAu/Design-System---Demo?node-id=8872-1911&t=EO9EcfhDXwcR2ANZ-0) system for implementing mordarn applications like single page applications and static pages

## Get Started 🚀

**CheckList**

- Organized: Fixed Code Structure
- No Specificity Issue
- Atomic Design Principles
- Easy to understand (Comments, Variables)
- Fully Customizable / Themeble
- Reusable Across Teams / Project

### Save Readme ✨

1. ##### Create foundation of folder structure
   - Create a folder name as scss for scss
   - Inside Of Scss folder create 'src' folder
   - inside src folder create 'base, atoms, foundation, molecules, organisms, templetes, pages,)
   - root of scss folder create a global.scss
2. ##### Buld scss to css
   - inside of src folder run `yarn init -y`
   - Add SCSS package `yanr add scss`
   - Inside src fulder create build file inside of scripts folder and create function for compilation for all inside src .scss file to inside lib folder .css file.
3. ##### Create A `packages` for all packages Folder in root deractory
   - Move root scss folder into `packages`folder
   - change `scss/package.json` `"name": "@ds.e/scss"`
   - In The root `yarn init -y` to initialize package
   - change namespace`package.json` `"name": "@ds.e/core"`for core
   - Install `yarn add lerna` for monoripo
   - Run `yarn add lerna` to create lerna configration json file
   - Add in `lerna.json` `"packages": ["packages/*"]` to intrigate the packages to lerna and also add `"npmClient": "yarn"' for use yarn as npm client and ` "stream": true` to generate log
   - Change `package.json` workspace to `"workspaces": {
  "packages": [
    "packages/*"
  ]
}` to add onather packages and `"private":true` for private the package
   - delete all node modules folder and then run `yarn` at root and you can check `yarn build` to sure all build are working.
   - Add ` "build": "yarn lerna run build"` to use lerna build system
4. ##### Create a folder named `react` inside `packages` folder for react js Project
   - run `yarn init -y` to initialize and set namespace ` "name": "@ds.e/react"`
   - Install `yarn add -D react typescript @types/react` for react Project
   - create `tsconfig.json` inside `react` folder for configration
   - inside of `src` folder create a `index.ts` and folders `atoms, foundation, molecules`
   - Create a atom like Button and exports into
   - Install `yarn add In ract -D rollup rollup-pulgin-typescript2` to complieation
   - Create a file root of react `rollup.config.js`
5. ##### Create a playgrounds in root
   - Inside of playgrounds `yarn create vite` react Project
   - And import one atom inside of `app.tsx` and go live first react atom working after....
6. ##### Create Atoms and Foundation Package
   - Install `yarn add -D nodemon` inside of `package/scss` for resterting server changes & inside of package json add script ` "dev":"nodemon --watch src --exec yarn build -e scss"`
   -
