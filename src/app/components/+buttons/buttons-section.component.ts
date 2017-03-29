import { Component } from '@angular/core';
import { DEMOS } from './demos';

// webpack html imports
const titleDoc = require('html-loader!markdown-loader!./docs/title.md');

@Component({
    selector: 'buttons-section',
    templateUrl: './buttons-section.component.html'
})

export class ButtonsSectionComponent
{
    public name: string = 'Buttons';
    public src: string = 'https://github.com/valor-software/ng2-bootstrap/tree/development/src/buttons';
    public titleDoc: string = titleDoc;
    public demos: any = DEMOS;
}
