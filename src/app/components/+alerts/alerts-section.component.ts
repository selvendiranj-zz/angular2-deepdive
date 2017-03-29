import { Component, OnInit } from '@angular/core';
import { DEMOS } from './demos';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

// webpack html imports
const titleDoc = require('html-loader!markdown-loader!./docs/usage.md');

@Component({
    selector: 'alert-section',
    templateUrl: './alerts-section.component.html'
})
export class AlertsSectionComponent implements OnInit
{
    public name: string = 'Alerts';
    public src: string = 'https://github.com/valor-software/ng2-bootstrap/tree/development/src/alert';
    public titleDoc: string = titleDoc;
    public demos: any = DEMOS;
    public currYear: number;
    private http: Http;

    public constructor(http: Http)
    {
        this.http = http;
    }

    public ngOnInit(): void
    {
        this.getYear().then((year: number) =>
        {
            this.currYear = year;
        });
    }

    public getYear(): Promise<number>
    {
        return this.http.get('http://localhost/api/revenueloss/GetAssessmentYear')
            .toPromise()
            .then((response: any) =>
            {
                let retYear: number;
                retYear = response.json();
                console.log('year', retYear);
                return retYear;
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any>
    {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
