import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  about = {
    title: "About",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse  varius enim in eros elementum tristique. Duis cursus, mi quis viverra   ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  };
}
