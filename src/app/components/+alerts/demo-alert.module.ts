import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ng2-bootstrap/alert';
import { HttpModule } from '@angular/http';

import { AlertsSectionComponent } from './alerts-section.component';
import { DEMO_COMPONENTS } from './demos';
import { SharedModule } from '../../shared';

import { routes } from './demo-alerts.routes';

@NgModule({
    declarations: [
        AlertsSectionComponent,
        ...DEMO_COMPONENTS
    ],
    imports: [
        AlertModule.forRoot(),
        CommonModule,
        SharedModule,
        HttpModule,
        RouterModule.forChild(routes)
    ],
    exports: [AlertsSectionComponent]
})
export class DemoAlertsModule
{
    public static routes: any = routes;
}
