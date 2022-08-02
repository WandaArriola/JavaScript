
// inicio login //

function capturar (){
    let emails=document.getElementById("email").value;
    //let pwds=document.getElementById("pwd").value;

    return emails
    //pwds

}

function MostarAlert1() {
    capturarMail = capturar ()
    Swal.fire({
        icon: "succes",
        title: 'iminicio sesión correctamente ',
        text: 'inicistae sesión con el mail' + capturarMail ,

    })
}

let button = document.getElementById('btnEvento')

button.addEventListener('click', () => {
    capturar ()
    MostarAlert1 ()
    
})

// fin login //


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
                //alert ("La patente: " + patente2 + " no debera pagar multa")
                Swal.fire({
                    icon: "succes",
                    title: 'la pante: '+ patente2 + ' no debe pagar multas',
                    text: '' ,
            
                })
                    break
                } else if (velocidad2 > 100){
                    //alert ("La patente: " + patente2 + " debera pagar una multa de $100.000")
                    Swal.fire({
                        icon: "succes",
                        title: 'la pante: '+ patente2 + ' debe pagar una multa de $100.000',
                        text: 'Si desea abonar su multa solicite un turno' ,
                
                    })
                    break
                } else if (velocidad2 > 80){
                    //alert ("La patente: " + patente2 + " debera pagar una multa de $80.000")
                    Swal.fire({
                        icon: "succes",
                        title: 'la pante: '+ patente2 + ' debe pagar una multa de $80.000',
                        text: 'Si desea abonar su multa solicite un turno' ,
                
                    })
                    break
                } else if (velocidad2 > 60){
                    //alert ("La patente: " + patente2 + " debera pagar una multa de $60.000")
                    Swal.fire({
                        icon: "succes",
                        title: 'la pante: '+ patente2 + ' debe paga runa multa de $60.000',
                        text: 'Si desea abonar su multa solicite un turno' ,
                
                    })
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
    let dia2 = capturarDia ()

const listaDias = ["lunes", "martes", "miércoles", "jueves", "viernes"];

console.log(listaDias.includes(dia2))
}


function MostarAlert3() {
    let zona2 = capturarZona ()
    let dia2 = capturarDia ()
    let hora2 = capturarHora()

    Swal.fire({
        icon: "succes",
        title: 'Su turno se solicitó exitosamente',
        text: 'usted tiene turno el día '+ dia2 + ' a las '+ hora2 + ' en '+ zona2 ,

    })
}

let button2 = document.getElementById('btnEvento2')

button2.addEventListener('click', () => {
    turno ()
    zonas4 ()
    storage ()
    MostarAlert3 ()
})

function storage() {

    let zona5 = capturarZona ()
    let dia5 = capturarDia ()
    let hora5= capturarHora()

    localStorage.setItem ("zona", zona5)
    localStorage.setItem ("dia", dia5)
    localStorage.setItem ("hora", hora5)

    let nombre = localStorage.getItem ("zona")
    let dia = localStorage.getItem ("dia")
    let hora = localStorage.getItem ("hora")

    console.log ("zona:" + nombre)
    console.log ("dia:" + dia)
    console.log ("hora" + hora )
}
//fin solicitud turno //

//inicio fetch//
const contenedorComentarios = document.getElementById ("comentarios")

function obtenerComent{
    fetch("https://jsonplaceholder.typicode.com/comments")
    .them ((response) => response.json ())
    .them ((data) =>{
    console.log (data)
    console.log (data[0].body)

    data.forEach(comentario => {
        let columna = document.createElement ("div")
        columna.classname = "col-md-3"
        columna.innerHTML = <p>${comentario}</p>
        contenedorComentarios.appendChild(columna)
    });

    })

}

obtenerComent ()
// fin fetch//


 

