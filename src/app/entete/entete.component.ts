import { Component, OnInit } from '@angular/core';
import { Caisse } from '../caisse';

@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.less']
})
export class EnteteComponent implements OnInit {

  caisse: Caisse = {
    code: 1,
    caissier: 'Christophe',
    boutique:'Ma Boutique de prêt-à-porter'
  };
  today: number = Date.now();
  interval;

  startTimer() {
    this.interval = setInterval(() => {
      this.today = Date.now();
    },1000);
  }

  constructor() { }

  ngOnInit() {
    this.startTimer();
  }
}
