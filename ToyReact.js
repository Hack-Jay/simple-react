class ElementWrapper {
  constructor(type) {
    this.root = document.createElement(type);
  }
  setAttribute(name, value) {
    if (name.match(/^on([\s\S]+)$/)) {
      let eventName = RegExp.$1.replace(/^[\s\S]/, (s) => s.toLowerCase());
      this.root.addEventListener(eventName, value);
    }
    if (name === "className") name = "class";
    this.root.setAttribute(name, value);
  }
  appendChild(vchild) {
    vchild.mountTo(this.root);
  }
  mountTo(parent) {
    parent.appendChild(this.root);
  }
}

class TextWrapper {
  constructor(content) {
    this.root = document.createTextNode(content);
  }
  mountTo(parent) {
    parent.appendChild(this.root);
  }
}

export class Component {
  constructor() {
    this.children = [];
    this.props = Object.create(null);
  }

  setAttribute(name, value) {
    if (name.match(/^on([\s\S]+)$/)) {
      console.log(RefExp.$1);
    }
    this.props[name] = value;
    this[name] = value;
  }

  mountTo(parent) {
    let vdom = this.render();
    vdom.mountTo(parent);
  }

  appendChild(vchild) {
    console.log("vchild", vchild);
    this.children.push(vchild);
  }
}

export let ToyReact = {
  createElement(type, attr, ...children) {
    // console.log('type', type, 'attr', attr, 'children', children);
    let element;
    if (typeof type === "string") element = new ElementWrapper(type);
    else element = new type();

    for (let name in attr) {
      element.setAttribute(name, attr[name]);
    }

    // Comp中 子组件 this.children 为数组，遍历后插入
    let insertChildren = (children) => {
      for (let child of children) {
        if (typeof child === "object" && child instanceof Array) {
          insertChildren(child);
        } else {
          if (
            !(child instanceof Component) &&
            !(
              child instanceof ElementWrapper && !(child instanceof TextWrapper)
            )
          )
            child = String(child);
          if (typeof child === "string") child = new TextWrapper(child);
          element.appendChild(child);
        }
      }
    };

    insertChildren(children);
    return element;
  },

  render(vdom, element) {
    vdom.mountTo(element);
  },
};
