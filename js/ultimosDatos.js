var ultimosDatos = [0];
var tituloDatos = [0];
var ultimosDatos_var = [0];
var month = new Array(12);
month[0] = "Ene";
month[1] = "Feb";
month[2] = "Mar";
month[3] = "Abr";
month[4] = "May";
month[5] = "Jun";
month[6] = "Jul";
month[7] = "Ago";
month[8] = "Sep";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dic";

function drawUltimosDatos(dataset, dataset_var, chartTitle, yAxis, yColumns){
$('#ultimosDatosTable').empty();
//Empty ultimosDatosTable
ultimosDatos.length = 0;
tituloDatos.length = 0;
ultimosDatos_var.length = 0;
dataset.forEach(cropArrays);
ultimosDatos_var = dataset_var[0].data.slice(-12);

//Set titulo + unidades
$('#ultimosDatosSubtitle').html(chartTitle);
$('#ultimosDatosUnidades').html(yAxis);

rowTitulos = "<tr><td>Período</td>";
tituloDatos.forEach(sumarCols);
rowTitulos += "<td>"+dataset_var[0].name+"</td></tr>"
$('#ultimosDatosTable').append( rowTitulos );
//Carga la fila de titulos y la despliega en la table

for (row = 0; row < 12; row++) {
    var periodo = new Date(ultimosDatos[0][row][0]);
    rowDatos = "<tr><td>"+month[periodo.getUTCMonth()]+"-"+periodo.getUTCFullYear()+"</td>";
    ultimosDatos.forEach(sumarDatos);
    rowDatos += "<td>"+ ultimosDatos_var[row][1] + "</td></tr>";
    $('#ultimosDatosTable').append( rowDatos );
};
}

function cropArrays(value,index,obj){
    ultimosDatos[index] = value.data.slice(-12);
    tituloDatos[index] = value.name;
};
function sumarCols(value,index,obj){
    rowTitulos += "<td>"+value+"</td>";
};
function sumarDatos(value,index,obj){
    rowDatos += "<td>"+value[row][1]+"</td>"
};
