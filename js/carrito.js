let carrito = [];

if (carrito !== null){
    carrito = JSON.parse(localStorage.getItem("prodGuardados"));;
    creaCarrito();
}

document.getElementById("prodUno")
    .onclick = () => agregarCarrito(1);
document.getElementById("prodDos")
    .onclick = () => agregarCarrito(2);
document.getElementById("prodTres")
    .onclick = () => agregarCarrito(3);
document.getElementById("prodCuatro")
    .onclick = () => agregarCarrito(4);
document.getElementById("prodCinco")
    .onclick = () => agregarCarrito(5);
document.getElementById("prodSeis")
    .onclick = () => agregarCarrito(6);
document.getElementById("prodSiete")
    .onclick = () => agregarCarrito(7);
document.getElementById("prodOcho")
    .onclick = () => agregarCarrito(8);
document.getElementById("prodNueve")
    .onclick = () => agregarCarrito(9);

function agregarCarrito(cod) {
    let producto = productos.find((prod => prod.codigo == cod))

    // producto = productos.find(function (producto) {
    //     if(producto.codigo == cod)
    //         return true;
    //     else
    //         return false;
    //     }
    // );

    carrito.push(producto);

    localStorage.setItem("prodGuardados", JSON.stringify(carrito));

    creaCarrito();
}
function creaCarrito() {
    let carro = document.getElementById("carrito");
    let precioTotal = 0
    carro.innerHTML = "";
    htmlString = "<ul>";
    for(const i in carrito ) {
        let producto = carrito[i]
        htmlString += `
            <li><button id="carrito_${i}" class="eliminar"> 🗑️</button>
                $ ${producto.precio} - ${producto.titulo}
            </li>`
        precioTotal += producto.precio;
    }
    htmlString += "</ul>";

    carro.innerHTML = htmlString;

    let carroPrecio = document.getElementById("pTotal");
    carroPrecio.innerHTML = `TOTAL: $ ${precioTotal}`;

    eliminaItem();
}
function eliminaItem() {
    let botones = document.getElementsByClassName("eliminar");

    for(const boton of botones) {
        boton.onclick = () => {
            let id = boton.getAttribute("id");
            idNumber = id.split("_")[1];
            carrito.splice(idNumber, 1);
            creaCarrito();
        }
    }

}