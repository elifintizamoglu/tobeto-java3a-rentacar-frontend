import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditModelFormComponent } from '../../../../features/models/components/edit-model-form/edit-model-form.component';

@Component({
  selector: 'app-management-edit-model-page',
  standalone: true,
  imports: [
    CommonModule, EditModelFormComponent,
  ],
  templateUrl: './management-edit-model-page.component.html',
  styleUrl: './management-edit-model-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementEditModelPageComponent implements OnInit {
  modelId!: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getModelIdFromRoute();
  }

  private getModelIdFromRoute() {
    this.route.params.subscribe((params) => {
      const modelId = params['modelId'];
      if (!modelId) return;

      this.modelId = Number(modelId);

    });
  }
}
