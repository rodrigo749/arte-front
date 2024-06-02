import { Component } from '@angular/core';
import { StorageService } from './_services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private storage:StorageService, private router: Router ) {}

  title = 'Angular Arte App';
  isLogin: boolean = false;

  logout(){
    this.storage.clean();
    this.router.navigate(['login'])
    this.storage.clean;
}

}
