
alert("Abrir la consola o presione F12")

let num = Number(prompt("Usuario ingrese un número para multriplicar"))
for (let b= 1; b<= num; b++ ){
    console.log(`Tabla del ${b}`);
for (let i = 1; i<=10; i++) {
    console.log(`${b} X ${i} = ${b*i}`);
}
}
