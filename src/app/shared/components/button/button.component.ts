import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';

  get buttonClass(): string {  // yardımcı getter metodu, variant ile butonun türünü belirleyebileceğim, geriye state dönen bir getter
    return `btn btn-${this.variant}`; // dinamik stringler oluşturulmasını sağlar, içine değişken geçebiliriz, eğik tırnak, dolar ve süslü parantez kullanarak
  }
}

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'link';

