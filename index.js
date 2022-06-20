
let monto= parseInt(prompt("ingrese el monto de dinero que quiere invertir"));

let retiro= parseInt (prompt("ingrese en que mes quire retirar el deinero"))

for (let i=1; i<= retiro; i++){
    let resultado = monto*i
    if (i===retiro+1){
        break
    } else{

    console.log ("en el mes " + i + " usted va a retirar "+ resultado)
    }
}
