import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-secondary',
  standalone: true,
  imports: [],
  templateUrl: './btn-secondary.component.html',
  styleUrl: './btn-secondary.component.scss'
})
export class BtnSecondaryComponent {
  public isDisabled = true;
}
