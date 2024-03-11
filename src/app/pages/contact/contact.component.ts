import { Component } from '@angular/core';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { UiButtonComponent } from '../../components/ui-button/ui-button.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ClipboardModule, UiButtonComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  value = "email@example.com";
}
