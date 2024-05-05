import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { BrandsControllerService, GetBrandByIdResponse } from '../../../../shared/services/api';
import { BrandListItemDto } from '../../models/brand-list-item-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-brand-form',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, ButtonComponent,
  ],
  templateUrl: './edit-brand-form.component.html',
  styleUrl: './edit-brand-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditBrandFormComponent implements OnInit {
  @Input() brandId!: number;

  form!: FormGroup;

  formMessage: string | null = null;
  brand!: GetBrandByIdResponse;

  constructor(private fb: FormBuilder,
    private brandsService: BrandsControllerService,
    private change: ChangeDetectorRef,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm();
    this.getBrand();
  }

  getBrand() {
    this.brandsService.getBrandById({ id: this.brandId }).subscribe(async (brand) => {
      if (brand instanceof Blob) {
        const text = await brand.text();
        this.brand = JSON.parse(text);
      } else {
        this.brand = brand;
      }

      this.form.patchValue({
        name: this.brand.name,
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
    this.brandsService.updateBrand({
      id: this.brandId, updateBrandRequest: {
        name: this.form.value.name,
      },
    }).subscribe({
      complete: () => {
        this.formMessage = 'Brand updated uccessfully';
        this.change.markForCheck();

        setTimeout(() => {
          this.router.navigate(['/management/brands']);
        }, 2000);
      },
    });
  }

}
