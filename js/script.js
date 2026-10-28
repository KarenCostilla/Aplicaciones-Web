function temperaturasSemana(){
    let diasSemana=["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
    let temperaturas= new Array(7);
    let suma=0;
    let ids=["tempLunes","tempMartes","tempMiercoles","tempJueves","tempViernes","tempSabado","tempDomingo"];
 
    for(let i=0; i<temperaturas.length;i++){
        let valor=document.getElementById(ids[i]).value;
        temperaturas[i]=parseFloat(valor);
        suma+=temperaturas[i];
    }
 
    let promedio=suma/temperaturas.length;
    let max=Math.max(...temperaturas);
    let min=Math.min(...temperaturas);
 
    document.getElementById("impPromedio").innerHTML="Promedio semanal: "+promedio;
    document.getElementById("impMaxima").innerHTML="Maxima temperatura: "+max;
    document.getElementById("impMinima").innerHTML="Minima temperatura: "+min;
}
 
let tarifas=[
        [120,240,210],
        [240,280,300],
        [400,600,3000]
    ]
function calcularSalario(){
 
 
    let filaPuesto=parseInt(document.getElementById("puesto").value);
    let columnaNivel=parseInt(document.getElementById("nivel").value);
    let hora=parseFloat(document.getElementById("horas").value);
 
    let porHora=tarifas[filaPuesto][columnaNivel];
    let total= porHora*hora;
 
    document.getElementById("impSalario").innerHTML="Total: "+total;
}
 
function mostrarOcho() {
    let matrizOcho=[
        [0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 1, 1, 0]
    ];
    let resultado= "";
    for (let i=0; i<matrizOcho.length;i++){
        for (let j = 0; j < matrizOcho[i].length; j++) {
            if (matrizOcho[i][j]===1){
                resultado+= '<span style="font-weight: bold;"> * </span>';
            } else {
                resultado+=" - ";
            }
        }
        resultado+= "<br>";
    }
    document.getElementById("impOcho").innerHTML=resultado;
}

function cortarCalif() {
    let calificaciones=[1,2,3,4,5,6,7,8,9,10];
    let inicio=parseInt(document.getElementById("indiceInicio").value);
    let cantidad=parseInt(document.getElementById("cantidadCortar").value);

    document.getElementById("impOriginal").innerHTML="Arreglo original: "+calificaciones;

    let califCortadas=calificaciones.splice(inicio,cantidad);

    document.getElementById("impCortadas").innerHTML="Calificaciones cortadas: " + califCortadas;
    document.getElementById("impRestantes").innerHTML="Arreglo original después del corte: " + calificaciones;
}