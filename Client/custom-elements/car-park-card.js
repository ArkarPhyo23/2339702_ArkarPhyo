// Name: Arkar Phyo
// Student ID: 2339702
// Class: DIT/FT/1B/07

// Creating a template for the car park card
const template = document.createElement("template");

template.innerHTML = `
<style>
:host {
  display: block;
  width: 100%;
  border: 1px solid;
  border-radius: 5px;
  overflow: hidden;
}
.card {
  padding: 20px;
}
h2 {
  margin-top: 0;
}
p {
  margin-bottom: 0.5em;
}
</style>
<div class="card">
<h2 id="carParkNo">wrong</h2>
<p id="address">BLK 469</p>
<p id="gantryHeight"></p>
</div>
`;

// Custom web component for the car park card
class carParkCard extends HTMLElement {
  constructor() {
    super();
    // Creating a shadow DOM for encapsulation
    this.root = this.attachShadow({ mode: "open" });

    // Cloning the template and appending it to the shadow DOM
    let clone = template.content.cloneNode(true);
    this.root.append(clone);
  }

  // Defining observed attributes for the web component
  static get observedAttributes() {
    return ["carkparkno", "address", "gantryheight"];
  }

  // Getter and setter methods for attributes linked to properties

  get carParkNo() {
    return this.getAttribute("carkparkno");
  }
  set carParkNo(value) {
    this.setAttribute("carkparkno", value);
  }

  get address() {
    return this.getAttribute("address");
  }

  set address(value) {
    this.setAttribute("address", value);
  }

  get gantryHeight() {
    return this.getAttribute("gantryheight");
  }

  set gantryHeight(value) {
    this.setAttribute("gantryheight", value);
  }

  // Callback triggered when observed attributes change
  attributeChangedCallback(attrName, oldValue, newValue) {
    // Converting attribute name to lowercase
    attrName = attrName.toLowerCase();
    let element;

    // Updating corresponding element based on the attribute name
    switch (attrName) {
      case "carkparkno":
        element = this.root.getElementById("carParkNo");
        element.textContent = newValue;
        break;
      case "address":
        element = this.root.getElementById("address");
        element.textContent = `Address: ${newValue}`;
        break;
      case "gantryheight":
        element = this.root.getElementById("gantryHeight");
        element.textContent = `Gantry Height: ${newValue} m`;
        break;
    }
  }
}

// Registering the custom web component
window.customElements.define("car-park-card", carParkCard);
