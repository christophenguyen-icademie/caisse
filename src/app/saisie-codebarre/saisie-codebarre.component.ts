import { Component, OnInit } from '@angular/core';
import {Article} from '../article';
import { ArticleService } from '../article.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-saisie-codebarre',
  templateUrl: './saisie-codebarre.component.html',
  styleUrls: ['./saisie-codebarre.component.less']
})
export class SaisieCodebarreComponent implements OnInit {

  articleselectionne$: Article = null;
  filterName:string;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
  }

  input_onSearchChange(code: string): void {
    this.getArticleParCode(code);
  }

  getArticleParCode(code: string)
  {
    if (code.length === 8) {
      this.articleService.getArticleParCode(code).subscribe( (article) => this.articleselectionne$ = article);
    } else {
      this.articleselectionne$ = null;
    }
  }

  input_onkeypress(evt) {
    var iKeyCode = (evt.which) ? evt.which : evt.keyCode;
    if (iKeyCode === 13) {
      this.ajouteArticle();
    } else if (iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57)) {
      return false;
    }

    return true;
  }

  button_onClick() {
    this.ajouteArticle();
  }

  ajouteArticle()
  {
    if (this.articleselectionne$) {
      this.articleService.addArticle(this.articleselectionne$);
      this.articleselectionne$ = null;
      this.filterName = '';
    }
  }
}
