import {Component, Directive, View, ElementRef, Input, Inject, Attribute} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from 'angular2/common';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS, Http, RequestOptions, Request, Response, RequestMethod} from 'angular2/http';
import {isPresent, isBlank } from 'angular2/src/facade/lang';


import {AtexoColorChartConstant, AtexoChartConstant} from '../../../../common/constants/atexo.constant';
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
    // chart
    private chartData:Array<any> = [[]];
    private chartDataOld:Array<any> = this.chartData;
    private chartDataArray:Array<any>;
    private chartLabels:Array<any> = [];
    private chartSeries:Array<any> = [];
    private chartSeriesColors:Array<any> = [];
    private chartSeriesActive:Array < boolean > = [];
    private chartOptions:any = this.getChartOptions();
    private chartColours:Array<any> = AtexoColorChartConstant;

    private chartColoursOld:Array<any> = this.chartColours;
    private chartLegend:boolean = false;
    private chartType:string = 'Line';
    private chartTypes:Array<any> = [];
    private easting:Array<any> = [
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
        'décembre'];

    constructor(panelBodyChartProvider:PanelBodyChartProvider) {
        this.panelBodyChartProvider = panelBodyChartProvider;
        for (let i = 0; i < this.chartSeries.length; i++) {
            this.chartSeriesColors.push(this.chartColoursOld[i].strokeColor);
            this.chartSeriesActive.push(true);
        }
    }

    private ngOnInit() {
        this.panelBodyChartServiceGetData(this.panelBodyObj.urlData);
        this.panelBodyChartServiceGetOptions(this.panelBodyObj.chart);
        return true;
    }

    private ngAfterViewInit() {
        return true;
    }

    panelBodyChartServiceGetOptions(chart:any) {
        // Set Chart default display Type
        if (isPresent(chart.type) && chart.type !== '') {
            this.chartType = chart.type;
        }
        // Set Chart Types
        if (isPresent(chart.types) && !isBlank(chart.types)) {
            this.chartTypes = chart.types;
            // Find index active type
            let i = Util.getInstance().arrayObjectFindIndex(this.chartTypes, (e) => {
                return e.type === this.chartType;
            });
            // Test if chart.type not exist in chart.types
            // All so Chart.Types[0].type affected to Chart.types
            if (i === -1) {
                i = 0;
                this.chartType = this.chartTypes[0].type;
            }
            // Active chart type
            this.updateChartType(i);
        }

        // Set Chart Easting
        if (isPresent(chart.easting) && !isBlank(chart.easting)) {
            this.easting = chart.easting;
        }

    }

    panelBodyChartServiceGetData(url) {

        this.panelBodyChartProvider.get(url).subscribe((res:Response) => {

            if (res.status === 200) {

                this.getChartDataArray(res);

                var jsonInstance:any = Util.getInstance().Json();
                jsonInstance.setEasting(this.easting);

                jsonInstance.getByProperty(
                    this.chartDataArray
                );

                jsonInstance.groupByProperty(['annee', 'mois', 'count']);

                console.log(jsonInstance.getArrayResult());

                this.chartData = jsonInstance.getArrayResult();
                this.chartDataOld = this.chartData;

                this.chartLabels = jsonInstance.getEasting();

                this.chartSeries = jsonInstance.getOrdered();

                this.chartSeriesColors = [];
                this.chartSeriesActive = [];

                for (let i = 0; i < this.chartSeries.length; i++) {
                    this.chartSeriesColors.push(this.chartColoursOld[i].strokeColor);
                    this.chartSeriesActive.push(true);
                }

                if (AtexoChartConstant.typeCategory.single.indexOf(this.chartType) !== -1) {
                    this.getChartDataSingle(0);
                }
            }

        });
    }

    // Check display Series
    // use for update display Data Chart
    private checkUpdateChart() {
        let i:number = 0,
            count:number = 0;
        for (; i < this.chartSeriesActive.length; i++) {
            if (this.chartSeriesActive[i]) {
                count++;
            }
        }
        return (count > 0);
    }

    /**
     *
     * @public updateChartData
     * @name updateChartData
     * @description change chart display data
     * @param i:number
     * @returns {boolean}
     */
    public updateChartData(i ?:number) {

        // If is multiple type
        if (AtexoChartConstant.typeCategory.multiple.indexOf(this.chartType) !== -1) {

            // toggle ChartSeries
            this.chartSeriesActive[i] = !this.chartSeriesActive[i];

            // Test if last Series
            // you can't hide all series
            if (this.checkUpdateChart()) {

                let _chartData = [];
                let _chartColours = [];
                for (let j = 0; j < this.chartSeriesActive.length; j++) {
                    if (this.chartSeriesActive[j]) {
                        _chartColours.push(this.chartColoursOld[j]);
                        _chartData.push(this.chartDataOld[j]);
                    }
                }
                this.chartData = _chartData;
                this.chartColours = _chartColours;

            } else {
                // toggle ChartSeries
                this.chartSeriesActive[i] = !this.chartSeriesActive[i];
            }
        } else {
            this.getChartDataSingle(i);
        }
        return false;
    }


    private activeChartSerie(i?:number) {
        let index:number = 0;
        if (isPresent(i)) {
            index = i;
        }
        for (let j = 0; j < this.chartSeriesActive.length; j++) {
            this.chartSeriesActive[j] = false;
            if (j === index) {
                this.chartSeriesActive[j] = true;
            }
        }
    }

    /**
     *
     * @public updateChartType
     * @name updateChartType
     * @description change chart display type
     * @param i:number
     * @returns {boolean}
     */
    public updateChartType(i ?:number) {
        this.chartType = this.chartTypes[i].type;
        for (let j = 0; j < this.chartTypes.length; j++) {
            this.chartTypes[j].active = false;
            if (j === i) {
                this.chartTypes[j].active = true;
            }
        }
        return false;
    }

    /**
     *
     * @private getChartOptions
     * @name getChartOptions
     * @description Get chart Options
     * @returns {{animation: boolean, responsive: boolean, multiTooltipTemplate: string, legendTemplate: string}}
     */
    private getChartOptions() {
        return {
            animation: true,
            responsive: true,
            multiTooltipTemplate: '<%if (datasetLabel){%><%=datasetLabel %>: <%}%><%= value %>',
            legendTemplate: ''
        };
    }

    /**
     *
     * @private getChartDataArray
     * @name getChartDataArray
     * @description Get Array of ChartData after convert SVS to JSON
     * @param res:any
     * @returns {Array<any>}
     */
    private getChartDataArray(res) {
        Convert.getInstance().cvsToJson(res.text());
        this.chartDataArray = Convert.getInstance().getArrayData();
        return this.chartDataArray;
    }

    private getChartDataSingle(i?:number) {
        let index:number = 0,
            arr:Array<any>;
        if (isPresent(i)) {
            index = i;
        }
        this.activeChartSerie(index);
        this.chartData = this.chartDataOld[index];
        return this.chartData;
    }

    // events
    public chartClicked(e:any) {
        //console.log(e);
    }

    public chartHovered(e:any) {
        //console.log(e);
    }

}