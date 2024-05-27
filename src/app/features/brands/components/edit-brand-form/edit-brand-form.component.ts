import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { BrandsControllerService, GetBrandByIdResponse } from '../../../../shared/services/api';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
  brand!: GetBrandByIdResponse;

  constructor(private fb: FormBuilder,
    private brandsService: BrandsControllerService,
    private change: ChangeDetectorRef,
    private router: Router,
    private toastr: ToastrService) { }

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
      this.toastr.warning('Please fill the form correctly.');
      return;
    }

    this.edit();
  }

  edit() {
    this.brandsService.updateBrandById({
      id: this.brandId, updateBrandRequest: {
        name: this.form.value.name,
      },
    }).subscribe({
      complete: () => {
        this.toastr.success('Brand updated uccessfully');
        this.change.markForCheck();

        setTimeout(() => {
          this.router.navigate(['/management/brands']);
        }, 2000);
      },
    });
  }

}
