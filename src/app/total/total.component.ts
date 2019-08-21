import { Component, OnInit } from '@angular/core';
import {Article} from '../article';
import {ArticleService} from '../article.service';


@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.less']
})
export class TotalComponent implements OnInit {

  totalTTC = 0;
  totalHT = 0;
  totalTVA = 0;

  constructor(private articleService: ArticleService) {

  }

  ngOnInit() {
    this.articleService.getTotalTTC().subscribe((total) => {
      this.totalTTC = total;
      this.totalHT = this.totalTTC / 1.2;
      this.totalTVA = this.totalTTC - this.totalHT;
    });
  }

}
