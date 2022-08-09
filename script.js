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

const producto1 = new Producto(1, "Blonde", "Santa Birra", 550, 22,"https://img.freepik.com/foto-gratis/vaso-cerveza-fria-fotografia-macro_53876-42355.jpg?w=1060&t=st=1660004699~exp=1660005299~hmac=2db6a6b3866498cfe0fe720e854b2e5463fb365bd9e07d0d55e1648ef822ba19 ")
const producto2 = new Producto(2, "Double Honey", "Santa Birra", 450, 21,)
const producto3 = new Producto(3, "Apa", "Santa Birra" , 350, 40,)
const producto4 = new Producto(4, "Vera IPA", "Santa Birra" , 500, 10,"https://img.freepik.com/foto-gratis/vaso-cerveza-delante-fondo-borroso_23-2148098787.jpg?w=1060&t=st=1660004842~exp=1660005442~hmac=a5228437a19e270a8558f953d22f4aa56a1f501a95cf95e18f48c442c2a7e4dc")
const producto5 = new Producto(5, "Scottish Ale", "Santa Birra" , 600, 40,"https://img.freepik.com/foto-gratis/pintas-macro-fotografia-cerveza-barril_53876-32257.jpg?w=996&t=st=1660004788~exp=1660005388~hmac=c15a9467c4cf17fcab2223465ec9581fdc87a757742d7c7ffd939fc2aa09fc35")
const producto6 = new Producto(6, "Stout Cream", "Santa Birra" , 500, 5,)

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
          <img class="card-img-top" src="${productoArray.img}" alt="Card image cap">
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