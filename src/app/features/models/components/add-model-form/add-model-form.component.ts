import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { AddModelRequestParams, BrandsControllerService, FuelsControllerService, GetAllBrandResponse, GetAllFuelResponse, GetAllTransmissionResponse, ModelsControllerService, TransmissionsControllerService } from '../../../../shared/services/api';
import { Router } from '@angular/router';
import { SelectBoxComponent } from '../../../../shared/components/select-box/select-box.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-model-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    SelectBoxComponent,
  ],
  templateUrl: './add-model-form.component.html',
  styleUrl: './add-model-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddModelFormComponent implements OnInit {

  addForm!: FormGroup;
  brands: GetAllBrandResponse[] = [];
  fuels: GetAllFuelResponse[] = [];
  transmissions: GetAllTransmissionResponse[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private modelsService: ModelsControllerService,
    private brandsService: BrandsControllerService,
    private fuelsService: FuelsControllerService,
    private transmissionService: TransmissionsControllerService,
    private change: ChangeDetectorRef,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.brandsService.getAllBrands().subscribe(brands => {
      this.brands = brands;
      this.change.detectChanges();
    });
    this.fuelsService.getAllFuels().subscribe(fuels => {
      this.fuels = fuels;
      this.change.detectChanges();
    });
    this.transmissionService.getAllTransmissions().subscribe(transmissions => {
      this.transmissions = transmissions;
      this.change.detectChanges();
    });
  }

  createForm() {
    this.addForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      fuel: ['', [Validators.required]],
      transmission: ['', [Validators.required]],
    });
  }

  onFormSubmit(event: Event) {
    event.preventDefault(); 
    if (this.addForm.invalid) {
      this.toastr.warning('Please fill the form correctly.');
      return;
    }
    this.add();
  }

  add() {
    const request: AddModelRequestParams = {
      createModelRequest: {
        name: this.addForm.value.name,
        brandId:  this.addForm.value.brand ? +this.addForm.value.brand : undefined,
        fuelId: this.addForm.value.fuel ? +this.addForm.value.fuel : undefined,
        transmissionId: this.addForm.value.transmission ? +this.addForm.value.transmission : undefined,
      }
    }

    this.modelsService.addModel(request).subscribe({
      next: () => {
        this.toastr.success('Model added successfully');
        this.addForm.reset();
        this.change.markForCheck();
        setTimeout(() => {
          this.router.navigate(['/management/models']);
        }, 1500);
      },
      error: (error) => {
        if (error.error && error.error.detail) {
          this.toastr.error(error.error.detail);
        } else {
          this.toastr.error('An unexpected error occurred. Please try again.');
        }
        this.change.markForCheck();
      }
    });
  }
}
