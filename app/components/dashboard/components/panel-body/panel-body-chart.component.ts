import {Component, Directive, View, ElementRef, Input, Inject, Attribute} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from 'angular2/common';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS, Http, RequestOptions, Request, Response, RequestMethod} from 'angular2/http';

import {ToClassPipe} from '../../../../common/pipe/atexo.pipe';
import {AtexoChartsJs} from '../../../../common/components/atexo-charts.component';

declare var Chart:any;

@Component({
    selector: 'panel-body-chart'
    //inputs: ['panelObj']
})

@View({
    templateUrl: './app/components/dashboard/components/panel-body/templates/panel-body-chart.tpl.html',
    pipes: [ToClassPipe],
    directives: [AtexoChartsJs]
})

export class PanelBodyChart {

    @Input() panelBodyObj;

    constructor(private element:ElementRef) {
        this.element = element;
    }


    ngOnInit() {
        return true;
    }

    ngAfterViewInit() {
        return true;
    }

    log() {
        console.log('xxxxxx');
    }

    // lineChart
    private lineChartData:Array<any> = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90],
        [18, 48, 77, 9, 100, 27, 40],
        [70, 25, 42, 98, 50, 34, 45]
    ];
    private lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    private lineChartSeries:Array<any> = ['Series A', 'Series B', 'Series C', 'Series D'];
    private lineChartOptions:any = {
        animation: false,
        responsive: true,
        multiTooltipTemplate: '<%if (datasetLabel){%><%=datasetLabel %>: <%}%><%= value %>',
        legendTemplate : '<ul class="<%=name.toLowerCase()%>-legend">' +
        '<% for (var i=0; i<datasets.length; i++){%>' +
        '<li>' +
        '<a href="" onclick="onClickA">' +
        '<span style="background-color:<%=datasets[i].strokeColor%>"></span>' +
        '<%if(datasets[i].label){%><%=datasets[i].label%><%}%>' +
        '</a></li><%}%>' +
        '</ul>'
    };
    private lineChartColours:Array<any> = [

    ];
    private lineChartLegend:boolean = false;
    private lineChartType:string = 'Line';

    private randomize() {
        let _lineChartData = [];
        for (let i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = [];
            for (let j = 0; j < this.lineChartData[i].length; j++) {
                _lineChartData[i].push(Math.floor((Math.random() * 100) + 1));

            }
        }
        this.lineChartData = _lineChartData;
    }

    toggle(i?:number) {
        this.lineChartData.splice(1,1);
        return false;
    }

}