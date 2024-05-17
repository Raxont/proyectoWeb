import { LitElement, html, css } from "lit-element";

class MyBodyComponent extends LitElement {
  static get styles() {
    return css`
      :host {
        width: 100%;
        height: 100vh;
        padding: 2em 2em 2em 2em;
        background: var(--color-secundario);
        color: var(--color-primario);
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        display: grid;
        grid-template-columns: 1fr 4fr;
        grid-template-rows: repeat(6, 1fr);
        grid-template-areas:
          "logo img"
          "menus img"
          "menus img"
          ". img"
          "carrito img"
          "derechos img";
      }

      .div1 {
        grid-area: logo;
        /* background: red; */
      }
      .div1_h1 {
        font-size: 2.5em;
        /* background: pink; */
      }
      #toggleMenu {
        display: none;
      }
      .div2 {
        grid-area: menus;

        /* background: blue; */
      }
      .div2_ul {
        height: 100%;
        font-size: 1.5em;
        /* background: red; */
        display: flex;
        flex-direction: column;
        gap: 2em;
      }
      .div2_ul_li_eleccion,
      .div2_ul_li {
        /* background: yellow; */
        list-style-type: none;
        gap: 1.5em;
        display: flex;
        align-items: center;
      }
      .div2_ul_li_eleccion {
        background: var(--color-sexto);
        /* border: 1px solid var(--color-primario); */
        border-right: 0px;
      }
      .bx-menu-alt-left {
        font-size: 1.5em;
      }
      .bx-chevrons-left {
        font-size: 1.5em;
      }
      .div3 {
        grid-area: carrito;
        /* background: yellow; */
      }
      .div3_1 {
        width: 100%;
        height: 30%;
        /* background: red; */
        font-size: 1.5em;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1.5em;
      }
      .bxs-cart {
        font-size: 1.5em;
      }
      .div3_1_3 {
        background: var(--color-sexto);
        width: 8%;
        border: 3px solid var(--color-primario);
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .div4 {
        grid-area: derechos;
        /* background: red; */
      }
      .div4_p {
        font-size: 1.5em;
      }
      .div5 {
        width: 100%;
        height: 95vh;
        grid-area: img;
        background: var(--color-sexto);
        border-radius: 3em;
        -webkit-box-shadow: inset -47px -57px 47px -42px rgba(0, 0, 0, 1);
        -moz-box-shadow: inset -47px -57px 47px -42px rgba(0, 0, 0, 1);
        box-shadow: inset -47px -57px 47px -42px rgba(0, 0, 0, 1);
      }
      .div5_p {
        width: 100%;
        height: 10vh;
        /* background: blue; */
        font-size: 3em;
        padding: 0.5em 0 1.5em 0.5em;
        display: flex;
      }
      .div5_contenedor {
        width: 100%;
        height: 95%;
        padding: 0 0 0 1.5em;
        /* background: red; */
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1.8em;
        max-height: 80vh;
        overflow-y: scroll;
      }

      @media only screen and (max-width: 800px) {
        body {
          padding: 0.5em 0.5em 0.5em 0.5em;
          grid-template-columns: 1fr;
          grid-template-areas:
            "logo"
            "menus"
            "carrito"
            "img"
            "derechos";
        }
        .div2 nav {
          display: none;
          background: var(--color-sexto);
          border: 1px solid var(--color-terciario);
        }
        #toggleMenu {
          display: block;
          font-size: 1.5em;
          width: 3em;
          background: var(--color-sexto);
        }
        .div2_ul {
          padding-top: 1em;
          gap: 0em;
          margin-top: -1em;
        }
        .div2_ul_li_eleccion,
        .div2_ul_li {
          border: 1px solid var(--color-terciario);
        }
        .div2_ul_li_eleccion {
          background: none;
        }
        .div3_1 {
          background: none;
          padding-top: 2em;
        }
        .div4_p {
          padding-top: 2em;
        }
        .div5 {
          width: 95vw;
          height: 100vh;
          margin-top: 0.5em;
          padding: 0em 0em;
          /* background: blue; */
        }
        .div5_p {
          font-size: 1.5em;
          padding: 1em 0 1.5em 1em;
          display: flex;
        }
        .div5_contenedor {
          height: 100%;
          padding: 0 0 0 1em;
          gap: 1em;
          max-height: 75vh;
          overflow: scroll;
          /* background: blue; */
        }
        .div5_1 {
          width: 45%;
          height: 35vh;
          gap: 0.2em;
        }
        .div5_1 img {
          width: 50%;
          height: 30vh;
        }
        .div5_1_1 {
          width: 100%;
          font-size: 0.5em;
          display: flex;
          align-items: center;
          line-height: 1.5em;
        }
        .div5_1_1_p {
          width: 55%;
          height: 100%;
          display: flex;
          align-items: center;
          font-size: 1em;
          margin-left: 1em;
          line-height: 2em;
          /* background: red; */
        }
        .button {
          --width: 80px;
          --height: 20px;
        }
        .icon svg {
          width: 14px;
          height: 14px;
        }
        .opcion-seleccionada {
            background: red; /* Cambia esto al color que desees */
            color: var(--color-texto-seleccionado); /* Cambia esto al color que desees */
          }
      }
    `;
  }

  render() {
    return html`
      <head>
      <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"/>
      </head>
      <div class="div1">
        <h1 class="div1_h1">CampusShop</h1>
        <br />
        <button id="toggleMenu">Menu</button>
      </div>
      <div class="div2">
      <nav id="menu">
        <ul class="div2_ul">
          <li class="div2_ul_li_eleccion" id="todosProductos">
            <button id="btnTodosProductos"><i class="bx bx-menu-alt-left" style="color: var(--color-primario);"></i><p class="div2_ul_li_p">Todos los productos</p></button>
            
          </li>
          <li class="div2_ul_li" id="abrigos">
            <button id="btnAbrigos"><i class="bx bx-chevrons-left" style="color: var(--color-primario);"></i><p class="div2_ul_li_p">Abrigos</p></button>
            
          </li>
          <li class="div2_ul_li" id="camisetas">
            <button id="btnCamisetas"><i class="bx bx-chevrons-left" style="color: var(--color-primario);"></i><p class="div2_ul_li_p">Camisetas</p></button>
            
          </li>
          <li class="div2_ul_li" id="pantalones">
            <button id="btnPantalones"><i class="bx bx-chevrons-left" style="color: var(--color-primario);"></i><p class="div2_ul_li_p">Pantalones</p></button>
            
          </li>
        </ul>
      </nav>
    </div>
      <div class="div3">
        <div class="div3_1">
          <a href="views/carrito.html"
            ><i class="bx bxs-cart" style="color: var(--color-primario);"></i
          ></a>
          <p class="div3_p">Carritos</p>
          <div class="div3_1_3">5</div>
        </div>
      </div>
      <div class="div4">
        <p class="div4_p">© 2023 Camper</p>
      </div>
      <div class="div5">
        <p class="div5_p">Todos los productos</p>
        <my-component id="miComponente"></my-component>
      </div>
    `;
  }
  connectedCallback() {
    super.connectedCallback();

    // Agregamos el evento de clic a los botones de div2
    const botonesDiv2 = this.shadowRoot.querySelectorAll('.div2_ul_li button');
    botonesDiv2.forEach(boton => {
      boton.addEventListener('click', () => {
        // Quitamos la clase 'opcion-seleccionada' de todos los botones
        botonesDiv2.forEach(boton => boton.classList.remove('opcion-seleccionada'));
        // Añadimos la clase 'opcion-seleccionada' al botón seleccionado
        boton.classList.add('opcion-seleccionada');
      });
    });
  }
}

customElements.define("my-index", MyBodyComponent);
