
// const heading = React.createElement("h1", {id:"heading", xyz:"abc"}, "Hello world from react");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(heading); // object

// root.render(heading); // covert object into tag and putting into the root tag

/*
*
*
*
<div id="parent">
  <div id="child">
    <h1>Hello, I'm a h1 tag</h1>
        <h2>Hello, I'm a h2 tag</h2>
  </div>
</div>
*
*
*
ReactElemnt(object) => HTML(Broswer understand)
*/

const parent = React.createElement("div", {id:"parent"}, [
    React.createElement("div", {id:"child"}, [
        React.createElement("h1", {}, "Hello I'm h1 tag"), 
        React.createElement("h2", {}, "Hello I'm h2 tag")
    ]),
        React.createElement("div", {id:"child"}, [
        React.createElement("h1", {}, "Hello I'm h1 tag"), 
        React.createElement("h2", {}, "Hello I'm h2 tag")
     ])
]);

// JSX

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // Object

console.log(parent)