import { Component } from '@angular/core';
import { DEMOS } from './demos';

// webpack html imports
const titleDoc = require('html-loader!markdown-loader!./docs/title.md');

@Component({
    selector: 'pagination-section',
    templateUrl: './pagination-section.component.html'
})

export class PaginationSectionComponent
{
    public name: string = 'Pagination';
    public src: string = 'https://github.com/valor-software/ng2-bootstrap/tree/development/src/pagination';
    public demos: any = DEMOS;
    public titleDoc: string = titleDoc;
}
