import {Component, View, ElementRef, Input} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS, Http, RequestOptions, Request, Response, RequestMethod} from 'angular2/http';

import {ToTypeCategoryClassPipe} from '../../../../common/pipe/atexo.pipe';

import {PanelBodyArticleProvider} from './providers/panel-body-article.provider';

import {AtexoSpinner} from '../../../../common/components/atexo-spinner.component';
import {isNumber} from "angular2/src/facade/lang";

@Component({
    selector: 'panel-body-article',
    providers: [PanelBodyArticleProvider]
    //inputs: ['panelObj']
})

@View({
    templateUrl: './app/components/dashboard/components/panel-body/templates/panel-body-article.tpl.html',
    pipes: [ToTypeCategoryClassPipe],
    directives: [AtexoSpinner]
})
export class PanelBodyArticle {

    @Input() panelBodyObj;

    panelBodyArticleProvider:PanelBodyArticleProvider;
    articles:Object[] = [];
    limit:number;
    offset:number;

    constructor(private el:ElementRef, panelBodyArticleProvider:PanelBodyArticleProvider) {
        this.el = el;

        this.limit = 2;
        this.offset = this.limit;


        this.panelBodyArticleProvider = panelBodyArticleProvider;
    }

    ngOnInit() {

        this.panelBodyArticleServiceAll(this.panelBodyObj.urlData);

        return true;
    }

    panelBodyArticleServiceAll(url) {

        this.panelBodyArticleProvider.all(url).subscribe((res:Response) => {

            if (res.status === 200) {
                this.articles = res.json();
            }

        });
    }

    more() {
        this.offset += this.limit;
    }

    moreAll() {
        this.offset = this.articles.length;
    }

}