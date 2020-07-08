import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IMovie } from 'app/shared/model/movie.model';
import { MovieService } from './movie.service';
import { MovieDeleteDialogComponent } from './movie-delete-dialog.component';

@Component({
  selector: 'jhi-movie',
  templateUrl: './movie.component.html',
})
export class MovieComponent implements OnInit, OnDestroy {
  movies?: IMovie[];
  ratings?: IMovie[];
  director?: String;
  directorResult: IMovie = {
    id: 'string',
    movie: 'string',
    director: 'string',
    rating: 1,
  };

  rating = 0;
  eventSubscriber?: Subscription;
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  constructor(protected movieService: MovieService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll(): void {
    this.director = 'empty';
    this.movieService.queryRating(this.rating).subscribe((res: HttpResponse<IMovie[]>) => (this.ratings = res.body || []));
    this.movieService.query().subscribe((res: HttpResponse<IMovie[]>) => (this.movies = res.body || []));
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInMovies();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: IMovie): string {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  addDirector(newDirector: any): void {
    this.director = newDirector;
    this.movieService
      .findDirector(this.director)
      .subscribe((res: HttpResponse<IMovie>) => (this.directorResult = res.body || this.directorResult));
  }

  addRating(newRating: any): void {
    this.rating = newRating;
    this.movieService.queryRating(this.rating).subscribe((res: HttpResponse<IMovie[]>) => (this.ratings = res.body || []));
  }

  registerChangeInMovies(): void {
    this.eventSubscriber = this.eventManager.subscribe('movieListModification', () => this.loadAll());
  }

  delete(movie: IMovie): void {
    const modalRef = this.modalService.open(MovieDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.movie = movie;
  }
}
