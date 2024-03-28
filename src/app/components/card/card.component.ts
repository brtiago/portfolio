import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ChipComponent } from '../chip/chip.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatIconModule,
    ChipComponent,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() card = {
    title: 'Card Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, totam doloribus nulla provident ut quas. Soluta qui possimus odit animi quia et illo maiores, repellendus repudiandae modi! Atque, sapiente quidem?',
    imgUrl:'../../../assets/imagens/pexels-luis-gomes-546819.jpg',
    imgAlt:'Photo by Author',
    tagList: [
      {name: 'Tag 1'},
      {name: 'Tag 2'},
      {name: 'Tag 3'},
      {name: 'Tag 4'},
    ],
    deployUrl: 'https://www.google.com/',
    codeUrl:'https://github.com/',
  }
}
