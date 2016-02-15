import {Component, Directive, View, ElementRef, Input, Inject, Attribute} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from 'angular2/common';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS, Http, RequestOptions, Request, Response, RequestMethod} from 'angular2/http';


import {AtexoColorChartConstant} from '../../../../common/constants/atexo.constant';
import {ToClassPipe} from '../../../../common/pipe/atexo.pipe';
import {Util, Convert} from '../../../../common/services/atexo.service';
import {AtexoChartsJs} from '../../../../common/components/atexo-charts.component';

import {PanelBodyChartProvider} from './providers/panel-body-chart.provider';

//PanelBodyEditorProvider

@Component({
    selector: 'panel-body-chart',
    providers: [PanelBodyChartProvider]
    //inputs: ['panelObj']
})

@View({
    templateUrl: './app/components/dashboard/components/panel-body/templates/panel-body-chart.tpl.html',
    pipes: [ToClassPipe],
    directives: [AtexoChartsJs]
})

export class PanelBodyChart {

    @Input() panelBodyObj;
    panelBodyChartProvider:PanelBodyChartProvider;
    // lineChart
    private lineChartData:Array<any> = [[]];
    private lineChartDataOld:Array<any> = this.lineChartData;
    private lineChartLabels:Array<any> = [];
    private lineChartSeries:Array<any> = [];
    private lineChartSeriesColors:Array<any> = [];
    private lineChartSeriesActive:Array < boolean > = [];
    private lineChartOptions:any = this.getLineChartOptions();
    private lineChartColours:Array<any> = AtexoColorChartConstant;

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
        },
        {
            active: false,
            type: 'Doughnut',
            icons: 'fa fa-bar-chart'
        }
    ];

    constructor(panelBodyChartProvider:PanelBodyChartProvider) {
        this.panelBodyChartProvider = panelBodyChartProvider;
        for (let i = 0; i < this.lineChartSeries.length; i++) {
            this.lineChartSeriesColors.push(this.lineChartColoursOld[i].strokeColor);
            this.lineChartSeriesActive.push(true);
        }
    }

    private ngOnInit() {
        this.panelBodyChartServiceGet(this.panelBodyObj.urlData);
        return true;
    }

    private ngAfterViewInit() {
        return true;
    }

    panelBodyChartServiceGet(url) {

        this.panelBodyChartProvider.get(url).subscribe((res:Response) => {

            if (res.status === 200) {
                //this.notes = res.json();

                Convert.getInstance().cvsToJson(res.text());
                let ch = Convert.getInstance().getArrayData();

                var jsonInstance:any = Util.getInstance().Json();
                jsonInstance.setEasting(
                    new Array(
                        'janvier',
                        'février',
                        'mars',
                        'avril',
                        'mai',
                        'juin',
                        'juillet',
                        'août',
                        'septembre',
                        'octobre',
                        'novembre',
                        'décembre')
                );

                jsonInstance.getByProperty(
                    ch,
                    new Array(),
                    new Array()
                );


                jsonInstance.groupByProperty(['annee', 'mois', 'count']);

                this.lineChartData = jsonInstance.getArrayResult();
                this.lineChartDataOld = this.lineChartData;

                this.lineChartLabels = jsonInstance.getEasting();

                this.lineChartSeries = jsonInstance.getOrdered();

                this.lineChartSeriesColors = [];
                this.lineChartSeriesActive = [];

                for (let i = 0; i < this.lineChartSeries.length; i++) {
                    this.lineChartSeriesColors.push(this.lineChartColoursOld[i].strokeColor);
                    this.lineChartSeriesActive.push(true);
                }
            }

        });
    }

    private checkUpdateChart() {
        let i:number = 0,
            count:number = 0;
        for (; i < this.lineChartSeriesActive.length; i++) {
            if (this.lineChartSeriesActive[i]) {
                count++;
            }
        }
        return (count > 0);
    }


    public updateChart(i ?:number) {

        // toggle ChartSeries
        this.lineChartSeriesActive[i] = !this.lineChartSeriesActive[i];

        // Test if last Series
        // you can't hide all series
        if (this.checkUpdateChart()) {

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

        } else {
            // toggle ChartSeries
            this.lineChartSeriesActive[i] = !this.lineChartSeriesActive[i];
        }
        return false;
    }

    public updateChartType(i ?:number) {
        this.lineChartType = this.lineChartTypes[i].type;
        for (let j = 0; j < this.lineChartTypes.length; j++) {
            this.lineChartTypes[j].active = false;
            if (j === i) {
                this.lineChartTypes[j].active = true;
            }
        }
        return false;
    }

    private getLineChartOptions() {
        return {
            animation: true,
            responsive: true,
            multiTooltipTemplate: '<%if (datasetLabel){%><%=datasetLabel %>: <%}%><%= value %>',
            legendTemplate: ''
        };
    }

}