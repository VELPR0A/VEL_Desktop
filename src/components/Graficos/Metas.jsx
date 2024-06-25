import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default function Metas({valores}){
    const options = {
        chart: {
            zooming: {
                type: 'x'
            }
        },
        title: {
            text: 'Faturamento Mensal',
            align: 'left'
        },
        subtitle: {
            text: document.ontouchstart === undefined ?
                'Clique e puxe o gráfico para ampliar' :
                'Clique e puxe o gráfico para ampliar',
            align: 'left'
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: 'Ganhos mensais'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [
                            1,
                            Highcharts.color(Highcharts.getOptions().colors[0])
                                .setOpacity(0).get('rgba')
                        ]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },
        
        series: [{
            type: 'area',
            name: 'Faturamento - R$',
            data: valores.map(valor => {
                return [new Date(valor.data).getTime(), valor.ganho]
            }).sort((a, b) => a[0] - b[0])
        }]
    }
      
    return( <HighchartsReact highcharts={Highcharts} options={options} /> );
};

