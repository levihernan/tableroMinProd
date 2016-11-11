function drawCharts(dataset, dataset_var, chartTitle, yAxis, yColumns){
  Highcharts.setOptions({
	lang: {
		months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    shortMonths: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',  'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
	},
  chart: {
  }
});


  Highcharts.chart('chart1',{
    series: dataset,
    yAxis: {
              title: {
                enabled: true,
                text: yAxis
              }
        },
    title: {
              text: chartTitle
            },
    xAxis: {
            type: 'datetime'
        },
    legend: {
            enabled: false
    },
    exporting: { enabled: false },
    credits: { enabled: false },
    plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: { x1: 0, y1: 1, x2: 0, y2: 0},
                        stops: [
                            [0, '#fff'],
                            [1, '#ABCBEA']
                        ]
                    }
                  }
                }
  });
  Highcharts.chart('chart2',{
    xAxis: {
            type: 'datetime'
        },
    legend: {
            enabled: false
    },
    series: dataset_var,
    exporting: { enabled: false },
    credits: { enabled: false,
              text: "Ministerio de Producción y Desarrollo",
              href: false},
    yAxis: {
            	title: {
                enabled: true,
                text: yColumns}
        },
    title: {
              enabled: false,
              text: ''
            }
  });
  drawUltimosDatos(dataset, dataset_var, chartTitle, yAxis, yColumns);
};
