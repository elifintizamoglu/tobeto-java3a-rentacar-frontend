import { group } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { Add4RequestParams, BrandsControllerService } from '../../../../shared/services/api';

@Component({
  selector: 'app-add-brand-form',
  standalone: true,
  imports: [
    CommonModule,
    //FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
  ],
  templateUrl: './add-brand-form.component.html',
  styleUrl: './add-brand-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddBrandFormComponent implements OnInit {

  //nameInput: string = '';
  form!: FormGroup; // ! -> şu an bir değer atamayacağım sonra atayacağım
  formMessage: string | null = null;

  constructor(private formBuilder: FormBuilder,
    private brandsService: BrandsControllerService,
    private change: ChangeDetectorRef) { }

  ngOnInit(): void { // component ilk yüklendiğinde form oluşturulacak
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
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

    const request: Add4RequestParams = {
      createBrandRequest: {
        name: this.form.value.name,
      }
    }
    this.brandsService.add4(request).subscribe({
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
        this.formMessage = 'Brand added successfully';
        this.form.reset();
        this.change.markForCheck();
      },
    });
  }
}
