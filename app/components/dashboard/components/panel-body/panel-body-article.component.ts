import {Component, View, ElementRef, Input} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS, Http, RequestOptions, Request, Response, RequestMethod} from 'angular2/http';


import {ToClassPipe, ToDatePipe} from '../../../../common/pipe/atexo.pipe';

import {PanelBodyArticleProvider} from './providers/panel-body-article.provider';

import {Util} from '../../../../common/services/atexo.service';
import {AtexoSpinner} from '../../../../common/components/atexo-spinner.component';

@Component({
    selector: 'panel-body-article',
    providers: [PanelBodyArticleProvider]
    //inputs: ['panelObj']
})

@View({
    templateUrl: './app/components/dashboard/components/panel-body/templates/panel-body-article.tpl.html',
    pipes: [ToClassPipe, ToDatePipe],
    directives: [AtexoSpinner]
})
export class PanelBodyArticle {

    @Input() panelBodyObj;

    panelBodyArticleProvider:PanelBodyArticleProvider;
    articles:Object[] = [];
    articleSelected:Object;
    limit:number = 2;
    offset:number;

    constructor(private el:ElementRef, panelBodyArticleProvider:PanelBodyArticleProvider) {
        this.el = el;
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

                /*this.articles.forEach((obj) => {
                    obj['date'] = new Date(1988,3,15);
                });*/
            }

        });
    }

    more() {
        this.offset += this.limit;
    }

    moreArticles() {
        this.offset = this.articles.length;
    }

    lessArticles() {
        this.offset = this.limit;
    }

    selectArticle(id:number) {
        this.articleSelected = Util.getInstance().Grep(this.articles, function (item) {
            return (item.id === id);
        });
        this.articleSelected = this.articleSelected[0];
        return false;
    }

    closeSelectArticle() {
        this.articleSelected = null;
        return false;
    }

}