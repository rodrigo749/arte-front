import { Component, OnInit } from '@angular/core';
import { StorageService } from './_services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private storage:StorageService, private router: Router ) {}

  title = 'Angular Arte App';
  isLogin: boolean = false;

  ngOnInit(): void {
    const userLogado = this.storage.isLoggedIn();
    console.log('userLogado', userLogado)
    if(userLogado === true) {
      this.isLogin = true;
    }else{
      this.isLogin = false;
    }
  }

  logout(){
    this.storage.clean();
    this.router.navigate(['login'])
    this.storage.clean;
}

login() {
  const userLogado = this.storage.isLoggedIn();
  console.log('userLogado', userLogado)
  if(userLogado === true) {
    this.isLogin = true;
  }else{
    this.isLogin = false;
  }
}

}
