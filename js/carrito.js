let carrito = [];

let prodGuardados = localStorage.getItem("prodGuardados");;
if (prodGuardados){
    carrito = JSON.parse(prodGuardados)
    creaCarrito();
}

for (const producto of productos) {
    $(`#prod${producto.codigo}`).click(() =>agregarCarrito(producto.codigo));
}

function guardarStorage() {localStorage.setItem("prodGuardados", JSON.stringify(carrito))}

function agregarCarrito(cod) {
    let producto = productos.find((prod => prod.codigo == cod))
    if (producto.stock > 0) {
        producto.stock--;
        producto.vendidos++;
        carrito.push(producto);
        guardarStorage();
        creaCarrito();
        console.log("Producto agregado");
    }else {
        console.log("No hay mas stock");
    }
}
function creaCarrito() {
    let precioTotal = 0;
    let carro = document.getElementById("carrito");
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