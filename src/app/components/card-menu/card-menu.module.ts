import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardMenuComponent } from './card-menu.component';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CardMenuComponent
    ],
    exports: [
        CardMenuComponent
    ]
})
export class CardMenuModule{}