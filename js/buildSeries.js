function buildSeries(){
//RESERVAS
dataReservas = [{
    name: "Reservas",
    data: series.reservas,
    type: "area",
    valueDecimals: 2
}];
dataReservas_var = [{
    name: "Variación anual [%]",
    data: series.reservas_var,
    type: "column",
    valueDecimals: 2,
    tooltip: {valueSuffix: '%'}
}];
//EXPORTACIONES
dataExportaciones = [{
    name: "Exportaciones",
    data: series.exportaciones,
    type: "area",
    valueDecimals: 2
}];
dataExportaciones_var = [{
    name: "Variación anual [%]",
    data: series.exportaciones_var,
    type: "column",
    valueDecimals: 2,
    tooltip: {valueSuffix: '%'}
}];
//IMPORTACIONES
dataImportaciones = [{
    name: "Importaciones",
    data: series.importaciones,
    type: "area",
    valueDecimals: 2,
    tooltip: {valueSuffix: '%'}
}];
dataImportaciones_var = [{
    name: "Variación anual [%]",
    data: series.importaciones_var,
    type: "column",
    valueDecimals: 2
}];
//PRECIO DE LA SOJA
dataSoja = [{
    name: "Precio de la Soja",
    data: series.precio_soja,
    type: "area",
    valueDecimals: 2
}];
dataSoja_var = [{
    name: "Variación anual [%]",
    data: series.precio_soja_var,
    type: "column",
    valueDecimals: 2,
    tooltip: {valueSuffix: '%'}
}];
//INDICE CONSTRUYA
dataConstruya = [{
    name: "Importaciones",
    data: series.indice_construya,
    type: "area",
    valueDecimals: 2
}];
dataConstruya_var = [{
    name: "Variación anual [%]",
    data: series.indice_construya_var,
    type: "column",
    valueDecimals: 2,
    tooltip: {valueSuffix: '%'}
}];

//ACTIVIDAD
dataActividad = [{
    name: "Actividad",
    data: series.actividad,
    type: "area",
    valueDecimals: 2
},
{
    name: "Actividad Desest.",
    data: series.actividad_desest,
    type: "line",
    lineWidth: 1,
    marker: {radius: 0},
    valueDecimals: 2
}

];
dataActividad_var = [{
    name: "Variación anual [%]",
    data: series.actividad_var,
    type: "column",
    valueDecimals: 2,
    tooltip: {valueSuffix: ''}
}];

//EXPvsIMP
dataBalance = [{
    name: "Exportaciones",
    data: series.exportaciones,
    type: "line",
    valueDecimals: 2
},
{
    name: "Importaciones",
    data: series.importaciones,
    type: "line",
    valueDecimals: 2
}

];
dataBalance_var = [{
    name: "Balance",
    data: series.balance,
    type: "column",
    valueDecimals: 2,
    negativeColor: '#FF5A5F',
    tooltip: {valuePrefix: '$',
              valueSuffix: 'USD'}
}];

}
