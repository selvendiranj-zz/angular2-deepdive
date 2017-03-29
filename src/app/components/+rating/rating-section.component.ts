import { Component } from '@angular/core';
import { DEMOS } from './demos';
// webpack html imports
const titleDoc = require('html-loader!markdown-loader!./docs/title.md');

@Component({
    selector: 'rating-section',
    templateUrl: './rating-section.component.html'
})

export class RatingSectionComponent
{
    public name: string = 'Rating';
    public src: string = 'https://github.com/valor-software/ng2-bootstrap/tree/development/src/rating';
    public demos: any = DEMOS;
    public titleDoc: string = titleDoc;
}
