import { LitElement, html, css } from "lit";

class ToggleMenu extends LitElement {
  static styles = css`
    .button {
      --width: 100px;
      --height: 35px;
      margin: 4em 1em 1em 0.5em;
      --tooltip-height: 35px;
      --tooltip-width: 90px;
      --gap-between-tooltip-to-button: 18px;
      --button-color: #222;
      --tooltip-color: #fff;
      width: var(--width);
      height: var(--height);
      background: green;
      position: relative;
      text-align: center;
      border-radius: 0.5em;
      font-family: "Arial";
      transition: background 0.7s;
    }
    .text {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .button-wrapper,
    .text,
    .icon {
      overflow: hidden;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      color: #fff;
    }

    .text {
      top: 0;
    }

    .text,
    .icon {
      transition: top 0.5s;
    }

    .icon {
      color: #fff;
      top: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .icon svg {
      width: 24px;
      height: 24px;
    }

    .button:hover {
      cursor: pointer;
    }

    .button:hover .text {
      top: -100%;
    }

    .button:hover .icon {
      top: 0;
    }

    .menu {
      display: none;
    }

    .menu[open] {
      display: block;
    }
  `;

  static properties = {
    open: { type: Boolean },
    product: { type: Object }
  };

  constructor() {
    super();
    this.open = false;
    this.product = {};
  }
toggleMenu() {
  this.open = !this.open;
  if (this.product.productId && this.product.productType && this.product.productName && this.product.price && this.product.imgSrc) {
    this.dispatchEvent(new CustomEvent('add-to-cart', { 
      detail: this.product, 
      bubbles: true, 
      composed: true 
    }));
  }
}

  render() {
    return html`
      <div class="button" @click=${this.toggleMenu}>
        <div class="button-wrapper">
          <div class="text">Agregar</div>
          <span class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-cart2"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    `;
  }
}
customElements.define("toggle-menu", ToggleMenu);