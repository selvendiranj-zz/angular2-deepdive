import { Component } from '@angular/core';
import { DEMOS } from './demos';
// webpack html imports
const titleDoc = require('html-loader!markdown-loader!./docs/title.md');

@Component({
    selector: 'typeahead-section',
    templateUrl: './typeahead-section.component.html'
})

export class TypeaheadSectionComponent
{
    public name: string = 'Typeahead';
    public src: string = 'https://github.com/valor-software/ng2-bootstrap/tree/development/src/typeahead';
    public demos: any = DEMOS;
    public titleDoc: string = titleDoc;
}
