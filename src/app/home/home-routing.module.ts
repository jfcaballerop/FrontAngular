import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { MyteseoCardComponent } from './myteseo-card/myteseo-card.component';

const homeRoutes: Routes = [
    {
        path: 'teseo',
        component: MainLayoutComponent,
        children: [
            { path: 'myTeseo', component: MyteseoCardComponent }
        ]
    }
];


@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule { }
