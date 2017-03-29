import { Component } from '@angular/core';
import { DEMOS } from './demos';

// webpack html imports
const titleDoc = require('html-loader!markdown-loader!./docs/title.md');

@Component({
    selector: 'tooltip-section',
    templateUrl: './popover-section.component.html'
})

export class PopoverSectionComponent
{
    public name: string = 'Popover';
    public src: string = 'https://github.com/valor-software/ng2-bootstrap/tree/development/src/popover';
    public demos: any = DEMOS;
    public titleDoc: string = titleDoc;
}
