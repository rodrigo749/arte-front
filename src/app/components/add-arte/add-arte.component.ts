import { Component } from '@angular/core';
import { TutorialService } from '../../services/tutorial.service';
import { Arte } from '../../models/arte.model';

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

  constructor(private tutorialService: TutorialService) {}

  saveTutorial(): void {
    const data = {
      nome: this.arte.nome,
      descricao: this.arte.descricao,
      preco: this.arte.preco,
      image: this.arte.image
    };

    this.tutorialService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newTutorial(): void {
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
