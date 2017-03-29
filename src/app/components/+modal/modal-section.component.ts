import { Component } from '@angular/core';
import { DEMOS } from './demos';

// webpack html imports
const titleDoc = require('html-loader!markdown-loader!./docs/title.md');

@Component({
    selector: 'modal-section',
    templateUrl: './modal-section.component.html'
})
export class ModalSectionComponent
{
    public name: string = 'Modals';
    public src: string = 'https://github.com/valor-software/ng2-bootstrap/tree/master/components/modal';
    public demos: any = DEMOS;
    public titleDoc: string = titleDoc;

}
