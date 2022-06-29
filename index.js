

function solicitarPatente() {
    let patente = prompt("Este programa indica el saldo de la multa según la velocidad. Ingrese su patente (ESC para salir)")
    return patente;
}


function solicitarVelocidad() {
    let velocidad = parseInt(prompt("ingrese si uds circulaba a: \n menos de 50kmh \n mas de 60kmh \n mas de 80kmh \n mas de 100kmh"))
    return velocidad
}


function calculoMulta() {
    let patente2 = solicitarPatente ()

    while (patente2 !== "ESC"){
        if (patente2 !== ""){
            
            velocidad2 = solicitarVelocidad ()
                
            if (velocidad2 < 60){
                    alert ("La patente: " + patente2 + " no debera pagar multa")
                    break
                } else if (velocidad2 == 60){
                    alert ("La patente: " + patente2 + " debera pagar una multa de $60.000")
                    break
                } else if (velocidad2 == 80){
                    alert ("La patente: " + patente2 + " debera pagar una multa de $80.000")
                    break
                } else if (velocidad2 == 100){
                    alert ("La patente: " + patente2 + " debera pagar una multa de $100.000")
                    break
                }

        }else{
            alert ("ingrese una patente")
        }
        patente2 = solicitarPatente ()

    }
}




calculoMulta()



