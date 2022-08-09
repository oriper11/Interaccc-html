console.log ("Bienvenidxs a nuestra birreria") 
class Producto {
  constructor(id, nombre, marca, precio, stock, img) {
      this.id = id
      this.nombre = nombre
      this.marca = marca
      this.precio = precio
      this.stock = stock
      this.img = img
  }
}

const producto1 = new Producto(1, "Blonde", "Santa Birra", 550, 22,"https://mail.google.com/mail/u/0?ui=2&ik=1972978d49&attid=0.6&permmsgid=msg-a:r-5393965382890051532&th=18282efb5b2f17c8&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-OZnm1Ay0BnqbCsA_0QBiyI9yRzGrH_wR5WEzhU7mv4pKDVdKthz7cqT5myH8UKhaFbPNIWrM013oW95AH3WUhgR2J4cnPj-TQV9owFB0aQS1O9cyyRtTUWF8&disp=emb&realattid=18282ec5981ead4e4f22")
const producto2 = new Producto(2, "Double Honey", "Santa Birra", 450, 21,"https://mail.google.com/mail/u/0?ui=2&ik=1972978d49&attid=0.5&permmsgid=msg-a:r-5393965382890051532&th=18282efb5b2f17c8&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ8GE5YA0F6FocTsEQD1QVAi6Iv2hvKjYbpylTvKc_STEzBf0Ar2mN2wZ-KJxg_r5GwwTceUiU1wnEc9CWlrzz3xy6_lMnH2zegOfKbhPJyVK6aQ8bzweMtrzb0&disp=emb&realattid=18282ee5f62563850f6")
const producto3 = new Producto(3, "Apa", "Santa Birra" , 350, 40,"https://mail.google.com/mail/u/0?ui=2&ik=1972978d49&attid=0.1&permmsgid=msg-a:r-5393965382890051532&th=18282efb5b2f17c8&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ9DNqsI_rg-cHPAMSNYuHVzchlVmt-T7Q-2PLRdThItd5p1jrcKrgL0wtnBV5kCVjQUxrzHof2Uq0oHoE_NWN96y8IpO6-OSvcqZ2Aos5AWSFOfCUAKMjiCchY&disp=emb&realattid=18282eccf558d77290a3")
const producto4 = new Producto(4, "Vera IPA", "Santa Birra" , 500, 10,"https://mail.google.com/mail/u/0?ui=2&ik=1972978d49&attid=0.2&permmsgid=msg-a:r-5393965382890051532&th=18282efb5b2f17c8&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ8OimGGeOVVp3OpUK6hTMEiBSnNkcWD4rmeVs788DgOJwuJbbQzwGT5ni5kxlsPlJA9SFWTL0e5VriuCIysXTDrMitG8sEuKTeghsnMwGsAHZjIkRkLLTR1q4M&disp=emb&realattid=18282edd8b77736baea5")
const producto5 = new Producto(5, "Scottish Ale", "Santa Birra" , 600, 40,"https://mail.google.com/mail/u/0?ui=2&ik=1972978d49&attid=0.2&permmsgid=msg-a:r-5393965382890051532&th=18282efb5b2f17c8&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ8OimGGeOVVp3OpUK6hTMEiBSnNkcWD4rmeVs788DgOJwuJbbQzwGT5ni5kxlsPlJA9SFWTL0e5VriuCIysXTDrMitG8sEuKTeghsnMwGsAHZjIkRkLLTR1q4M&disp=emb&realattid=18282edd8b77736baea5")
const producto6 = new Producto(6, "Stout Cream", "Santa Birra" , 500, 5,"https://mail.google.com/mail/u/0?ui=2&ik=1972978d49&attid=0.4&permmsgid=msg-a:r-5393965382890051532&th=18282efb5b2f17c8&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-a63UkbmyDWmS7l2Fnl1mmhObNXNti42foi4l_EUVOQ2CaV5WvXGZAWpmVFciSW3pejzxdDhSiNNUerYvkuFeCtaQn7fNX4wf7O9DSOgJ318LrktlXkge74Pg&disp=emb&realattid=18282ed5636234ae3d64")

const productos = [producto1, producto2, producto3, producto4, producto5, producto6]

const divCervezas = document.getElementById("divCervezas")
productos.forEach((productoArray) => {
  divCervezas.innerHTML += `

  <div class="card productos">
      <div class="card-body">
          <h5 class="card-title">${productoArray.nombre}</h5>
          <p class="card-text">Marca: ${productoArray.marca}</p>
          <p class="card-text">Precio: $${productoArray.precio}</p>
          <p class="card-text">Stock: ${productoArray.stock}</p>
          <img class="card-img-top" src="${productoArray.img}">
  </div>
</div>
  `
})
const divProducto = document.getElementById('divProducto');
const contenedorCarrito = document.getElementById('contenedorCarrito');

const carrito = []
const obtenerInfoProductos = (productosArray) => {
  return productosArray.map(   (productos)=>  productos.obtenerInfo()  ).join('\n');
}
  const agregarAlCarritoById = (productos) => {
  const infoProductos = obtenerInfoProductos(productos);
  const id = prompt('Ingrese el ID del producto que desea agregar al carrito:\n' + infoProductos);
  const producto = productos.find((producto) => producto.id === id);
  if (!producto) return;
  carrito.push(producto);
  alert('Producto agregado al carrito');
}
const mostrarCarrito = (carritoDeProductos) => {
  carritoDeProductos.forEach((producto) => {
      console.log(producto.obtenerAviso(''));
  });
}
const obtenerTotal = (productosArray) => {
  let total = 0;
  productosArray.forEach((producto) => {
      total += producto.precio;
  });
  return total;
}




/*

const productoA = new Producto(7, "Gin", "Beefeater", 1200, 22)
const productoB = new Producto(8, "Campari", "Campari", 900, 21)
const productoC = new Producto(9, "Gancia", "Gancia" , 900, 40)
const productoD = new Producto(10, "Fernet", "Branca" , 1200, 10)
const productos2 = [productoA, productoB, productoC, productoD]

const divAperitivos = document.getElementById("divAperitivos")

productos2.forEach((productoArray) => {
    divAperitivos.innerHTML += `
    <div class="card productos">
        <div class="card-body">
            <h5 class="card-title">${productoArray.nombre}</h5>
            <p class="card-text">Marca: ${productoArray.marca}</p>
            <p class="card-text">Precio: $${productoArray.precio}</p>
            <p class="card-text">Stock: ${productoArray.stock}</p>
    </div>
  </div>
    `
})
const producto7 = new Producto(11, "Santa Julia", "", 500, 22)
const producto8 = new Producto(12, "Animal", "", 1200, 21)
const producto9 = new Producto(13, "Vistalba corte B", "" , 4500, 40)
const producto10 = new Producto(14, "Cordero con piel de lobo", "" , 800, 10)
const productos3 = [producto7, producto8, producto9, producto10]

const divVinos = document.getElementById("divVinos")

productos3.forEach((productoArray) => {
    divVinos.innerHTML += `
    <div class="card productos">
        <div class="card-body">
            <h5 class="card-title">${productoArray.nombre}</h5>
            <p class="card-text">Marca: ${productoArray.marca}</p>
            <p class="card-text">Precio: $${productoArray.precio}</p>
            <p class="card-text">Stock: ${productoArray.stock}</p>
    </div>
  </div>
    `
})
const productoE = new Producto(15, "CocaCola ", "", 200, 22)
const productoF = new Producto(16, "Fanta Pomelo", "", 250, 21)
const productoG = new Producto(17, "Sprite", "" , 300, 40)
const productoH = new Producto(18, "Fanta", "" , 200, 10)
const productos4 = [productoE, productoF, productoG, productoH]

const divBebidasSinAlcohol = document.getElementById("divBebidasSinAlcohol")

productos4.forEach((productoArray) => {
    divBebidasSinAlcohol.innerHTML += `
    <div class="card productos">
        <div class="card-body">
            <h5 class="card-title">${productoArray.nombre}</h5>
            <p class="card-text">Marca: ${productoArray.marca}</p>
            <p class="card-text">Precio: $${productoArray.precio}</p>
            <p class="card-text">Stock: ${productoArray.stock}</p>
    </div>
  </div>
    `
})*/