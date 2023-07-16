// const heading = React.createElement("h1",{"id":"heading"},"Hello from React!");
//     const root = ReactDOM.createRoot(document.getElementById("root"));
//     root.render(heading);

const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"This is the heading 1"),
        React.createElement("h2",{},"This is the heading 2")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"This is the heading 1"),
        React.createElement("h2",{},"This is the heading 2")
    ])
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);