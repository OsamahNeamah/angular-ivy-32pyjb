import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'SubPage',
  templateUrl: './SubPage.component.html',
  styleUrls: ['./SubPage.component.css'],
})
export class SubPageComponent implements OnInit {
  @Input()
  article: { id: number; title: string; body: string };
  class: string;
  @Input() main_h1_color: string;
  @Output()
  main_h1_color_Change: EventEmitter<string> = new EventEmitter<string>();
  value = '';
  constructor() {}
  ngOnInit() {
    this.class = 'button_' + this.article.id;
    switch (this.article.id) {
      case 1:
        this.value = 'Blue';
        break;
      case 2:
        this.value = 'Black';
        break;
      case 3:
        this.value = 'Red';
        break;
      case 4:
        this.value = 'Green';
        break;
      default:
        this.value = 'Yellow';
    }
  }
  changeStyle(style: string): void {
    this.main_h1_color_Change.emit((this.main_h1_color = 'color:' + style));
    console.log(this.main_h1_color);
  }
}
