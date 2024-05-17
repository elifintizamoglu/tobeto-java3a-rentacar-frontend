import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GetAllBrandResponse, GetAllModelResponse, GetModelsByBrandIdRequestParams, GetModelsByBrandIdResponse, ModelsControllerService } from '../../services/api';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-box',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './select-box.component.html',
  styleUrl: './select-box.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectBoxComponent implements OnInit{

  @Input() brands: GetAllBrandResponse[] = [];
  @Input() models: GetModelsByBrandIdResponse[] = [];
  selectedBrand: string = '';

  filterForm: FormGroup;

  constructor(private modelService: ModelsControllerService, private fb: FormBuilder) { 
    this.filterForm = this.fb.group({
      brand: [''],
      model: [''],
      fuelType: [''],
      transmissionType: ['']
    });
  }


  ngOnInit() {
  }

  onChange(id: number) {
    this.models = [];
    if (id) {
      const requestParams: GetModelsByBrandIdRequestParams = {
        id: id 
      };
      this.modelService.getModelsByBrandId(requestParams).subscribe(models => {
        this.models = models;
        console.log(models);
      });
    } else {
      this.models = [];
    }
  }
}
