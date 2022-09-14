import { Component, OnInit } from '@angular/core';
import { Machine } from '@shared/models';
import { CardMachineComponent } from './card-machine/card-machine.component';
import { FlashNewsComponent } from './flash-news/flash-news.component';
import { HeaderComponent } from './header/header.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true,
  imports: [NgForOf, CardMachineComponent, FlashNewsComponent, HeaderComponent],
})
export class HomePageComponent implements OnInit {
  machines: Machine[];
  constructor() {
    this.machines = [
      new Machine('BA 1008', '180128', 'assets/images/machine1.png'),
      new Machine('CT 20', '180177', 'assets/images/machine2.png'),
      new Machine('DECO 20S', '180255', 'assets/images/machine3.png'),
    ];
  }

  ngOnInit(): void {}
}
