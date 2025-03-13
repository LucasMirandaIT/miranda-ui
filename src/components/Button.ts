class MButton extends HTMLElement {

  static ROUNDED_OPTIONS: Record<string, string> = {
    sm: "4px",
    md: "8px",
    lg: "12px",
  };

  static get observedAttributes() {
    return ["bgcolor", "color", "rounded"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.render();
  }

  connectedCallback() {
    this.render(); // Ensure rendering on attach
  }

  attributeChangedCallback(name: string, _: string | null, newValue: string | null) {
    this.render(); // Re-render when attributes change
  }

  get bgColor() {
    return this.getAttribute("bgcolor") || "blue";
  }

  get color() {
    return this.getAttribute("color") || "white";
  }

  get rounded() {
    const roundedValue = MButton.ROUNDED_OPTIONS[this.getAttribute("rounded") as string] || this.getAttribute("rounded");
    return roundedValue || "5px";
  }

  render() {
    this.shadowRoot!.innerHTML = `
      <style>
        button {
          background: ${this.bgColor};
          color: ${this.color};
          padding: 10px;
          border: none;
          border-radius: ${this.rounded};
          cursor: pointer;
        }
      </style>
      <button><slot></slot></button>
    `;
  }
}

if (!customElements.get("m-button")) {
  customElements.define("m-button", MButton);
}

export default MButton;
