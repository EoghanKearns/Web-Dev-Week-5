import { Component, OnInit, Input } from '@angular/core';
import { Movie } from "src/movie.model";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {
  @Input() movieDetails: Movie | undefined;

  constructor() {}

  ngOnInit() {}
}
