
// inicio loggin //

function capturar (){
    let emails=document.getElementById("email").value;
    let pwds=document.getElementById("pwd").value;

    alert ( "usted inicio sesion con el correo " + emails)
    pwds 
}

let button = document.getElementById('btnEvento')

button.addEventListener('click', () => {
    capturar ()
})

// fin loggin //


// inico consulta de multa //

function capturarPatente (){
    let patentes=document.getElementById("patente").value;
    return patentes 
    
}
function capturarVelovidad (){
    let velocidads=document.getElementById("velocidad").value;
    return velocidads 
}


function calculoMulta() {
    let patente2 = capturarPatente ()

    while (patente2 !== "ESC"){
        if (patente2 !== ""){
            
            const velocidad2 = capturarVelovidad ()
                
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
        patente2 = capturarPatente

    }
}

let button3 = document.getElementById('btnEvento3')

button3.addEventListener('click', () => {
    calculoMulta ()
})
// fin consulta de multa //

// solicitud turno //

const zonas = [

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

function zonas4(){
    let zona3 = capturarZona()
    const buscando = zonas.find((nombre) => nombre.districto === zona3)
    console.log(buscando)
}

function capturarZona(){
    let localidades=document.getElementById("localidad").value;
    return localidades
}
function capturarDia(){
    let dias=document.getElementById("dia").value;
    return dias
}
function capturarHora(){
    let horarios=document.getElementById("horario").value;
    return horarios
}

function turno() {

    let zona2 = capturarZona ()
    let dia2 = capturarDia ()
    let hora2 = capturarHora()


const listaDias = ["lunes", "martes", "miércoles", "jueves", "viernes"];

console.log(listaDias.includes(dia2))

alert("usted tiene turno el día " + dia2 + " a las " + hora2 + " en " + zona2)

}

let button2 = document.getElementById('btnEvento2')

button2.addEventListener('click', () => {
    turno ()
    zonas4 ()
})

//fin solicitud turno //





