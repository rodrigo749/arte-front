import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{
    
    constructor(private route: ActivatedRoute,
         private router: Router ){
    }

    ngOnInit(): void {
    }
    

}