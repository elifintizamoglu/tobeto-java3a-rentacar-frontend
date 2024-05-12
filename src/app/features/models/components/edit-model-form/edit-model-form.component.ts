import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ModelsControllerService, GetModelByIdResponse } from '../../../../shared/services/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-model-form',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, ButtonComponent,
  ],
  templateUrl: './edit-model-form.component.html',
  styleUrl: './edit-model-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditModelFormComponent implements OnInit {
  @Input() modelId!: number;

  form!: FormGroup;

  formMessage: string | null = null;
  model!: GetModelByIdResponse;

  constructor(private fb: FormBuilder,
    private modelsService: ModelsControllerService,
    private change: ChangeDetectorRef,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm();
    this.getModel();
  }

  getModel() {
    this.modelsService.getModelById({ id: this.modelId }).subscribe(async (model) => {
      if (model instanceof Blob) {
        const text = await model.text();
        this.model = JSON.parse(text);
      } else {
        this.model = model;
      }

      this.form.patchValue({
        name: this.model.name,
      });
    });
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required]]
    });
  }

  onFormSubmit() {
    if (this.form.invalid) {
      this.formMessage = 'Please fill the form correctly';
      return;
    }

    this.edit();
  }

  edit() {
    this.modelsService.updateModelById({
      id: this.modelId, updateModelRequest: {
        name: this.form.value.name,
        brandId: 0,
        fuelId: 0,
        transmissionId: 0
      },
    }).subscribe({
      complete: () => {
        this.formMessage = 'Model updated uccessfully';
        this.change.markForCheck();

        setTimeout(() => {
          this.router.navigate(['/management/models']);
        }, 2000);
      },
    });
  }

}
