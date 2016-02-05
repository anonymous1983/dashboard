import {Component, Directive, View, ElementRef, Input, Inject, Attribute} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from 'angular2/common';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS, Http, RequestOptions, Request, Response, RequestMethod} from 'angular2/http';

import {ToClassPipe} from '../../../../common/pipe/atexo.pipe';

declare var Chart:any;

//import {CHART_DIRECTIVES} from '../../../../common/components/atexo-charts.component';

@Component({
    selector: 'panel-body-chart'
    //inputs: ['panelObj']
})

@View({
    templateUrl: './app/components/dashboard/components/panel-body/templates/panel-body-chart.tpl.html',
    pipes: [ToClassPipe]
    //directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class PanelBodyChart {

    @Input() panelBodyObj;

    private ctx:any;
    private myNewChart:any;
    private cvs:any;
    private parent:any;
    private chart:any;
    private data:any;

    constructor(private element:ElementRef) {
        console.log('doughnut demo');
        //this.pieChartType = 'Pie';
    }

    // Doughnut
    private doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    private doughnutChartData = [350, 450, 100];
    private doughnutChartType = 'Doughnut';

    private lineChartOptions:any = {
        animation: false,
        responsive: true,
        multiTooltipTemplate: '<%if (datasetLabel){%><%=datasetLabel %>: <%}%><%= value %>'
    };


    ngOnInit() {
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    fillColor: 'rgba(220,220,220,0.2)',
                    strokeColor: 'rgba(220,220,220,1)',
                    pointColor: 'rgba(220,220,220,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(220,220,220,1)',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    fillColor: 'rgba(151,187,205,0.2)',
                    strokeColor: 'rgba(151,187,205,1)',
                    pointColor: 'rgba(151,187,205,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(151,187,205,1)',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };


        //noinspection TypeScriptUnresolvedFunction
        this.ctx = document.getElementById('myChart').getContext('2d');

        this.myNewChart = new Chart(this.ctx)['Line'](this.data, this.lineChartOptions);
        return true;
    }

    ngAfterViewInit() {
        return true;
    }

}