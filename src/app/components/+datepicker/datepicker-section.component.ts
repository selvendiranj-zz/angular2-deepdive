// https://api.jqueryui.com/datepicker/
import { Component } from '@angular/core';
import { DEMOS } from './demos';
// webpack html imports
const titleDoc = require('html-loader!markdown-loader!./docs/title.md');

@Component({
    selector: 'datepicker-section',
    templateUrl: './datepicker-section.component.html'
})
export class DatepickerSectionComponent
{
    public name: string = 'Datepicker';
    public src: string = 'https://github.com/valor-software/ng2-bootstrap/tree/development/src/datepicker';
    public demos: any = DEMOS;
    public titleDoc: string = titleDoc;
}
