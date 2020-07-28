import { ToyReact, Component } from "./ToyReact.js";

class MyComponent extends Component {
  render() {
    return (
      <div>
        <span>component </span> &nbsp; cool
        {this.children}
      </div>
    );
  }
}

let a = (
  <MyComponent name="a" id="my">
    <div>123</div>
  </MyComponent>
);

ToyReact.render(a, document.body);

// var b = ToyReact.createElement(
//  "div", null,
//  ToyReact.createElement("span", null, "1"),
//  ToyReact.createElement("span", null, "2"),
//  ToyReact.createElement("span", {
//     "class": "3"
//   }, "3 hello world"));
