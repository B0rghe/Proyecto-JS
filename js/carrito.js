let carrito = [];

let prodGuardados = localStorage.getItem("prodGuardados");;
if (prodGuardados){
    carrito = JSON.parse(prodGuardados)
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

function guardarStorage() {localStorage.setItem("prodGuardados", JSON.stringify(carrito))}

function agregarCarrito(cod) {
    let producto = productos.find((prod => prod.codigo == cod))
    carrito.push(producto);
    guardarStorage();
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
    guardarStorage();
    eliminaItem();
}
function eliminaItem() {
    let botones = document.getElementsByClassName("eliminar");

    for(const boton of botones) {
        boton.onclick = () => {
            let id = boton.getAttribute("id");
            idNumber = id.split("_")[1];
            carrito.splice(idNumber, 1);
            guardarStorage();
            creaCarrito();
        }
    }

}