//Name: Arkar Phyo
//Student ID: 2339702
//Class: DIT/FT/1B/07


// Define the web component
class CustomHeader extends HTMLElement {
  constructor() {
    super();

    // Create a shadow DOM
    this.attachShadow({ mode: "open" });

    // Extract the text attribute value or use a default
    const text = this.getAttribute("text") || "Default Header";

    // Define the HTML content with the attribute value
    this.shadowRoot.innerHTML = `
        <style>
          .p-4 {
            padding: 1rem;
          }
          .bg-success {
            background-color: #198754; /* Bootstrap's success color */
            color: black; /* White text on success background */
          }
          .text-center {
            text-align: center;
          }
        </style>
        <div class="p-4 bg-success">
          <h1 class="text-center">${text}</h1>
        </div>
      `;
  }
}

// Define the custom element
customElements.define("custom-header", CustomHeader);
