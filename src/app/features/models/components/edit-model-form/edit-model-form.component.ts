import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ModelsControllerService, GetModelByIdResponse, GetAllBrandResponse, GetAllFuelResponse, GetAllTransmissionResponse, FuelsControllerService, BrandsControllerService, TransmissionsControllerService } from '../../../../shared/services/api';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SelectBoxComponent } from '../../../../shared/components/select-box/select-box.component';

@Component({
  selector: 'app-edit-model-form',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, ButtonComponent, SelectBoxComponent,
  ],
  templateUrl: './edit-model-form.component.html',
  styleUrl: './edit-model-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditModelFormComponent implements OnInit {
  @Input() modelId!: number;

  editForm!: FormGroup;
  model!: GetModelByIdResponse;
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
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.createForm();
    this.getModel();
    this.brandsService.getAllBrands().subscribe(brands => this.brands = brands);
    this.fuelsService.getAllFuels().subscribe(fuels => this.fuels = fuels);
    this.transmissionService.getAllTransmissions().subscribe(transmissions => this.transmissions = transmissions);
  }

  getModel() {
    this.modelsService.getModelById({ id: this.modelId }).subscribe(model => {
      this.model = model;
      this.editForm.patchValue({
        name: this.model.name,
        brand: this.model.brandName, // Use brandId instead of brandName
        fuel: this.model.fuelName, // Use fuelId instead of fuelName
        transmission: this.model.transmissionName // Use transmissionId instead of transmissionName
      });
    });
  }

  createForm() {
    this.editForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      fuel: ['', [Validators.required]],
      transmission: ['', [Validators.required]],
    });
  }

  onFormSubmit(event: Event) {
    event.preventDefault(); 
    if (this.editForm.invalid) {
      this.toastr.warning('Please fill the form correctly.');
      return;
    }
    this.edit();
  }

  edit() {
    this.modelsService.updateModelById({
      id: this.modelId, updateModelRequest: {
        name: this.editForm.value.name,
        brandId: this.editForm.value.brand ? +this.editForm.value.brand : undefined,
        fuelId: this.editForm.value.fuel ? +this.editForm.value.fuel : undefined,
        transmissionId: this.editForm.value.transmission ? +this.editForm.value.transmission : undefined,
      },
    }).subscribe({
      next: (response) => {
        this.toastr.success('Model updated successfully.');
        this.editForm.reset();
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
