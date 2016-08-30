/**
 * Created by Vahndi.Minah on 5/8/2016.
 */
$(function () {
    $('#discipline_cost_chart').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Disciplines',
            colorByPoint: true,
            data: [{
                name: 'Architectural',
                y: 15.1545052,
                sliced: true,
                selected: true
            }, {
                name: 'Civil / Structural',
                y: 21.19074604
            }, {
                name: 'Mechanical',
                y: 9.344788119
            }, {
                name: 'Plumbing',
                y: 5.819602191
            }, {
                name: 'Electrical',
                y: 4.099204273
            }, {
                name: 'Instrumentation and Controls',
                y: 17.42980829
            }, {
                name: 'Communications',
                y: 9.268868303
            }, {
                name: 'Signal Work',
                y: 7.430193633
            }, {
                name: 'Environmental',
                y: 3.031402791
            }, {
                name: 'General Conditions',
                y: 7.230881165
            }]
        }]
    });
});