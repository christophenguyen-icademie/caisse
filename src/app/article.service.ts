import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import { Article } from './article';
import { ECHANTILLONS_ARTICLES } from './articles-mok';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {

  caddie: Article[] = [];
  private totalTTC = new Subject<number>();

  constructor() { }

  getReferentielArticles(): Observable<Article[]> {
    return of(ECHANTILLONS_ARTICLES);
  }

  getArticleParCode(code): Observable<Article> {
    return this.getReferentielArticles().pipe(
      map((value: Article[]) => value.find(x => x.code === code))
    );
  }

  addArticle(article: Article): Observable<Article[]> {
    this.caddie.push(article);
    this.totalTTC.next(this.caddie.reduce((a, b) => a + b.prix, 0));

    return this.getCaddie();
  }

  removeArticle(article: Article): Observable<Article[]> {
    const index = this.caddie.findIndex(x => x === article);
    this.caddie.splice(index,1);
    this.totalTTC.next(this.caddie.reduce((a, b) => a + b.prix, 0));
    return this.getCaddie();
  }

  getCaddie(): Observable<Article[]> {
    return of(this.caddie);
  }

  getTotalTTC() {
    return this.totalTTC;
  }
}
