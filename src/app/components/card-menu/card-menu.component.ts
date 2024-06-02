import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card-menu',
    templateUrl: './card-menu.component.html',
    styleUrls: ['./card-menu.component.css']
})
export class CardMenuComponent{

    @Input() url = '';
    @Input() descricao = '';
    @Input() titulo = '';
}