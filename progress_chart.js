/**
 * Created by Vahndi.Minah on 5/8/2016.
 */
$(function () {
    $('#progress_chart').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: [
                '2016', '2017', '2018'
            ],
            crosshair: true,
            title: {
                text: 'Year'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: '# Stations'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.0f} </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Design Development',
            data: [31, 22, 6]

        }, {
            name: 'Under Construction',
            data: [0, 7, 11]

        }, {
            name: 'Complete',
            data: [0, 2, 14]

        }]
    });
});