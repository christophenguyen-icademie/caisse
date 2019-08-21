import { Component, OnInit } from '@angular/core';
import {Article} from '../article';
import {ArticleService} from '../article.service';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.less']
})
export class ArticlesComponent implements OnInit {

  articles: Article[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getCaddie().subscribe((caddie) => {
      this.articles = caddie;
    });
  }

  supprimeArticle(article)
  {
    this.articleService.removeArticle(article);
  }

}
