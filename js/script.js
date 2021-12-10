const productos = [
    {codigo: 1, titulo: "MAT 6MM",        categoria: "YOGA",    precio: 2300.00, stock: 10, vendidos:0},
    {codigo: 2, titulo: "MAT 6MM",        categoria: "YOGA",    precio: 2889.99, stock: 12, vendidos:0},
    {codigo: 3, titulo: "PELOTA 85CM",    categoria: "PILATES", precio: 1380.00, stock: 8,  vendidos:0},
    {codigo: 4, titulo: "PELOTA 65CM",    categoria: "PILATES", precio: 1089.50, stock: 7,  vendidos:0},
    {codigo: 5, titulo: "KIT ELONGACION", categoria: "YOGA",    precio: 1230.00, stock: 15, vendidos:0},
    {codigo: 6, titulo: "KIT YOGA",       categoria: "YOGA",    precio: 4599.00, stock: 14, vendidos:0},
    {codigo: 7, titulo: "PELOTA 85CM",    categoria: "PILATES", precio: 1380.00, stock: 17, vendidos:0},
    {codigo: 8, titulo: "PELOTA 65CM",    categoria: "PILATES", precio: 1089.50, stock: 4,  vendidos:0},
    {codigo: 9, titulo: "PELOTA 65CM",    categoria: "PILATES", precio: 1089.50, stock: 9,  vendidos:0}
]
class articulo {
    constructor(codigo, titulo, categoria, precio, stock){
        this.codigo = codigo;
        this.titulo = titulo.toUpperCase();
        this.categoria = categoria.toUpperCase();
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
        this.vendidos = 0;
    }
}

for (let producto of productos){
    let nombreProd = document.getElementById(`titulo${producto.codigo}`);
    nombreProd.innerHTML = `${producto.titulo}`;
    let precioProd = document.getElementById(`precio${producto.codigo}`);
    precioProd.innerHTML = `$ ${producto.precio}`;
}