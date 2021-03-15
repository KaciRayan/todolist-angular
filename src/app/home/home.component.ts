import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { MovieSearch } from '../services/movieSearch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  errorMsgMovie: String = "";
  movies: any[] = [];
  favMovies: any[] = [];

  constructor(private movieSearch: MovieSearch, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit(): void {
    //recuperation des donnees stockees (array movies) a l'initialisation
    this.movies = JSON.parse(localStorage.getItem('movies') || '{}');
  }

  //vérifie si un nom a ete entre et recherche le film avant de l'ajouter a l'array movies
  //cas a gerer : pas de film trouve
  addMovie(form: NgForm) {
    this.errorMsgMovie = "";
    if(form.value['movieName'] === ""){
      this.errorMsgMovie = "Entrez un nom de film s'il-vous-plaît"
    } else {
      this.movieSearch.findMovie(form.value['movieName']).subscribe(Response => {
        const items = [];
        items.push(Response.Search[0]);
        this.movies.push(items[0]);
        localStorage.setItem('movies', JSON.stringify(this.movies));
      });
    }
  }

  addFavoris(i: number) {
    this.favMovies.push(this.movies[i]);
    localStorage.setItem('favMovies', JSON.stringify(this.favMovies));
  }

  removeMovie(i: number) {
    this.movies.splice(i, 1);
    localStorage.setItem('movies', JSON.stringify(this.movies));
    this.favMovies.splice(i, 1);
    localStorage.setItem('favMovies', JSON.stringify(this.favMovies));
  }

  open(content: any) {
    this.modalService.open(content);
  }
}

