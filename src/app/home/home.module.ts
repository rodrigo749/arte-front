import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatSlideToggleModule,

    ],
    declarations: [
        HeaderComponent,

    ],
    exports: [
        HeaderComponent
    ]
})
export class HomeModule{

}