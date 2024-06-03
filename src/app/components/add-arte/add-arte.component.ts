import { Component } from '@angular/core';
import { TutorialService } from '../../services/tutorial.service';
import { Arte } from '../../models/arte.model';
import { ArteService } from '../../services/arte.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-arte',
  templateUrl: './add-arte.component.html',
  styleUrls: ['./add-arte.component.css'],
})
export class AddArteComponent {
  arte: Arte = {
    nome: '',
    descricao: '',
    preco: '',
    image: '',
    published: false
  };
  submitted = false;

  constructor(private arteService: ArteService, private router: Router) {}

  saveArte(): void {
    const data = {
      nome: this.arte.nome,
      descricao: this.arte.descricao,
      preco: this.arte.preco,
      image: this.arte.image
    };

    this.arteService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
        this.router.navigate(['home/artes']);
      },
      error: (e) => console.error(e)
    });
  }

  newArte(): void {
    this.submitted = false;
    this.arte = {
      nome: '',
      descricao: '',
      preco: '',
      image: '',
      published: false
    };
  }
}
