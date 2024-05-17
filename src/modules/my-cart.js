import { LitElement, html, css } from 'lit';
import {
    getCombinedData
} from "./getData.js";
import "./product-card2.js";


class MyElement extends LitElement {
  static styles = css`
    
    .product-list {
      width: 95%;
      height: 95%;
      padding: 0 0 0 1.5em;
      display: flex;
      flex-direction: column;
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
    const carts = await getCombinedData();
    this.products = [...carts];
    console.log(this.products);
  }

  render() {
    return html`
      <div class="product-list">
        ${this.products.map(
          product => html`
            <product-card2
              imgSrc="${product.imagen}"
              productName="${product.nombre}"
              cuantity="${product.cantidad}"
              price="$ ${product.precio}"
              subtotal="${product.subtotal}"
            ></product-card2>
          `
        )}
      </div>
    `;
  }
}

customElements.define('my-cart', MyElement);
