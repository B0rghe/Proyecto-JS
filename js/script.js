class articulo {
    constructor(titulo, categoria, precio, stock) {
        this.titulo = titulo.toUpperCase();
        this.categoria = categoria.toUpperCase();
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
        this.oferta = false;
        this.vendidos = 0;
    }
    descuento() {
        this.precio = this.precio * 0.7;
        this.oferta = true;
    }
    venta(cantVenta) {
        this.vendidos = this.vendidos + cantVenta;
        this.stock = this.stock - cantVenta;
    }
}
const articuloUno = new articulo("mat 6mm", "yoga", 2300.00, 10);
const articuloDos = new articulo("mat 8mm", "yoga", 2889.99, 6);
const articuloTres = new articulo("pelota 85cm", "pilates", 1380.00, 8);
const articuloCuatro = new articulo("pelota 65cm", "pilates", 1089.50, 8);

alert("Lista de Artículos:\n1 - " + articuloUno.titulo + " - $" + articuloUno.precio
                       + "\n2 - " + articuloDos.titulo + " - $" + articuloDos.precio
                       + "\n3 - " + articuloTres.titulo + " - $" + articuloTres.precio
                       + "\n4 - " + articuloCuatro.titulo + " - $" + articuloCuatro.precio);
let codigo = parseInt(prompt("Ingrese el codigo de producto que desea adquirir:"));
let cantidad = parseInt(prompt("Ingrese la cantidad:"));

function precioTotal(cantidad, precio, descuento){
    const total = cantidad * precio;
    if (descuento){
        alert("El precio total con descuento es de $" + total);
    }else {
        alert("El precio total es de $" + total);
    }
}

if ((codigo <= 4) && (codigo >= 1)) {
    switch (codigo) {
        case 1:
            if (cantidad <= articuloUno.stock) {
                if (cantidad > 2){
                    articuloUno.descuento();
                }
                alert(precioTotal(cantidad, articuloUno.precio, articuloUno.oferta))
                articuloUno.venta(cantidad);
            }
            break;
        case 2:
            if (cantidad <= articuloDos.stock) {
                if (cantidad > 2){
                    articuloDos.descuento();
                }
                alert(precioTotal(cantidad, articuloDos.precio, articuloDos.oferta))
                articuloDos.venta(cantidad);
            }
            break;
        case 3:
            if (cantidad <= articuloTres.stock) {
                if (cantidad > 2){
                    articuloTres.descuento();
                }
                alert(precioTotal(cantidad, articuloTres.precio, articuloTres.oferta))
                articuloTres.venta(cantidad);
            }
            break;
        case 4:
            if (cantidad <= articuloCuatro.stock) {
                if (cantidad > 2){
                    articuloCuatro.descuento();
                }
                alert(precioTotal(cantidad, articuloCuatro.precio, articuloCuatro.oferta))
                articuloCuatro.venta(cantidad);
            }
            break;
    }
}else {
    alert("El codigo ingresado no es válido");
}