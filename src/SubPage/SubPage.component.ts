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
  myColors: string[] = ['Blue', 'Black', 'Red', 'Green'];
  @Input() main_h1_color: string;
  @Output()
  main_h1_color_Change: EventEmitter<string> = new EventEmitter<string>();
  value = '';
  constructor() {}
  ngOnInit() {
    this.class = 'button_' + this.article.id;
    this.value = this.myColors[this.article.id - 1];
  }
  changeStyle(style: string): void {
    this.main_h1_color_Change.emit((this.main_h1_color = 'color:' + style));
    console.log(this.main_h1_color);
    let mydivs = document.getElementsByClassName('SubPage_Container');
    for (let i = 0; i < mydivs.length; i++)
      if (i + 1 == this.article.id) {
        mydivs[i].className =
          'SubPage_Container ' + this.myColors[this.article.id - 1];
      } else {
        mydivs[i].className = 'SubPage_Container';
      }
  }
}
