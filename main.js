// import { ToyReact } from "./ToyReact.js";

class MyComponent {}

let b = (
	<div>
		<span>1</span>
		<span>2</span>
		<span class="3">3 hello world</span>
	</div>
);

document.body.appendChild(b);
console.log("b", b);

ReactDom.render(b, document.body);

// var b = ToyReact.createElement(
//  "div", null,
//  ToyReact.createElement("span", null, "1"),
//  ToyReact.createElement("span", null, "2"),
//  ToyReact.createElement("span", {
//     "class": "3"
//   }, "3 hello world"));
