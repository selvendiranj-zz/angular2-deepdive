import { Component } from '@angular/core';
import { isBs3 } from 'ng2-bootstrap/utils';
import { DEMOS } from './demos';

// webpack html imports
const titleDoc = require('html-loader!markdown-loader!./docs/title.md');

@Component({
    selector: 'progressbar-section',
    templateUrl: './progressbar-section.component.html'
})

export class ProgressbarSectionComponent
{
    public name: string = 'Progressbar';
    public src: string = 'https://github.com/valor-software/ng2-bootstrap/tree/development/src/progressbar';

    public get isBs3(): boolean
    {
        return isBs3();
    }

    public demos: any = DEMOS;
    public titleDoc: string = titleDoc;
}
