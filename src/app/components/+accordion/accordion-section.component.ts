// todo: add more samples https://jqueryui.com/accordion/#default
// todo: add more samples http://getbootstrap.com/components/#panels-alternatives

import { Component } from '@angular/core';
import { DEMOS } from './demos';

// webpack html imports
const titleDoc = require('html-loader!markdown-loader!./docs/usage.md');

console.log('loaded async');

@Component({
    selector: 'accordion-section',
    templateUrl: './accordion-section.component.html'
})

export class AccordionSectionComponent
{
    public name: string = 'Accordion';
    public src: string = 'https://github.com/valor-software/ng2-bootstrap/tree/development/src/accordion';
    public titleDoc: string = titleDoc;
    public demos: any = DEMOS;
}
