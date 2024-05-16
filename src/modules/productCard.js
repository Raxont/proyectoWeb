import { LitElement, html, css } from 'lit';
import "./cart"

class ProductCard extends LitElement {
  static styles = css`
    .div5_1 {
      width: 23%;
      height: 48%;
      background: linear-gradient(#0001, var(--color-primario));
      -webkit-box-shadow: inset -47px -57px 47px -42px rgba(0, 0, 0, 1);
      -moz-box-shadow: inset -47px -57px 47px -42px rgba(0, 0, 0, 1);
      box-shadow: inset -47px -57px 47px -42px rgba(0, 0, 0, 1);
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 20px;
      overflow: hidden;
    }

    .div5_1 img {
      width: 100%;
      height: 70%;
    }

    .div5_1_1 {
      width: 100%;
      height: 30%;
      background: var(--color-secundario);
      border-radius: 1.5em;
      border: 2px solid var(--color-quinto);
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    .div5_1_1_p {
      width: 55%;
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 1.2em;
      margin-left: 1em;
      line-height: 2em;
    }
  `;

  static properties = {
    imgSrc: { type: String },
    productName: { type: String },
    price: { type: String },
  };

  constructor() {
    super();
    this.imgSrc = '';
    this.productName = '';
    this.price = '';
  }

  render() {
    return html`
      <div class="div5_1">
        <img src=${this.imgSrc} alt="Product Image" />
        <div class="div5_1_1">
          <p class="div5_1_1_p">
            ${this.productName} <br />
            ${this.price}
          </p>
          <toggle-menu></toggle-menu>
        </div>
      </div>
    `;
  }
}
customElements.define('product-card', ProductCard);
