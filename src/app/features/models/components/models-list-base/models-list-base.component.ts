import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { GetAllModelResponse, ModelsControllerService } from '../../../../shared/services/api';

@Component({
  standalone: true,
  imports: [],
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelsListBaseComponent {

  models!: GetAllModelResponse[];

  constructor(
    private modelsService: ModelsControllerService,
    protected change: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getModelsList();
  }

  getModelsList() {
    this.modelsService.getAllModels().subscribe((response) => {
      this.models = response;
      this.change.markForCheck();
    });
  }
}
