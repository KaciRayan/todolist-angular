import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.scss']
})
export class FavorisComponent implements OnInit {
  favMovies: any[] = [];


  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.favMovies = JSON.parse(localStorage.getItem('favMovies') || '{]');
  }

  removeMovieFav(i: number) {
    this.favMovies.splice(i, 1);
    localStorage.setItem('favMovies', JSON.stringify(this.favMovies));
  }

  open(content: any) {
    this.modalService.open(content);
  }
}
