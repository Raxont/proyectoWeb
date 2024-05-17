import { LitElement, html, css } from 'lit-element';

class MiComponente extends LitElement {
  static get styles() {
    return css`
      /* Aquí puedes definir estilos específicos para tu componente */
      :host {
        display: block;
        /* Estilos para el componente en general */
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
      <!-- Aquí va el contenido del componente -->
      <div class="contenido">
        ${this.opcionSeleccionada === 'abrigos'
          ? html`<p>Contenido para Abrigos</p>`
          : ''}
        ${this.opcionSeleccionada === 'camisetas'
          ? html`<p>Contenido para Camisetas</p>`
          : ''}
        ${this.opcionSeleccionada === 'pantalones'
          ? html`<p>Contenido para Pantalones</p>`
          : ''}
        ${this.opcionSeleccionada === 'carrito'
          ? html`<p>Contenido para Carritos</p>`
          : ''}
      </div>
    `;
  }
  connectedCallback() {
    super.connectedCallback();

    // Manejar clic en las opciones de div2
    const opcionesDiv2 = this.shadowRoot.querySelectorAll('.div2_ul_li');
    opcionesDiv2.forEach(opcion => {
      opcion.addEventListener('click', () => {
        const opcionSeleccionada = opcion.querySelector('p').textContent.toLowerCase();
        this.opcionSeleccionada = opcionSeleccionada;
      });
    });

    // Manejar clic en las opciones de div3
    const opcionesDiv3 = this.shadowRoot.querySelectorAll('.div3_1');
    opcionesDiv3.forEach(opcion => {
      opcion.addEventListener('click', () => {
        const opcionSeleccionada = opcion.querySelector('p').textContent.toLowerCase();
        this.opcionSeleccionada = opcionSeleccionada;
      });
    });
  }
}

customElements.define('my-component', MiComponente);
