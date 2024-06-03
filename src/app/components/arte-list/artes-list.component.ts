import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Tutorial } from '../../models/tutorial.model';
import { ArteService } from '../../services/arte.service';
import { Arte } from '../../models/arte.model';


@Component({
  selector: 'app-artes-list',
  templateUrl: './artes-list.component.html',
  styleUrls: ['./artes-list.component.css'],
})
export class ArteListComponent implements OnInit {
  artes?: Arte[];
  currentArte: Arte = {};
  currentIndex = -1;
  nome = '';

  constructor(private arteService: ArteService) {}

  ngOnInit(): void {
    this.retrieveArtes();
  }

  retrieveArtes(): void {
    this.arteService.getAll().subscribe({
      next: (data) => {
        this.artes = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveArtes();
    this.currentArte = {};
    this.currentIndex = -1;
  }

  setActiveArte(arte: Arte, index: number): void {
    this.currentArte = arte;
    this.currentIndex = index;
  }

  removeAllArte(): void {
    this.arteService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  searchTitle(): void {
    this.currentArte = {};
    this.currentIndex = -1;

    this.arteService.findByTitle(this.nome).subscribe({
      next: (data) => {
        this.artes = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  exportToPdf() {
    console.log('EXPORT PDF')
  }
}
