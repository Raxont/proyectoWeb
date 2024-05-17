import { LitElement, html, css } from "lit";

class ProductCard extends LitElement {
  static styles = css`
    :host {
      width: 95%;
      height: 24vh;
      background: var(--color-sexto);
      border-radius: 3em;
      -webkit-box-shadow: inset -47px -57px 47px -42px rgba(0, 0, 0, 1);
      -moz-box-shadow: inset -47px -57px 47px -42px rgba(0, 0, 0, 1);
      box-shadow: inset -47px -57px 47px -42px rgba(0, 0, 0, 1);
      
    }
    .div5_1 {
      width: 100%;
      height:100%;
      background: linear-gradient(#0001, var(--color-primario));
      -webkit-box-shadow: inset -8px -2px 20px 0px rgba(0, 0, 0, 0.81);
      -moz-box-shadow: inset -8px -2px 20px 0px rgba(0, 0, 0, 0.81);
      box-shadow: inset -8px -2px 20px 0px rgba(0, 0, 0, 0.81);
      display: flex;
      align-items: center;
      border-radius: 3em;
      gap: 0.5em;
      
    }
    .contenedor_imagen {
      width: 25%;
      height: 90%;
     
      display: flex;
      justify-content: center;
    }
    .contenedor_imagen img {
      width: 50%;
      height: 100%;
      /* background: green; */
    }
    .nombre{
        font-size:.8em;
    }
    .div5_1_nombre,
    .div5_1_precio,
    .div5_1_subtotal,
    .div5_1_cantidad {
      width: 18%;
      height: 80%;
      font-size: 1.5em;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1.5em;
      /* background: red; */
    }
    .div5_trash{
        width:8%;
        height:30%;
    }
    button{
        appearance: auto;
        text-rendering: auto;
        color: buttontext;
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
        background: var(--color-primary);
        margin-right: 1em;
        padding-block: 0px;
        padding-inline: 0px;
        border-width: 0px;
        border-style: outset;
        border-color: buttonborder;
        border-image: none;
    }
    .bx-trash{
        height:100%;
        width:100%;
        font-size: 4.5em;
      color: var(--color-primario);
    }
  `;

  static properties = {
    imgSrc: { type: String },
    productName: { type: String },
    price: { type: String },
    cuantity: { type: String },
    subtotal: { type: String } 
  };

  constructor() {
    super();
    this.imgSrc = "";
    this.productName = "";
    this.price = "";
    this.cuantity="";
    this.subtotal="";
  }

  render() {
    return html`
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"/>
      <div class="div5_1">
        <div class="contenedor_imagen">
            <img src=${this.imgSrc} alt="Product Image" />
        </div>
        <div class="div5_1_nombre">
          Nombre <br />
          <div class="nombre">
            ${this.productName}
          </div>
          
        </div>
        <div class="div5_1_cantidad">
          <div class="div5_1_cantidad_palabra">Cantidad</div>
          <div class="nombre">
            ${this.cuantity}
          </div>
        </div>
        <div class="div5_1_precio">
          Precio<br />
          <div class="nombre">
            ${this.price}
          </div>
        </div>
        <div class="div5_1_subtotal">
          Subtotal <br />
          <div class="nombre">
            ${this.subtotal}
          </div>
        </div>
        <button id="btnPantalones" class="div5_trash">
            <i class="bx bx-trash"></i>
        </button>
      </div>
    `;
  }
}
customElements.define("product-card2", ProductCard);
