import styles from "./Button.scss?inline";

class MButton extends HTMLElement {

  static ROUNDED_OPTIONS: Record<string, string> = {
    sm: "4px",
    md: "8px",
    lg: "12px",
  };

  static get observedAttributes() {
    return ["variant", "color", "rounded", "disabled", "loading"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.render();
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name: string, _: string | null, newValue: string | null) {
    this.render();
  }

  get variant() {
    return this.getAttribute("variant") || "filled";
  }

  get color() {
    return this.getAttribute("color") || "primary";
  }
  get disabled() {
    return this.getAttribute("disabled") || false;
  }
  get loading() {
    return this.getAttribute("loading") || false;
  }

  get rounded() {
    const roundedValue = MButton.ROUNDED_OPTIONS[this.getAttribute("rounded") as string] || this.getAttribute("rounded");
    return roundedValue || "5px";
  }

  addIconWrapper(slotName: string) {
    const prefixWrapper = document.createElement("span");
    prefixWrapper.classList.add(slotName);
    
    const prefixSlot = document.createElement("slot");
    prefixSlot.name = slotName;
    prefixSlot.className = slotName;

    prefixWrapper.appendChild(prefixSlot);

    return prefixWrapper;
  }

  render() {
    const colorClass = this.color ? `${this.color}` : "primary";
    const variantClass = this.variant ? `${this.variant}` : "filled";
    const disabledClass = this.disabled ? `disabled` : "";
    const loadingClass = this.loading ? 'loading' : '';

    this.shadowRoot!.innerHTML = `
      <style>
        button {
          color: ${this.color};
          border-radius: ${this.rounded};
        }
        ${styles}
      </style>
      <button class="m-button ${colorClass} ${variantClass} ${loadingClass} ${disabledClass}">
      </button>
    `;

    const wrapper = document.createElement("div");

    if(!!this.loading) {
      const loadingWrapper = document.createElement("span");
      loadingWrapper.innerText = `Loading ...`;
      wrapper.appendChild(loadingWrapper);
    } else {
      if (this.querySelector('[slot="prefix"]')) {
        const prefixWrapper = this.addIconWrapper('prefix');
        wrapper.appendChild(prefixWrapper);
      }
      
      const defaultSlot = document.createElement("slot");
      wrapper.appendChild(defaultSlot);
      
      if (this.querySelector('[slot="suffix"]')) {
        const suffixWrapper = this.addIconWrapper('suffix');
        wrapper.appendChild(suffixWrapper);
      }
    }


    this.shadowRoot?.querySelector('button')?.appendChild(wrapper);
  }


}

if (!customElements.get("m-button")) {
  customElements.define("m-button", MButton);
}

export default MButton;
