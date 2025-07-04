// what ever we do live create or update the html anything we do this from react it self and the react comes with the philosophy that dom manuplation is done in react with js or react at the end everything is javsacript.

// const heading = React.createElement("h1", {}, "Hello World from React");
//  here we must get the doubt that what is this heading and this heading.
// console.log(heading) // here we can see the object and this object is a react element
// const root = ReactDOM.createRoot(document.getElementById("root"));
//  here we put the heading the react element(object) into the render object thats means it this render element job to  convert the object or react element into the h1 tag that browser understands and put it into the root element .
// root.render(heading);

// nested tags
//  does order of writing the scripts matter : that means should we write the app.js script file above the cdn's? or should they be written after the cdn's?
// Answer : we have to use the app.js file after the cdn's because in app.js we use the react funtionalities and its environment so if we write the app.js file prior to the cdns it gets first compiled and thorws erros like the react is not defined.
// hence we have to keep the react js before the app.js
// what is the differnce between the development and production in cdn's?
// can we write the cdns and scripts in the head section?👇
// see the code we write in the root folder will be replaced with the code of the render method, but point to be remembered is that if we write above or below the react code it will not gets replaced. As the react only works or present in the root div only.
// Why react is called a library not a framework?
// As the react can be applied only to a particular part of the code say the header or footer etc..... we call this as a library.React only works where you make the root.
// It can independetly work in a small portion of a app .
// Nested Example
import React from "react";
import ReactDOM from "react-dom/client";

let firstDiv = React.createElement(
  "div",
  { id: "frist" },
  React.createElement(
    "div",
    { id: "second" },
    React.createElement("h1", { id: "nested" }),
    "Hi am nested tag!!!"
  )
);
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(firstDiv);
