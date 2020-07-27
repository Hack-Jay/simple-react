export let ToyReact = {
	createElement(type, attr, ...children) {
		console.log(arguments);
		let element = document.createElement(type);
		for (let name in attr) {
			element.setAttribute(name, attr[name]);
		}
		for (let child of children) {
			if (typeof child === "string") child = document.createTextNode(child);
			element.appendChild(child);
		}
		return element;
    },
    
    render(vdom) {

    }
};
