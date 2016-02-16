import {Component, View, ElementRef, Input} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS, Http, RequestOptions, Request, Response, RequestMethod} from 'angular2/http';

import {AtexoColorChartConstant} from '../../../../common/constants/atexo.constant';
import {AtexoChartsJs} from '../../../../common/components/atexo-charts.component';
import {ToClassPipe} from '../../../../common/pipe/atexo.pipe';

import {PanelBodyListProvider} from './providers/panel-body-list.provider';


@Component({
    selector: 'panel-body-list',
    providers: [PanelBodyListProvider]
})

@View({
    templateUrl: './app/components/dashboard/components/panel-body/templates/panel-body-list.tpl.html',
    pipes: [ToClassPipe],
    directives: [AtexoChartsJs]
})
export class PanelBodyList {

    @Input() panelBodyObj;
    panelBodyListProvider:PanelBodyListProvider;
    items:Array<any>;
    private chartData:Array<number> = [];
    private chartLabels:Array<any> = [];
    private chartColors:Array<any> = [];
    private chartType:string = 'Doughnut';
    private chartOptions:Object = {};

    private displayType:string = 'Table';
    private displayTypes:Array<any> = [
        {
            active: true,
            type: 'Tableau',
            icons: 'fa fa-table'
        }, {
            active: false,
            type: 'Camembert',
            icons: 'fa fa-pie-chart'
        }];

    constructor(panelBodyListProvider:PanelBodyListProvider) {
        this.items = [];
        this.panelBodyListProvider = panelBodyListProvider;
    }

    ngOnInit() {
        this.panelBodyListServiceAll(this.panelBodyObj.urlData);
        return true;
    }

    public updateDisplayType(i ?:number) {
        this.displayType = this.displayTypes[i].type;
        for (let j = 0; j < this.displayTypes.length; j++) {
            this.displayTypes[j].active = false;
            if (j === i) {
                this.displayTypes[j].active = true;
            }
        }
        return false;
    }

    // events
    public chartClicked(e:any) {
        //console.log(e);
    }

    public chartHovered(e:any) {
        //console.log(e);
    }


    panelBodyListServiceAll(url) {

        this.panelBodyListProvider.all(url).subscribe((res:Response) => {

            if (res.status === 200) {
                this.items = res.json();
                let i:number = 0;

                this.items.forEach((obj) => {
                    this.chartData.push(obj.count);
                    this.chartLabels.push(obj.status.replace('En cours - ', ''));
                    this.chartOptions = {responsive: true, animateRotate: true};
                    this.chartColors.push(AtexoColorChartConstant[i].color);
                    i++;
                });
            }

        });
    }

}