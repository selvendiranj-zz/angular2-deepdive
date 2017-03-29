import { Component } from '@angular/core';
import { DEMOS } from './demos';

// webpack html imports
const titleDoc = require('html-loader!markdown-loader!./docs/title.md');

@Component({
    selector: 'collapse-section',
    templateUrl: './collapse-section.component.html'
})
export class CollapseSectionComponent
{
    public name: string = 'Collapse';
    public src: string = 'https://github.com/valor-software/ng2-bootstrap/tree/development/src/collapse';
    public demos: any = DEMOS;
    public titleDoc: string = titleDoc;
}
