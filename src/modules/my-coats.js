import { LitElement, html, css } from 'lit';
import {
    getCoats,
} from "./getData.js";
import "./product-card.js";


class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .product-list {
      width: 95%;
      height: 95%;
      padding: 0 0 0 1.5em;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 1.8em;
      max-height: 80vh;
      overflow-y: scroll;
    }
    .product-list::-webkit-scrollbar{
      display: none;
    }
  `;

  static properties = {
    products: { type: Array }
  };

  constructor() {
    super();
    this.products = [];
  }

  async connectedCallback() {
    super.connectedCallback();
    const coats = await getCoats();
    this.products = [...coats];
  }

  render() {
    return html`
      <div class="product-list">
        ${this.products.map(
          product => html`
            <product-card
              imgSrc="${product.imagen}"
              productName="${product.name}"
              price="$ ${product.precio}"
            ></product-card>
          `
        )}
      </div>
    `;
  }
}

customElements.define('my-coats', MyElement);
