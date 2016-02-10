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
        for (let i = 0; i < this.lineChartSeries.length; i++) {
            this.lineChartSeriesColors.push(this.lineChartColoursOld[i].strokeColor);
            this.lineChartSeriesActive.push(true);
        }
    }

    private ngOnInit() {
        return true;
    }

    private ngAfterViewInit() {
        return true;
    }

    public updateChart(i?:number) {
        // toggle ChartSerie
        this.lineChartSeriesActive[i] = !this.lineChartSeriesActive[i];

        let _lineChartData = [];
        let _lineChartColours = [];
        for (let j = 0; j < this.lineChartSeriesActive.length; j++) {
            if (this.lineChartSeriesActive[j]) {
                _lineChartColours.push(this.lineChartColoursOld[j]);
                _lineChartData.push(this.lineChartDataOld[j]);
            }
        }
        this.lineChartData = _lineChartData;
        this.lineChartColours = _lineChartColours;

        return false;
    }

    public updateChartType(i?:number) {
        this.lineChartType = this.lineChartTypes[i].type;
        for (let j = 0; j < this.lineChartTypes.length; j++) {
            this.lineChartTypes[j].active = false;
            if (j === i) {
                this.lineChartTypes[j].active = true;
            }
        }
        return false;
    }

    // lineChart
    private lineChartData:Array<any> = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90],
        [18, 48, 77, 9, 100, 27, 40],
        [70, 25, 42, 98, 50, 34, 45]
    ];
    private lineChartDataOld:Array<any> = this.lineChartData;
    private lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    private lineChartSeries:Array<any> = ['Series A', 'Series B', 'Series C', 'Series D'];
    private lineChartSeriesColors:Array<any> = [];
    private lineChartSeriesActive:Array<boolean> = [];
    private lineChartOptions:any = {
        animation: false,
        responsive: true,
        multiTooltipTemplate: '<%if (datasetLabel){%><%=datasetLabel %>: <%}%><%= value %>',
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend">' +
        '<% for (var i=0; i<datasets.length; i++){%>' +
        '<li>' +
        '<a href="" onclick="onClickA">' +
        '<span style="background-color:<%=datasets[i].strokeColor%>"></span>' +
        '<%if(datasets[i].label){%><%=datasets[i].label%><%}%>' +
        '</a></li><%}%>' +
        '</ul>'
    };
    private lineChartColours:Array<any> = [
        {
            fillColor: 'rgba(253, 216, 53,0.2)',
            strokeColor: 'rgba(253, 216, 53,1)',
            pointColor: 'rgba(253, 216, 53,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(253, 216, 53,0.8)',
            color: 'rgba(0,0,0,1)',
            highlight: 'rgba(0,0,0,0.8)'
        }, {
            fillColor: 'rgba(236, 64, 122,0.2)',
            strokeColor: 'rgba(236, 64, 122,1)',
            pointColor: 'rgba(236, 64, 122,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(236, 64, 122,0.8)',
            color: 'rgba(0,0,0,1)',
            highlight: 'rgba(0,0,0,0.8)'
        }, {
            fillColor: 'rgba(205, 220, 57,0.2)',
            strokeColor: 'rgba(205, 220, 57,1)',
            pointColor: 'rgba(205, 220, 57,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(205, 220, 57,0.8)',
            color: 'rgba(0,0,0,1)',
            highlight: 'rgba(0,0,0,0.8)'
        }, {
            fillColor: 'rgba(41, 182, 246,0.2)',
            strokeColor: 'rgba(41, 182, 246,1)',
            pointColor: 'rgba(41, 182, 246,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(41, 182, 246,0.8)',
            color: 'rgba(0,0,0,1)',
            highlight: 'rgba(0,0,0,0.8)'
        }, {
            fillColor: 'rgba(13, 71, 161,0.2)',
            strokeColor: 'rgba(13, 71, 161,1)',
            pointColor: 'rgba(13, 71, 161,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(13, 71, 161,0.8)',
            color: 'rgba(0,0,0,1)',
            highlight: 'rgba(0,0,0,0.8)'
        }, {
            fillColor: 'rgba(255, 193, 7,0.2)',
            strokeColor: 'rgba(255, 193, 7,1)',
            pointColor: 'rgba(255, 193, 7,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(255, 193, 7,0.8)',
            color: 'rgba(0,0,0,1)',
            highlight: 'rgba(0,0,0,0.8)'
        }];

    private lineChartColoursOld:Array<any> = this.lineChartColours;
    private lineChartLegend:boolean = false;
    private lineChartType:string = 'Line';
    private lineChartTypes:Array<any> = [
        {
            active: true,
            type: 'Line',
            icons: 'fa fa-line-chart'
        }, {
            active: false,
            type: 'Bar',
            icons: 'fa fa-bar-chart'
        }];

}