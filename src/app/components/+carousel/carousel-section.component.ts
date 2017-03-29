import { Component } from '@angular/core';
import { DEMOS } from './demos';

// webpack html imports
const titleDoc = require('html-loader!markdown-loader!./docs/title.md');

@Component({
    selector: 'carousel-section',
    templateUrl: './carousel-section.component.html'
})
export class CarouselSectionComponent
{
    public name: string = 'Carousel';
    public src: string = 'https://github.com/valor-software/ng2-bootstrap/tree/development/src/carousel';
    public demos: any = DEMOS;
    public titleDoc: string = titleDoc;
}
