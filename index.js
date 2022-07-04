

/*function solicitarPatente() {
    let patente = prompt("Este programa indica el saldo de la multa según la velocidad. Ingrese su patente (ESC para salir)")
    return patente;
}


function solicitarVelocidad() {
    let velocidad = parseInt(prompt("ingrese la velocidad a la que circulaba"))
    return velocidad
}


function calculoMulta() {
    let patente2 = solicitarPatente ()

    while (patente2 !== "ESC"){
        if (patente2 !== ""){
            
            let velocidad2 = solicitarVelocidad ()
                
            if (velocidad2 < 60){
                    alert ("La patente: " + patente2 + " no debera pagar multa")
                    break
                } else if (velocidad2 > 100){
                    alert ("La patente: " + patente2 + " debera pagar una multa de $100.000")
                    break
                } else if (velocidad2 > 80){
                    alert ("La patente: " + patente2 + " debera pagar una multa de $80.000")
                    break
                } else if (velocidad2 > 60){
                    alert ("La patente: " + patente2 + " debera pagar una multa de $60.000")
                    break
                }

        }else{
            alert ("ingrese una patente")
        }
        patente2 = solicitarPatente ()

    }
}

calculoMulta()*/


// busqueda de zona //

const zona = [

    { districto: "Vince Lopez", direccion: "Savedra 1256" },
    { districto: "San Isidro", direccion: "Peron 5896" },
    { districto: "San Fernando", direccion: "Pirovano 8956" },
    { districto: "Tigre", direccion: "Quiroz 2878" },
    { districto: "Escobar", direccion: "Sarmiento 7856" },
    { districto: "Pilar", direccion: "Moreno 5896" },
    { districto: "José C. Paz", direccion: "Liniers 3256" },
    { districto: "Malvinas Argentinas", direccion: "Pasos 1256" },
    { districto: "San miguel", direccion: "Victoria 586" },
    { districto: "San Martín", direccion: "Ilia 7926" },
]


alert("Este programa de verificación de multas corresponde a zona norte")

function solicitarZona() {
    let zona = prompt("Indique el districto donde fue cometida la infracción")
    return zona;
}

let zona2 = solicitarZona()

const buscando = zona.find((nombre) => nombre.districto === zona2)

console.log (buscando)

// fin busqueda //

//solicitud de turno para dia y horario//

function solicitarDia() {
    let dia = prompt("ingrese un día de la semana de lunes a viernes")
    return dia
}

function solicitarHora() {
    let hora = parseInt(prompt("los horarios disponibles son: \n 10:30 \n 11:45 \n 13:15 \n 15:00"))
    return hora
}

function turno() {

    dia2 = solicitarDia()
    hora2 = solicitarHora()

    const listaDias = ["lunes", "martes", "miércoles", "jueves", "viernes"];

    console.log(listaDias.includes(dia2))
    
    alert("usted tiene turno el día " + dia2 + " a las " + hora2 + " en " + zona2 )

}

turno ()

//fin solicitud de dia y horario //