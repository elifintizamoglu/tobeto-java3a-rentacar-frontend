import { group } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { AddModelRequestParams, ModelsControllerService } from '../../../../shared/services/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-model-form',
  standalone: true,
  imports: [
    CommonModule,
    //FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
  ],
  templateUrl: './add-model-form.component.html',
  styleUrl: './add-model-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddModelFormComponent implements OnInit {

  //nameInput: string = '';
  form!: FormGroup; // ! -> şu an bir değer atamayacağım sonra atayacağım
  formMessage: string | null = null;

  constructor(private formBuilder: FormBuilder,
    private modelsService: ModelsControllerService,
    private change: ChangeDetectorRef,
    private router: Router) { }

  ngOnInit(): void { // component ilk yüklendiğinde form oluşturulacak
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      brandId: ['', [Validators.required]],
      fuelId: ['', [Validators.required]],
      transmissionId: ['', [Validators.required]],
    });
  }

  onFormSubmit() {
    if (this.form.invalid) {
      this.formMessage = 'Please fill all required fields.';
      return;
    }
    this.add();
  }

  add() {

    const request: AddModelRequestParams = {
      createModelRequest: {
        name: this.form.value.name,
        brandId: this.form.value.brandId,
        fuelId: this.form.value.fuelId,
        transmissionId: this.form.value.transmissionId
      }
    }
    this.modelsService.addModel(request).subscribe({
      next: (response) => {
        // Next: Observable'dan gelen veri yakaladığımız fonksiyon
        console.log("a");
        console.log(response);
      },
      error: (error) => {
        // Error: Observable'dan gelen hata yakaladığımız fonksiyon
        this.formMessage = error.error.message;
        this.change.markForCheck();// OnPush olduğu için bir sonraki bir olaya kadar değişikliği algılamaz. Böylece biz manuel olarak değişikliği algılamasını sağlıyoruz.
      },
      complete: () => {
        // Complete: Observable'dan gelen veri akışının tamamlandığını bildiren fonksiyon. Complete çalıştığı taktirde observable'dan gelen veri akışı sona erer.
        this.formMessage = 'Model added successfully';
        this.form.reset();
        this.change.markForCheck();
        setTimeout(() => {
          this.router.navigate(['/management/models']);
        }, 2000);
      },
    });
  }
}
