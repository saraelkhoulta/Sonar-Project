import { Component, OnInit } from '@angular/core';
import { AddLinePipe } from '@shared/pipes';

@Component({
  selector: 'app-flash-news',
  templateUrl: './flash-news.component.html',
  styleUrls: ['./flash-news.component.scss'],
  standalone: true,
  imports: [AddLinePipe],
})
export class FlashNewsComponent implements OnInit {
  text: string;
  constructor() {
    this.text =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.';
  }

  ngOnInit(): void {}
}
