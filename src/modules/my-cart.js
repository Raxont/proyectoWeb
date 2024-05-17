import { LitElement, html, css } from "lit";
import { getCombinedData } from "./getData.js";
import "./product-card2.js";

class MyElement extends LitElement {
  static styles = css`
    .product-list {
      width: 90%;
      height: 80%;
      padding: 0 0 0 1.5em;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap: 1.8em;
      max-height: 80vh;
      overflow-y: scroll;
    }
    .product-list::-webkit-scrollbar {
      display: none;
    }
    .footer{
      width:100%;
      height:10vh;
      display:flex;
      justify-content: space-around;
      align-items: center;
    }
    .vaciarCarrito_1{
      width: 15%;
      height: 70%;
      display:flex;
      align-items:center;
      justify-content:center;
      
    }
    .vaciarCarrito_2 p,
    .vaciarCarrito_1 p{
      font-size:1.5em;
    }
    .vaciarCarrito_2{
      width: 40%;
      height: 50%;
      display:flex;
      align-items:center;
      justify-content:center;
    }
    button {
      appearance: auto;
      text-rendering: auto;
      color: var(--color-primario);
      letter-spacing: normal;
      word-spacing: normal;
      line-height: normal;
      text-transform: none;
      text-indent: 0px;
      text-shadow: none;
      display: inline-block;
      text-align: center;
      align-items: flex-start;
      cursor: pointer;
      box-sizing: border-box;
      background: linear-gradient(#0001, var(--color-primario));
      border-radius: 1em;
      -webkit-box-shadow: inset -8px -2px 20px 0px rgba(0, 0, 0, 0.81);
      -moz-box-shadow: inset -8px -2px 20px 0px rgba(0, 0, 0, 0.81);
      box-shadow: inset -8px -2px 20px 0px rgba(0, 0, 0, 0.81);
      margin-right: 1em;
      padding-block: 0px;
      padding-inline: 0px;
      border-width: 0px;
      border-style: outset;
      border-color: buttonborder;
      border-image: none;
    }
    .total{
      display:flex;
      width:37%;
      align-items: center;
      justify-content: flex-end;
      gap:10px;
    }
    .total p{
      font-size:1.5em;
    }
  `;

  static properties = {
    products: { type: Array },
  };

  constructor() {
    super();
    this.products = [];
  }

  async connectedCallback() {
    super.connectedCallback();
    const carts = await getCombinedData();
    this.products = [...carts];
  }
  getTotal() {
    return this.products.reduce((acc, product) => acc + product.subtotal, 0);
  }

  render() {
    return html`
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"/>
      <div class="product-list">
        ${this.products.map(
          (product) => html`
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
      <div class="footer">
        <button class="vaciarCarrito_1">
          <p>Vaciar Carrito</p>
        </button>
        <div class="total">
          <p>
          Total<br>
          $ ${this.getTotal()}
          </p>
          <button class="vaciarCarrito_2">
            <p>Comprar Ahora</p>
        </button>
        </div>
      </div>  
    `;
  }
}

customElements.define("my-cart", MyElement);
