
alert("Abrir la consola o presione F12")

fin=0, precio=0;
for (i = 1; i >= fin ; i++){
    let num = Number(prompt("Usuario ingrese el precio de su medicamento:"));
    precio = precio + num;
    let n = Number(prompt("Desea continuar ingresando más precios: Si: 1 O No: 0"));
    if(n == 1){i = 0 }
    else{break;}
}
console.log(`Su descuento es de: ${precio*0.10}`);
console.log(`El total a pagar es de: ${precio}`);