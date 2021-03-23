import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { MovieSearch } from '../services/movieSearch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy{
  errorMsgMovie: String = "";
  movies: any[] = [];
  favMovies: any[] = [];

  constructor(private movieSearch: MovieSearch, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnDestroy(): void {
    //stocke les objets movies et favMovies lorsqu'on quitte la page
    sessionStorage.setItem('movies', JSON.stringify(this.movies));
    sessionStorage.setItem('favMovies', JSON.stringify(this.favMovies));
  }

  ngOnInit(): void {
    //recupere l'objet movies stocké et affecte son contenu au tableau movies
    let data = JSON.parse(sessionStorage.getItem('movies') || '{}');
    this.movies = data;
    if(!this.movies?.length) {this.movies = Object.keys(data).map(key => ({type: key, value: data[key]}));}
  }


  /*vérifie si un nom a ete entre et recherche le film avant de l'ajouter a l'array movies
    cas a gerer : pas de film trouve */
  addMovie(form: NgForm) {
    this.errorMsgMovie = "";
    if(form.value['movieName'] === ""){
      this.errorMsgMovie = "Entrez un nom de film s'il-vous-plaît"
    } else {
      this.movieSearch.findMovie(form.value['movieName']).subscribe(
        response => {
          //if(response.Search[0] === "") {this.errorMsgMovie = "Aucun film n'a été trouvé, vérifiez son titre svp"}
          //else {
            this.movies.push(response.Search[0]);
            //console.log(response.Search[0]);
          //}
        }
      )
    }
  }

  addFavoris(i: number) {
    this.favMovies.push(this.movies[i]);
  }

  removeMovie(i: number) {
    this.movies.splice(i, 1);
    this.favMovies.splice(i, 1);
  }

  open(content: any) {
    this.modalService.open(content);
  }
}

