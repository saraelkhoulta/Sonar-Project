import { Component, Input } from '@angular/core';
import { Machine } from '@shared/models';

@Component({
  selector: 'app-card-machine',
  templateUrl: './card-machine.component.html',
  styleUrls: ['./card-machine.component.scss'],
  standalone: true,
})
export class CardMachineComponent {
  @Input() machine: Machine | undefined;
}
