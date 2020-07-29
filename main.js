import {  Component } from "./ToyReact.js";

// this.children 在createElement解析的时候是个数组
class MyComponent extends Component {
  render() {
    console.log("this.children", this.children);
    return (
      <div className="MyComponent">
        <span>component </span> &nbsp; cool
        {this.children}
        {this.props.name}
      </div>
    );
  }
}

class MyComponent1 extends Component {
  render() {
    return (
      <div className="MyComponent1">
        <span>component1 </span> &nbsp; cool2
      </div>
    );
  }
}

let a = (
  <MyComponent name="a" id="my">
    <div className="=123">123</div>
    <MyComponent1 />
  </MyComponent>
);

console.log("a", a);

ToyReact.render(a, document.body);


// var a = ToyReact.createElement(MyComponent, {
// 	name: "a",
// 	id: "my"
//   }, ToyReact.createElement("div", {
// 	className: "=123"
//   }, "123"), ToyReact.createElement(MyComponent1, null));