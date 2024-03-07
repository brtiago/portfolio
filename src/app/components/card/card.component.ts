import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatIconModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  tags = [
    {name: 'java'},
    {name: 'pastel'},
    {name: 'caldo de cana'},
  ];
}
