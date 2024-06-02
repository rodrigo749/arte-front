import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FooterComponent } from './footer/footer.component';
import { TituloModule } from '../components/titulo/titulo.module';
import { MatIcon } from '@angular/material/icon';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatSlideToggleModule,
        MatIcon

    ],
    declarations: [
        HeaderComponent,
        FooterComponent

    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ]
})
export class HomeModule{

}