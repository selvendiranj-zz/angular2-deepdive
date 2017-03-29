import { Component } from '@angular/core';
import { DEMOS } from './demos';
// webpack html imports
const titleDoc = require('html-loader!markdown-loader!./docs/title.md');

@Component({
    selector: 'timepicker-section',
    templateUrl: './timepicker-section.component.html'
})

export class TimepickerSectionComponent
{
    public name: string = 'Timepicker';
    public src: string = 'https://github.com/valor-software/ng2-bootstrap/tree/development/src/timepicker';
    public demos: any = DEMOS;
    public titleDoc: string = titleDoc;
}
