import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-select-box',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
  ],
  templateUrl: './select-box.component.html',
  
  styleUrl: './select-box.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectBoxComponent implements OnInit {


  @Input() formControlName!: string;
  @Input() label!: string;
  @Input() items: any[] = [];
  @Input() itemLabelKey!: string;
  @Input() itemValueKey!: string;

  filterForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private change: ChangeDetectorRef
  ) {
    this.filterForm = this.fb.group({
      [this.formControlName]: ['']
    });
  }

  ngOnInit() {
    this.filterForm.get(this.formControlName)?.valueChanges.subscribe(() => {
      this.change.markForCheck();
    });
  }
}
