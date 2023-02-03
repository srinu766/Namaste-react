o;
const heading = React.createElement("h1", {
    id: "title"
}, "heading 1");
const heading2 = React.createElement("h2", {
    id: "title"
}, "heading 2");
const container = React.createElement("div", {
    id: "container"
}, [
    heading,
    heading2
]);
console.log(heading);
const root = ReactDom.createRoot(document.getElementById("root"));
//passing a react element inside the root
//async defer
root.render(container);

//# sourceMappingURL=index.6bd02f5a.js.map
