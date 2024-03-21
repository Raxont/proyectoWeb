# Parte_1
## _Landing page de hamburguesa_

En este documento encontraras información sobre la realizacion de mi pagina web.

- Introducción
- Video de explicación en las dos vistas, monitor y celular
- ✨Variables✨
- Código HTML
- Código CSS


## Introducción

Rama de repositorio creada para la realizacion de una pagina web de comidas rapidas, es responsive tanto para computadoras como para celulares siguiendo las putas dejadas por el trainer para la realización de esta parte del proyecto.

## Vistas

#### Monitor: 

https://youtu.be/lrjPxY-l6M0

#### Celular:

https://youtube.com/shorts/EhLT7bkGGCI?feature=share

## Variables

Estas son las variables y/o colores usados en esta pagina web

| Nombre | Color |
| ------ | ------ |
| primero | #ff702a |
| segundo | white |
| tercero | #1e1d2b|
| cuarto | #000 |
| quinto | #ffefe8 |
| sexto | #2c2b47 |

## HTML

```html
<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ProyectoWeb</title>
        <link rel="stylesheet" href="css/styles.css" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"
        />
      </head>
      <body>
        <header>
          <div id="Home" class="header">
            <div class="item_1">Foods</div>
            <div class="item_2">
              <h1 class="item_2_h1">Full Website</h1>
              <h2 class="item_2_h2">
                Foods the <br />
                Most precious thing
              </h2>
              <button class="item_2_button">
                <p>Today's Menu</p>
              </button>
            </div>
            <nav class="item_3">
              <ul class="item_3_lista">
                <li>
                  <a href="#Home">Home</a>
                </li>
                <li>
                  <a href="#About">About</a>
                </li>
                <li>
                  <a href="#Menu">Menu</a>
                </li>
                <li>
                  <a href="#Service">Service</a>
                </li>
                <li>
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
              <div class="menu-toggle">
                <span style="color: white">&#9776;</span>
              </div>
            </nav>
            <div class="item_4">
              <img src="store/img/home.png" />
            </div>
          </div>
        </header>
        <main>
          <div class="about" id="About">
            <div class="about_imagen"><img src="store/img/about.png" /></div>
            <div class="about_texto">
              <h3 class="about_texto_h3">About Us</h3>
              <h1 class="about_texto_h1">
                We speak the good <br />
                food language
              </h1>
              <p class="about_texto_p">
                It is a long established fact that a <br />
                be distracted by the readable content <br />
                looking at its layout. The point of
              </p>
              <button class="about_button">
                <p class="about_button_p">Learn More</p>
              </button>
            </div>
          </div>
          <div class="menu" id="Menu">
            <div class="menu_texto">
              <h3 style="color: var(--color-primero)">Food Menu</h3>
              <h1 style="color: var(--color-segundo)">
                Fresh taste and great price
              </h1>
            </div>
            <div class="menu_imagen">
              <ul class="menu_imagen_ul">
                <li class="menu_imagen_ul_li">
                  <i class="bx bx-menu"></i>
                  <img src="store/img/food1.png" />
                  <h2 class="menu_imagen_ul_li_h2">Chicken Burger</h2>
                  <h3 class="menu_imagen_ul_li_h3">Tasty Food</h3>
                  <p style="color: var(--color-primero)">$11.00</p>
                </li>
                <li class="menu_imagen_ul_li">
                  <i class="bx bx-menu"></i>
                  <img src="store/img/food2.png" />
                  <h2 class="menu_imagen_ul_li_h2">Special Beef Burger</h2>
                  <h3 class="menu_imagen_ul_li_h3">Tasty Food</h3>
                  <p style="color: var(--color-primero)">$11.00</p>
                </li>
                <li class="menu_imagen_ul_li">
                  <i class="bx bx-menu"></i>
                  <img src="store/img/food3.png" />
                  <h2 class="menu_imagen_ul_li_h2">Chicken Fry Pack</h2>
                  <h3 class="menu_imagen_ul_li_h3">Tasty Food</h3>
                  <p style="color: var(--color-primero)">$11.00</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="service" id="Service">
            <div class="service_texto">
              <h3 style="color: var(--color-primero)">Services</h3>
              <h1 style="color: var(--color-segundo)">
                We provide best food services
              </h1>
            </div>
            <div class="service_imagen">
              <ul class="service_imagen_ul">
                <li class="service_imagen_ul_li">
                  <img src="store/img/s1.png" />
                  <h2 class="service_imagen_ul_li_h2" style="color: var(--color-primero)">Order</h2>
                  <h3 class="service_imagen_ul_li_h3" style="color: var(--color-segundo)">
                    It is a long established <br />
                    be distracted by the readable <br />
                    looking at its layout
                  </h3>
                </li>
                <li class="service_imagen_ul_li">
                  <img src="store/img/s2.png" />
                  <h2 class="service_imagen_ul_li_h2" style="color: var(--color-primero)">Shipping</h2>
                  <h3 class="service_imagen_ul_li_h3" style="color: var(--color-segundo)">
                    It is a long established <br />
                    be distracted by the readable <br />
                    looking at its layout
                  </h3>
                </li>
                <li class="service_imagen_ul_li">
                  <img src="store/img/s3.png" />
                  <h2 class="service_imagen_ul_li_h2" style="color: var(--color-primero)">Delivered</h2>
                  <h3 class="service_imagen_ul_li_h3" style="color: var(--color-segundo)">
                    It is a long established <br />
                    be distracted by the readable <br />
                    looking at its layout
                  </h3>
                </li>
              </ul>
            </div>
          </div>
          <div class="learn" id="Contact">
            <div class="learn_contain">
              <h1 class="learn_h1">
                We make quality food <br />
                Everyday
              </h1>
              <button class="learn_button">
                <p class="learn_button_p">Learn More</p>
              </button>
            </div>
          </div>
        </main>
        <footer>
          <div class="contenedor">
            <div class="item_footer_1">
              <h1>Menu Links</h1>
              <p style="color: orange">----------------</p>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Service</li>
                <li>Contact</li>
              </ul>
            </div>
            <div class="item_footer_2">
              <h1>Our Service</h1>
              <p style="color: orange">----------------</p>
              <ul>
                <li>Web Design</li>
                <li>Web Development</li>
                <li>Marketing</li>
                <li>Product Management</li>
                <li>Graphic Design</li>
              </ul>
            </div>
            <div class="item_footer_3">
              <h1>Information</h1>
              <p style="color: orange">----------------</p>
              <ul>
                <li>About Us</li>
                <li>Delivery Information</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div class="item_footer_4">
              <h1>Contact Us</h1>
              <p style="color: orange">----------------</p>
              <ul>
                <li><i class="bx bxl-facebook-square"></i></li>
                <li><i class="bx bxl-instagram-alt"></i></li>
                <li><i class="bx bxl-whatsapp"></i></li>
                <li><i class="bx bxl-gmail"></i></li>
              </ul>
            </div>
          </div>
        </footer>
        <script>
          document.addEventListener("DOMContentLoaded", function () {
            const menuToggle = document.querySelector(".menu-toggle");
            const menuList = document.querySelector(".item_3_lista");
    
            menuToggle.addEventListener("click", function () {
              menuList.classList.toggle("show");
            });
          });
        </script>
      </body>
    </html>
```


## CSS

```css
@import url(../css/variables.css);
* {
  margin: 0 0 0 1%;
  padding-right: 1%;
}
body {
  background: var(--color-tercero);
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;
}
.header {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: .5fr 2fr;
  grid-template-areas:
    "food  menus"
    "titulo img"
  ;
  /* background: red; */
  
}
.item_1 {
  width: 60%;
  height: 7%;
  grid-area: food;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 3em;
  color: var(--color-primero);
  background: var(--color-tercero);
  position: fixed;
}
.item_2 {
  width: 100%;
  height: 100%;
  padding-left: 150px;
  grid-area: titulo;
  line-height: 1.5;
  color: var(--color-primero);
  display: flex;
  flex-direction: column;
  word-spacing: 10px;
  /* background: red; */
}
.item_2_h1 {
  width: 100%;
  height: 33%;
  white-space: normal;
  font-size: 7.5rem;
  display: flex;
  align-items: flex-end;
  /* background: blue; */
}
.item_2_h2 {
  width: 100%;
  /* height: 33%; */
  white-space: normal;
  grid-area: explain;
  color: var(--color-segundo);
  font-size: 2.5em;
  line-height: 1em;
  /* background: yellow; */
}
.item_2_button {
  margin-top: 3em;
  width: 25%;
  height: 6%;
  color: var(--color-segundo);
  background: var(--color-primero);
  display: flex;
  align-items: center;
  justify-content: center;
  /* overflow: hidden; */
  /* border: none; */
  word-spacing: 10px;
}
.item_2_button p {
  white-space: normal;
  font-size: 2em;
}
.item_3 {
  grid-area: menus;
  /* background: orange; */
}
.item_3_lista {
  width: 45%;
  height: 7%;
  list-style: none;
  display: flex;
  justify-content: space-between;
  position: fixed;
  align-items: center;
  overflow: hidden;
  background: var(--color-tercero);
}
.item_3_lista li {
  /* background: red; */
  width: 14%;
  height: 14%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.item_3_lista li:hover {
  border: 1px solid green;
  cursor: pointer;
  height: 95%;
}
.item_3_lista li a {
  font-size: 2em;
  text-decoration: none;
  color: var(--color-segundo);
}
.menu-toggle {
  display: none;
  cursor: pointer;
  font-size: 2em;
  margin-left: 20px;
}
.item_4 {
  width: 80%;
  height: 80%;
  grid-area: img;
  margin-top: 0px;
  /* background: white; */
}
.item_4 img {
  width: 90%;
  height: 90%;
}
.about {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "img texto";
  /* background: red; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
}
.about_imagen {
  width: 100%;
  height: 100%;
  grid-area: img;
  /* background: yellow; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.about_imagen img {
  width: 50%;
  height: 50%;
}
.about_texto {
  width: 100%;
  height: 100%;
  grid-area: texto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  /* background: blue; */
  gap: 15px;
  word-spacing: 10px;
}
.about_texto_h3 {
  font-size: 1.5em;
  color: var(--color-primero);
}
.about_texto_h1 {
  font-size: 3em;
  color: var(--color-segundo);
}
.about_texto_p {
  color: var(--color-segundo);
  line-height: 1em;
  font-size: 1.5em;
}
.about_button {
  width: 20%;
  height: 5%;
  color: var(--color-segundo);
  background: var(--color-primero);
  /* border: none; */
  border-radius: 2px;
  word-spacing: 5px;
}
.about_button_p {
  white-space: normal;
  font-size: 1.5em;
}
.menu {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  /* background: red; */
}
.menu_texto {
  width: 50%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: yellow; */
  word-spacing: 10px;
  gap: 30px;
}
.menu_texto h3 {
  font-size: 1.5em;
}
.menu_texto h1 {
  font-size: 3em;
}
.menu_imagen {
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  align-content: center;
  /* background: blue; */
}
.menu_imagen_ul {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  align-content: center;
  justify-content: center;
  /* background: green; */
  gap: 40px;
}
.menu_imagen_ul_li {
  width: 23%;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  background: var(--color-quinto);
  border: 2px solid var(--color-cuarto);
  word-spacing: 5px;
}
.bx-menu {
  align-self: flex-end;
  padding-right: 5px;
  font-size: 3.5em;
  /* background: red; */
}
.menu_imagen_ul_li img {
  width: 60%;
  height: 60%;
}
.service {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  /* background: red; */
}
.service_texto {
  width: 50%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  /* background: yellow; */
  word-spacing: 20px;
}
.service_texto h3 {
  font-size: 1.5em;
}
.service_texto h1 {
  font-size: 3em;
}
.service_imagen {
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  align-content: center;
  /* background: blue; */
}
.service_imagen_ul {
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: flex-start;
  align-content: center;
  justify-content: center;
  gap: 40px;
  /* background: red; */
}
.service_imagen_ul_li {
  width: 23%;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  word-spacing: 5px;
  /* background: blue; */
}
.service_imagen_ul_li_h3 {
  display: flex;
  text-align: center;
  font-size: 1.6em;
  /* background: red;  */
}
.service_imagen_ul_li img {
  width: 60%;
  height: 60%;
}
.learn {
  width: 100%;
  height: 100vh;
  /* background: red; */
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
}
.learn_contain {
  width: 90%;
  height: 80%;
  background: var(--color-quinto);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 50px;
  font-size: 2.5em;
  border: 5px solid var(--color-cuarto);
}
.learn_button {
  width: 20%;
  height: 10%;
  color: var(--color-segundo);
  background: var(--color-primero);
  /* border: none; */
  border-radius: 2px;
  word-spacing: 5px;
}
.learn_button_p {
  white-space: normal;
  font-size: 2.5em;
}
.contenedor {
  width: 100%;
  height: 50vh;
  display: grid;
  grid-template-columns: 1fr repeat(4, 2fr) 1fr;
  grid-template-rows: 1fr 2fr 1fr;
  grid-template-areas:
    ". . . . . . "
    ". menul service information contact ."
    ". . . . . . ";
  /* background: white; */
  color: var(--color-segundo);
}
.item_footer_4 h1,
.item_footer_3 h1,
.item_footer_2 h1,
.item_footer_1 h1 {
  font-size: 2em;
}
.item_footer_4 ul,
.item_footer_3 ul,
.item_footer_2 ul,
.item_footer_1 ul {
  list-style: none;
  font-size: 1.2em;
  /* background: yellow; */
  margin-top: 10px;
  line-height: 1.5;
}
.item_footer_1 {
  grid-area: menul;
  /* background: red; */
  display: flex;
  flex-direction: column;
}
.item_footer_2 {
  grid-area: service;
  /* background: blue; */
}
.item_footer_3 {
  grid-area: information;
  /* background: green; */
}
.item_footer_4 {
  grid-area: contact;
  /* background: yellow; */
}
.item_footer_4 ul {
  display: flex;
  gap: 15px;
}

@media only screen and (max-width: 800px) {
  body {
    width: 100%;
    height: 100%;
    margin: 0 0 0 0;
    padding: 2% 5% 0 5%;
    /* background: blue; */
  }
  .header {
    width: 100%;
    height: 100vh;
    padding-top: 0em;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: 5% 25% 70%;
    grid-template-areas:
      "food menus"
      "titulo titulo"
      "img img"
    /* background: red; */
  }
  .item_1 {
    height: 5%;
    grid-area: food;
    display: flex;
    justify-content: flex-start;
    font-size: 1.5em;
    color: var(--color-primero);
    /* background: blue; */
    position: absolute;
  }
  .item_2 {
    width: 100%;
    height: 100%;
    padding-left: 0px;
    grid-area: titulo;
    line-height: 1.5;
    color: var(--color-primero);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    word-spacing: 15px;
    gap: 0em;
    /* background: red; */
  }
  .item_2_h1 {
    width: 100%;
    white-space: normal;
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    /* background: blue; */
  }
  .item_2_h2 {
    width: 100%;
    white-space: normal;
    grid-area: explain;
    color: var(--color-segundo);
    font-size: 1.3em;
    line-height: 1em;
    display: flex;
    justify-content: center;
    text-align: center;
    /* background: yellow; */
  }
  .item_2_button {
    margin-top: 1.2em;
    width: 35%;
    height: 20%;
    color: var(--color-segundo);
    background: var(--color-primero);
    display: flex;
    align-items: center;
    justify-content: center;
    /* overflow: hidden; */
    /* border: none; */
    word-spacing: 10px;
  }
  .item_2_button p {
    white-space: normal;
    font-size: 1.2em;
  }
  .item_3 {
    display: flex;
    justify-content: flex-end;
    grid-area: menus;
    
    /* background: red; */
  }
  .item_3_lista {
    display: none;
  }
  .menu-toggle {
    display: block;
  }
  .item_3_lista.show {
    display: flex;
    width: 100%;
    height: 70vh;
    margin-right: -1.5em;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding-right: 0;
    position: absolute;
    top: 3.2em;
    background: var(--color-sexto);
  }
  .item_3_lista.show li{
    width: 30%;
    height: 10%;
  }
  .item_3_lista.show li:hover{
    width: 30%;
    height: 10%;
  }
  .item_4 {
    width: 100%;
    height: 60vh;
    margin-top: 0em;
    grid-area: img;
    /* background: blue; */
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
  }
  .item_4 img {
    width: 80%;
    height: 80%;
    /* background: green; */
  }
  .main {
    width: 100%;
    height: 100%;
  }
  .about {
    width: 100%;
    height: 100vh;
    display: grid;
    padding-top: 1em;
    /* padding-bottom: 1em; */
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "texto"
      "img";
    gap: 0px;
    /* background: red; */
  }
  .about_imagen {
    width: 100%;
    height: 60vh;
    grid-area: img;
    /* background: yellow; */
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 0em;
  }
  .about_imagen img {
    width: 90%;
    height: 90%;
  }
  .about_texto {
    width: 100%;
    height: 40vh;
    grid-area: texto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
    align-items: center;
    /* background: blue; */
    gap: 15px;
    word-spacing: 6px;
  }
  .about_texto_h3 {
    font-size: 1em;
    color: var(--color-primero);
  }
  .about_texto_h1 {
    font-size: 2em;
    color: var(--color-segundo);
  }
  .about_texto_p {
    color: var(--color-segundo);
    line-height: 1em;
    font-size: 1em;
  }
  .about_button {
    width: 31%;
    height: 10%;
    color: var(--color-segundo);
    background: var(--color-primero);
    /* border: none; */
    border-radius: 2px;
    word-spacing: 5px;
  }
  .about_button_p {
    white-space: normal;
    font-size: 1.1em;
  }
  .menu {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    /* background: pink; */
  }
  .menu_texto {
    width: 100%;
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background: green; */
    word-spacing: 10px;
    gap: 20px;
  }
  .menu_texto h3 {
    font-size: 1em;
  }
  .menu_texto h1 {
    /* background: red; */
    display: flex;
    text-align: center;
    font-size: 1.8em;
  }
  .menu_imagen_ul {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    align-content: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    /* background: red; */
    gap: 10px;
  }
  .menu_imagen_ul_li {
    width: 60%;
    height: 22%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background: var(--color-quinto);
    border: 2px solid var(--color-cuarto);
    word-spacing: 5px;
    gap: 0px;
    
  }
  .bx-menu {
    align-self: flex-end;
    font-size: 1em;
  }
  .menu_imagen_ul_li_h2 {
    font-size: .8em;
  }
  .menu_imagen_ul_li_h3 {
    font-size: .8em;
  }
  .menu_imagen_ul_li img {
    width: 50%;
    height: 50%;
  }
  .menu_imagen_ul_li p{
    font-size: 0.8em;
  }
  .service {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    /* background: red; */
  }
  .service_texto {
    width: 100%;
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 20px;
    /* background: yellow; */
    word-spacing: 10px;
  }
  .service_texto h3 {
    font-size: 1.2em;
  }
  .service_texto h1 {
    width: 80%;
    font-size: 2em;
  }
  .service_imagen{
    width: 100%;
    height: 80vh
  }
  .service_imagen_ul {
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: flex-start;
    justify-content: flex-start;
    gap: 20px;
    /* background: yellow; */
  }
  .service_imagen_ul_li {
    width: 70%;
    height: 30%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    word-spacing: 5px;
    /* background: blue; */
  }
  .service_imagen_ul_li_h2{
    font-size: 1em;
  }
  .service_imagen_ul_li_h3 {
    display: flex;
    text-align: center;
    font-size: .8em;
    /* background: red;  */
  }
  .service_imagen_ul_li img {
    width: 50%;
    height: 50%;
  }
  .learn {
    width: 100%;
    height: 30vh;
    /* background: red; */
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
  }
  .learn_contain {
    width: 100%;
    height: 90%;
    background: var(--color-quinto);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 50px;
    font-size: 0.8em;
    border: 5px solid var(--color-cuarto);
  }
  .learn_button {
    width: 30%;
    height: 15%;
    color: var(--color-segundo);
    background: var(--color-primero);
    /* border: none; */
    border-radius: 2px;
    word-spacing: 5px;
  }
  .learn_button_p {
    white-space: normal;
    font-size: 1em;
  }
  .contenedor {
    width: 100%;
    height: 50vh;
    padding-left: 2em;
    padding-top: 0.5em;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
      "menul"
      "service"
      "information"
      "contact";
    /* background: white; */
    color: var(--color-segundo);
  }
  .item_footer_4 h1,
  .item_footer_3 h1,
  .item_footer_2 h1,
  .item_footer_1 h1 {
    font-size: 1em;
    padding-top: 1em;
  }
  .item_footer_4 ul,
  .item_footer_3 ul,
  .item_footer_2 ul,
  .item_footer_1 ul {
    list-style: none;
    font-size: 0.8em;
    /* background: yellow; */
    margin-top: 5px;
    line-height: 1.5;
  }
  .item_footer_1 {
    grid-area: menul;
    /* background: red; */
  }
  .item_footer_2 {
    grid-area: service;
    /* background: blue; */
  }
  .item_footer_3 {
    grid-area: information;
    /* background: green; */
  }
  .item_footer_4 {
    height: 12vh;
    grid-area: contact;
    /* background: yellow; */
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .item_footer_4 ul {
    display: flex;
    gap: 10px;
  }
  .item_footer_4 p {
    padding-right: 0.5em;
    /* background: red; */
  }
}
```

> Hecho por `Camilo Andres Navas Medina`.



