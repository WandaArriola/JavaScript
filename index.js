
let patente = prompt("Este programa indica el saldo de la multa. Ingrese su patente (ESC para salir)")
function solicitarPatente() {

    return patente;
}
solicitarPatente()


let velocidad = parseInt(prompt("ingrese a la velocidad que circulaba"))
function solicitarVelocidad() {

    return velocidad
}
solicitarVelocidad()


function calculoMulta() {
    let patente2 = solicitarPatente()
    while (patente2 !== "ESC") {
        if (patente2 !== " ") {
            solicitarVelocidad()
            if (velocidad <= 60) {
                alert("la patente: " + patente + " no debe multas")
                break
            } else {
                alert ( "la patente " + patente + " debe pagar una multa de $60.000")
                break
            }
        }else {
            alert("ingrse su patente")
        }
    }
}

calculoMulta()



