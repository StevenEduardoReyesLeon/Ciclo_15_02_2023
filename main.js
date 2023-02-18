
alert("Abrir la consola o presione F12")

let pf, nota=0;

for (i = 1; i <= 3; i++){

    let num = Number(prompt(`Ingrese su nota del parcial ${i}`));
    nota = nota + num;
}

    pf=((nota/3)*.55);

    let ef = (Number(prompt("Ingrese la nota de su examen final:"))*.3);

    let tf = (Number(prompt("Ingrese la nota de su trabajo final:"))*.15);

    alert (`Su promedio final es: ${pf+ef+tf}`);

