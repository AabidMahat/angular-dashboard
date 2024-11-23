import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBoxes,
  faLocationArrow,
  faMoneyBill1,
  faShop,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-widgets',
  standalone: true,
  imports: [FontAwesomeModule, DecimalPipe, CurrencyPipe],
  templateUrl: './top-widgets.component.html',
  styleUrl: './top-widgets.component.css',
})
export class TopWidgetsComponent {
  faLocation = faLocationArrow;
  faShop = faShop;
  faBoxes = faBoxes;
  faMoney = faMoneyBill1;
}
