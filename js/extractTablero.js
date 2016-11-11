var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1VSGksDN0dnCGHCVdozWm4JwCR8YbI0jYmHmqEynmLhM/pubhtml'; //Funciona

var filledColumns = ['indicador', 'periodo', 'valor','variacion_ia', 'val_2016','var_16_15']

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

  function tabulate(data, selection, columns) {
    //var table = d3.select('#sectorExterno').append('table').attr("style","width:100%")
    var table = selection.append('table').attr("style","width:100%")
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
          console.log("-----------------");
          console.log("row");
          console.log(row);
          console.log("column");
          console.log(column);
          console.log("row[column]");
          console.log(row[column]);
          if(jQuery.inArray(column,filledColumns) !== -1){
            return {column: column, value: row[column]};
          }else{
            return {column: column, value: "free space"};
          }
        });
      })
      .enter()
      .append('td')
        .text(function (d) { return d.value; });

    return table;
  }	

  // render the table(s)
  //las columnas las tengo que incluir para guardar el espacio para ellas, incluso a las que no les paso data
  dataSectorExt = dataTablero.slice(0,6);
  selection = d3.select('#sectorExterno');
  tabulate(dataSectorExt, selection, ['indicador', 'unidad','periodo', 'valor','variacion_ia', 'periodo2','val_2016','var_16_15']); // 2 column table

  dataInversion = dataTablero.slice(6,12);
  selection = d3.select('#inversion');
  tabulate(dataInversion, selection, ['indicador', 'unidad','periodo', 'valor','variacion_ia', 'periodo2','val_2016','var_16_15']); // 2 column table

  dataConsumo = dataTablero.slice(12,17);
  selection = d3.select('#consumo');
  tabulate(dataConsumo, selection,  ['indicador', 'unidad','periodo', 'valor','variacion_ia', 'periodo2','val_2016','var_16_15']); // 2 column table

  dataPrecios = dataTablero.slice(17,23);
  selection = d3.select('#precios');
  tabulate(dataPrecios, selection,  ['indicador', 'unidad','periodo', 'valor','variacion_ia', 'periodo2','val_2016','var_16_15']); // 2 column table

  dataSectorReal = dataTablero.slice(23,33);
  selection = d3.select('#sectorReal');
  tabulate(dataSectorReal,  selection, ['indicador', 'unidad','periodo', 'valor','variacion_ia', 'periodo2','val_2016','var_16_15']); // 2 column table

  dataMonetario = dataTablero.slice(33,36);
  selection = d3.select('#monetario');
  tabulate(dataMonetario,  selection, ['indicador', 'unidad','periodo', 'valor','variacion_ia', 'periodo2','val_2016','var_16_15']); // 2 column table

  dataFiscal = dataTablero.slice(36,40);
  selection = d3.select('#fiscal');
  tabulate(dataFiscal, selection,  ['indicador', 'unidad','periodo', 'valor','variacion_ia', 'periodo2','val_2016','var_16_15']); // 2 column table

}

renderSpreadsheetData();