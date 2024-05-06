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
  @Input() initialSelectedModelId: number | null = null;
  @Output() selectModel = new EventEmitter<GetAllModelResponse | null>();

  models!: GetAllModelResponse[];
  selectedModel: GetAllModelResponse | null = null;
  initialSelectedModelIndex: number | null = null;

  constructor(
    private modelsService: ModelsControllerService,
    protected change: ChangeDetectorRef) { }

  // ngOnInit component ilk yerleştiğinde bir kez çalışır.
  ngOnInit(): void {
    this.getModelsList();
  }

  getModelsList() {
    // subscribe olduk, subscribe olduğu anda çalışır
    this.modelsService.getAllModels().subscribe(async (response) => {
      if (response instanceof Blob) {
        const text = await response.text();
        this.models = JSON.parse(text);
      } else {
        this.models = response;
      }

      //this.setSelectedModel();
      if (this.initialSelectedModelId) { // selectedModelId var ise atamasını gerçekleştirir
        this.selectedModel = this.models.find(model => model.id === this.initialSelectedModelId) ?? null;
        this.initialSelectedModelIndex = this.models.findIndex((model) => model.id === this.initialSelectedModelId);
      }
      this.change.markForCheck(); // değişip değişmediğini kontrol et
    });
  }

  onSelectModel(model: GetAllModelResponse) {
    this.selectedModel = this.selectedModel?.id !== model.id ? model : null;
    this.selectModel.emit(this.selectedModel);
  }
}
