import { Component } from '@angular/core';
import { DEMOS } from './demos';

// webpack html imports
const titleDoc = require('html-loader!markdown-loader!./docs/title.md');

@Component({
    selector: 'dropdown-section',
    templateUrl: './dropdown-section.component.html'
})

export class DropdownSectionComponent
{
    public name: string = 'Dropdowns';
    public src: string = 'https://github.com/valor-software/ng2-bootstrap/tree/development/src/dropdown';
    public demos: any = DEMOS;
    public titleDoc: string = titleDoc;
}
