var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1VSGksDN0dnCGHCVdozWm4JwCR8YbI0jYmHmqEynmLhM/pubhtml'; //Funciona

var filledColumns = ['periodo', 'valor','variacion_ia', 'val_2016'];
var firstAndLastColumns = ['indicador','var_16_15']

function renderSpreadsheetData() {
  Tabletop.init( { key: public_spreadsheet_url,
                  debug:true,
                  callback: draw,
                  simpleSheet: true } )
}

function draw(dataTablero, tabletop) {
	// draw chart
	console.log("Data Tablero:");
	console.log(dataTablero);

  function tabulate(data, selection, columns,tipoDeTabla) {
    /*Argumentos: data: data a incluir. Cortar la data necesaria, como se ve en los llamados abajo.
                  selection: elemento adonde meter la tabla
                  columnas: elegir columnas a graficar
                  tipoDeTabla: true para tabla grande, false para tabla comprimida
    */

    if(tipoDeTabla){
      var table = selection.append('table').attr("style","width:100%");
    }else{
      var table = selection.append('table')
                      .attr("id","collapsed-table")
                      .attr("data-mode","reflow")
                      .attr("class","ui-responsive ui-table-reflow table-stroke")
    }
 
    var thead = table.append('thead')
    var tbody = table.append('tbody');

    // // append the header row
    // thead.append('tr')
    //   .selectAll('th')
    //   .data(columns).enter()
    //   .append('th')
    //     .text(function (column) { return column; });

    // create a row for each object in the data
    var rows = tbody.selectAll('tr')
      .data(data)
      .enter()
      .append('tr');

    // create a cell in each row for each column
    var cells = rows.selectAll('td')
      .data(function (row) {

        return columns.map(function (column) {

          //Las columnas que estn en filledColumns
          if(jQuery.inArray(column,filledColumns) !== -1){
            return {column: column, value: row[column]};
          }//Las columnas first and last
          else if(jQuery.inArray(column,firstAndLastColumns) !== -1){
            return {column: column, value: row[column]};
          }else //Las demas (son las que tiene valores fijos)
          {
            return {column: column, value: "free space",id:"unidad"};
          }
        });
      })
      .enter()
      .append('td')
        .text(function (d) { return d.value; })
        .attr("class",function (d,i) { 
  
            return "number"+i;

        })
        .attr("id",function (d,i) {
          if(d.id !== undefined){
            return d.id+""+i;
          } 
        });



        if(tipoDeTabla === false){// en caso de que corra la funcion para collapsed, creo headers

          headRows = thead.selectAll('tr')
          .data([0])
          .enter()
          .append('tr');

          headCells = headRows.selectAll('th')
          .data([1,2,3,4,5,6,7,8])
          .enter()
          .append('th')
          .text(function (d) {return d;});

        }//cierro if

    return table;
  }	

  // render the table(s)
  //las columnas las tengo que incluir para guardar el espacio para ellas, incluso a las que no les paso data
  dataSectorExt = dataTablero.slice(0,6);
  selection = d3.select('#sectorExterno');
  tabulate(dataSectorExt, selection, ['indicador', 'unidad','periodo', 'valor','variacion_ia', 'periodo2','val_2016','var_16_15'],true); // 2 column table

  dataInversion = dataTablero.slice(6,12);
  selection = d3.select('#inversion');
  tabulate(dataInversion, selection, ['indicador', 'unidad','periodo', 'valor','variacion_ia', 'periodo2','val_2016','var_16_15'],true); // 2 column table

  dataConsumo = dataTablero.slice(12,17);
  selection = d3.select('#consumo');
  tabulate(dataConsumo, selection,  ['indicador', 'unidad','periodo', 'valor','variacion_ia', 'periodo2','val_2016','var_16_15'],true); // 2 column table

  dataPrecios = dataTablero.slice(17,23);
  selection = d3.select('#precios');
  tabulate(dataPrecios, selection,  ['indicador', 'unidad','periodo', 'valor','variacion_ia', 'periodo2','val_2016','var_16_15'],true); // 2 column table

  dataSectorReal = dataTablero.slice(23,33);
  selection = d3.select('#sectorReal');
  tabulate(dataSectorReal,  selection, ['indicador', 'unidad','periodo', 'valor','variacion_ia', 'periodo2','val_2016','var_16_15'],true); // 2 column table

  dataMonetario = dataTablero.slice(33,36);
  selection = d3.select('#monetario');
  tabulate(dataMonetario,  selection, ['indicador', 'unidad','periodo', 'valor','variacion_ia', 'periodo2','val_2016','var_16_15'],true); // 2 column table

  dataFiscal = dataTablero.slice(36,40);
  selection = d3.select('#fiscal');
  tabulate(dataFiscal, selection,  ['indicador', 'unidad','periodo', 'valor','variacion_ia', 'periodo2','val_2016','var_16_15'],true); // 2 column table
  
  /*-----Data para tablero comprimido ----------------*/
  dataTotal = dataTablero.slice(0,40);
  selection = d3.select('#collapsedTableroContainer');
  tabulate(dataTotal, selection,  ['indicador', 'unidad','periodo', 'valor','variacion_ia', 'periodo2','val_2016','var_16_15'],false); // 2 column table

  $('#sectorExterno #unidad1').html('Millones de U$S');
  $('#sectorExterno #unidad5').html('Anual');
  $('#sectorExterno tr:nth-child(6) td#unidad1 ').html('U$S/Ton');
  $('#inversion #unidad1').html('Millones de U$S');
  $('#inversion #unidad5').html('Anual');
  $('#inversion tr:nth-child(3) td#unidad1 ').html('Variación anual en %');
  $('#inversion tr:nth-child(4) td#unidad1 ').html('Variación anual en %');
  $('#inversion tr:nth-child(5) td#unidad1 ').html('Variación anual en %');
  $('#inversion tr:nth-child(6) td#unidad1 ').html('');
  $('#consumo #unidad1').html('');
  $('#consumo tr:nth-child(1) td#unidad1 ').html('Variación anual en %');
  $('#consumo tr:nth-child(5) td#unidad1 ').html('% de la PEA');
  $('#consumo #unidad5').html('');
  $('#precios #unidad1').html('enero 01 = 1');
  $('#precios tr:nth-child(1) td#unidad1 ').html('');
  $('#precios tr:nth-child(2) td#unidad1 ').html('');
  $('#precios tr:nth-child(3) td#unidad1 ').html('$/U$S');
  $('#precios #unidad5').html('Anual');
  $('#sectorReal #unidad1').html('Variación anual en %');
  $('#sectorReal #unidad5').html('Anual');
  $('#monetario tr:nth-child(1) td#unidad1 ').html('Tasa nominal anual');
  $('#monetario tr:nth-child(2) td#unidad1 ').html('Millones de $');
  $('#monetario tr:nth-child(3) td#unidad1 ').html('Millones de U$S');
  $('#monetario #unidad5').html('Acum.');
  $('#fiscal #unidad1').html('Millones de U$S');
  $('#fiscal #unidad5').html('Anual en %');

  // Agrego separadores de "Ultimo dato disponible" y "Acumulado" en CollapsedTable
  $('#collapsedTableroContainer #collapsed-table td.number2').before('<td class="udd">Último dato disponible</td>')
  $('#collapsedTableroContainer #collapsed-table td.number5').before('<td class="acumulado">Acumulado</td>')

}

renderSpreadsheetData();