import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.scss']
})
export class FavorisComponent implements OnInit, OnDestroy {
  favMovies: any[] = [];


  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnDestroy(): void {
    //stocke l'objet favMovies lorsqu'on quitte la page
    sessionStorage.setItem('favMovies', JSON.stringify(this.favMovies));
  }

  ngOnInit(): void {
    //récupère l'objet favMovies stocké et affecte son contenu au tableau favMovies
    let data = JSON.parse(sessionStorage.getItem('favMovies') || '{}');
    this.favMovies = data;
    if(!this.favMovies?.length) {this.favMovies = Object.keys(data).map(key => ({type: key, value: data[key]}));}
  }

  removeMovieFav(i: number) {
    this.favMovies.splice(i, 1);
  }

  open(content: any) {
    this.modalService.open(content);
  }
}
