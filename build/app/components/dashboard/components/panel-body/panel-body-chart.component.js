System.register(['angular2/core', '../../../../common/pipe/atexo.pipe', '../../../../common/components/atexo-charts.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, atexo_pipe_1, atexo_charts_component_1;
    var PanelBodyChart;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (atexo_pipe_1_1) {
                atexo_pipe_1 = atexo_pipe_1_1;
            },
            function (atexo_charts_component_1_1) {
                atexo_charts_component_1 = atexo_charts_component_1_1;
            }],
        execute: function() {
            PanelBodyChart = (function () {
                function PanelBodyChart(element) {
                    this.element = element;
                    // lineChart
                    this.lineChartData = [
                        [65, 59, 80, 81, 56, 55, 40],
                        [28, 48, 40, 19, 86, 27, 90],
                        [18, 48, 77, 9, 100, 27, 40],
                        [70, 25, 42, 98, 50, 34, 45]
                    ];
                    this.lineChartDataOld = this.lineChartData;
                    this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
                    this.lineChartSeries = ['Series A', 'Series B', 'Series C', 'Series D'];
                    this.lineChartSeriesColors = [];
                    this.lineChartSeriesActive = [];
                    this.lineChartOptions = {
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
                    this.lineChartColours = [
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
                    this.lineChartColoursOld = this.lineChartColours;
                    this.lineChartLegend = false;
                    this.lineChartType = 'Line';
                    this.lineChartTypes = [
                        {
                            active: true,
                            type: 'Line',
                            icons: 'fa fa-line-chart'
                        }, {
                            active: false,
                            type: 'Bar',
                            icons: 'fa fa-bar-chart'
                        }];
                    this.element = element;
                    for (var i = 0; i < this.lineChartSeries.length; i++) {
                        this.lineChartSeriesColors.push(this.lineChartColoursOld[i].strokeColor);
                        this.lineChartSeriesActive.push(true);
                    }
                }
                PanelBodyChart.prototype.ngOnInit = function () {
                    return true;
                };
                PanelBodyChart.prototype.ngAfterViewInit = function () {
                    return true;
                };
                PanelBodyChart.prototype.updateChart = function (i) {
                    // toggle ChartSerie
                    this.lineChartSeriesActive[i] = !this.lineChartSeriesActive[i];
                    var _lineChartData = [];
                    var _lineChartColours = [];
                    for (var j = 0; j < this.lineChartSeriesActive.length; j++) {
                        if (this.lineChartSeriesActive[j]) {
                            _lineChartColours.push(this.lineChartColoursOld[j]);
                            _lineChartData.push(this.lineChartDataOld[j]);
                        }
                    }
                    this.lineChartData = _lineChartData;
                    this.lineChartColours = _lineChartColours;
                    return false;
                };
                PanelBodyChart.prototype.updateChartType = function (i) {
                    this.lineChartType = this.lineChartTypes[i].type;
                    for (var j = 0; j < this.lineChartTypes.length; j++) {
                        this.lineChartTypes[j].active = false;
                        if (j === i) {
                            this.lineChartTypes[j].active = true;
                        }
                    }
                    return false;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PanelBodyChart.prototype, "panelBodyObj", void 0);
                PanelBodyChart = __decorate([
                    core_1.Component({
                        selector: 'panel-body-chart'
                    }),
                    core_1.View({
                        templateUrl: './app/components/dashboard/components/panel-body/templates/panel-body-chart.tpl.html',
                        pipes: [atexo_pipe_1.ToClassPipe],
                        directives: [atexo_charts_component_1.AtexoChartsJs]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], PanelBodyChart);
                return PanelBodyChart;
            })();
            exports_1("PanelBodyChart", PanelBodyChart);
        }
    }
});

//# sourceMappingURL=panel-body-chart.component.js.map
