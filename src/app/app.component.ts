import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { BtnPrimaryComponent } from './components/buttons/btn-primary/btn-primary.component';
import { BtnSecondaryComponent } from './components/buttons/btn-secondary/btn-secondary.component';
import { BtnTertiaryComponent } from './components/buttons/btn-tertiary/btn-tertiary.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BtnPrimaryComponent, BtnSecondaryComponent, BtnTertiaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
