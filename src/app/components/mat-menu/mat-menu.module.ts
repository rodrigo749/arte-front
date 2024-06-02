import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from '../../home/home.component';


@NgModule({
  imports: [ 
    MatButtonModule, 
    MatIconModule, 
    MatMenuModule,
    MatToolbarModule
  ],
  exports: [

    
  ]
})

export class MaterialModule {}