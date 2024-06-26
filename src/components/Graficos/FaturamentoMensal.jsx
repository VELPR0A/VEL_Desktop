import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default function FaturamentoMensal({listaFaturamento}){
    const options = {
        chart: {
            type: 'column'
        },
        title: {
            text: '',
            align: 'left'
        },
        xAxis: {
            type: 'week'
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Faturamento'
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [
            {
                name: 'Faturado R$',
                data: [["Segunda",12000],["Terça",45000],["Quarta",30000], ["Quinta", 400],["Sexta", 25000], ["Sábado", 15000], ["Domingo", 11000]]
            },
            {
                name: 'Meta R$',
                data: [["Segunda",12000],["Terça",45000],["Quarta",30000], ["Quinta", 400],["Sexta", 25000], ["Sábado", 12000], ["Domingo", 5000]]
            }
        ]
    }
      
    return( <HighchartsReact highcharts={Highcharts} options={options} /> );
};