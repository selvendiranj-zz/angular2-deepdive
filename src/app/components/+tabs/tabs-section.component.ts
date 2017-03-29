import { Component } from '@angular/core';
import { DEMOS } from './demos';
// webpack html imports
const titleDoc = require('html-loader!markdown-loader!./docs/title.md');

@Component({
    selector: 'tabs-section',
    templateUrl: './tabs-section.component.html'
})

export class TabsSectionComponent
{
    public name: string = 'Tabs';
    public src: string = 'https://github.com/valor-software/ng2-bootstrap/tree/development/src/tabs';
    public demos: any = DEMOS;
    public titleDoc: string = titleDoc;
}
