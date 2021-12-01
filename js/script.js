class articulo {
    constructor(codigo, titulo, categoria, precio, stock){
        this.codigo = codigo;
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
const productos = [];
productos.push(new articulo(1, "mat 6mm",        "yoga",    2300.00, 10));
productos.push(new articulo(2, "mat 8mm",        "yoga",    2889.99, 6));
productos.push(new articulo(3, "pelota 85cm",    "pilates", 1380.00, 8));
productos.push(new articulo(4, "pelota 65cm",    "pilates", 1089.50, 8));
productos.push(new articulo(5, "kit elongación", "yoga",    1230.00, 12));
productos.push(new articulo(6, "kit yoga",       "yoga",    4599.00, 7));
productos.push(new articulo(7, "pelota 85cm",    "pilates", 1380.00, 8));
productos.push(new articulo(8, "pelota 65cm",    "pilates", 1089.50, 8));
productos.push(new articulo(9, "pelota 65cm",    "pilates", 1089.50, 8));

for (let producto of productos){
    let nombreProd = document.getElementById(`titulo${producto.codigo}`);
    nombreProd.innerHTML = `${producto.titulo}`;
    let precioProd = document.getElementById(`precio${producto.codigo}`);
    precioProd.innerHTML = `$ ${producto.precio}`;
}