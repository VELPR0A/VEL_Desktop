import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default function Despesas({valorDespesa, valorGanho}){
    const options = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: `${((valorDespesa / (valorGanho + valorDespesa)) * 100).toFixed(2)}%`,
            align: 'center',
            verticalAlign: 'middle',
            y: 60,
            style: {
                fontSize: '1.1em'
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%'],
                size: '110%'
            }
        },
        series: [{
            type: 'pie',
            name: 'Porcentagem',
            innerSize: '50%',
            data: [
                ['Gastos', valorDespesa],
                ['Ganhos', valorGanho]
            ]
        }]
    }
      
    return( <HighchartsReact highcharts={Highcharts} options={options} /> );
};