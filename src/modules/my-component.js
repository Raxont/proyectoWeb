import { LitElement, html, css } from 'lit-element';
import "./my-products.js"
import "./my-coats.js"
import "./my-shirts.js"
import "./my-pants.js"
import "./my-cart.js"

class MiComponente extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {
      opcionSeleccionada: { type: String }
    };
  }

  constructor() {
    super();
    this.opcionSeleccionada = '';
  }

  render() {
    return html`
      <div class="contenido">
        ${this.opcionSeleccionada === 'todos los productos'
          ? html`<my-products></my-products>`
          : ''}
        ${this.opcionSeleccionada === 'abrigos'
          ? html`<my-coats></my-coats>`
          : ''}
        ${this.opcionSeleccionada === 'camisetas'
          ? html`<my-shirts></my-shirts>`
          : ''}
        ${this.opcionSeleccionada === 'pantalones'
          ? html`<my-pants></my-pants>`
          : ''}
        ${this.opcionSeleccionada === 'carrito'
          ? html`<my-cart></my-cart>`
          : ''}
      </div>
    `;
  }
}

customElements.define('my-component', MiComponente);
