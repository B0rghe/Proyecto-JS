let cantidad = parseInt(prompt("Ingrese la cantidad que desea adquirir:"));
const precioUnit = 3490;
if (cantidad > 0) {
    let precioTot = cantidad * precioUnit;
    let formaPago = parseInt(prompt("Ingrese modo de pago, 1 para pago contado o 2 para pago en cuotas"));
    if (formaPago == 1) {
        alert("El precio final es de " + precioTot);
    }else if (formaPago == 2) {
        let cantCuotas = parseInt(prompt("Ingrese la cantidad de cuotas, puede ser 3, 6, 12 o 18:"));
        let precioCuota = precioTot / cantCuotas;
        switch (cantCuotas) {
            case 3:
                alert("El precio final es de 3 cuotas de $" + precioCuota);
                break;
            case 6:
                alert("El precio final es de 6 cuotas de $" + precioCuota);
                break;
            case 12:
                alert("El precio final es de 12 cuotas de $" + precioCuota);
                break;
            case 18:
                alert("El precio final es de 18 cuotas de $" + precioCuota);
                break;
            default:
                alert("Cantidad no valida");
                break;
        }
    }else {
        alert("Valor ingresado no valido")
    }
}else {
    alert("No ha ingresado un valor valido");
}
