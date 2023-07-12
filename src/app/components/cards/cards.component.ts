import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {NgApexchartsModule} from 'ng-apexcharts';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
