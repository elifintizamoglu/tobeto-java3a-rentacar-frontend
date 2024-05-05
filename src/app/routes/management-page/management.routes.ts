import { Routes } from '@angular/router';
import { ManagementPageComponent } from './management-page.component';
import { authGuard } from '../../shared/guards/auth.guard';
import { ManagementBrandsPageComponent } from './management-brands-page/management-brands-page.component';
import { ManagementCreateBrandPageComponent } from './management-brands-page/management-create-brand-page/management-create-brand-page.component';
import { ManagementEditBrandPageComponent } from './management-brands-page/management-edit-brand-page/management-edit-brand-page.component';
import { ManagementModelsPageComponent } from './management-models-page/management-models-page.component';
import { ManagementCreateModelPageComponent } from './management-models-page/management-create-model-page/management-create-model-page.component';
import { ManagementEditModelPageComponent } from './management-models-page/management-edit-model-page/management-edit-model-page.component';

export const managementRoutes: Routes = [
    {
        path: 'management', // localhost:4200/management
        canActivate: [authGuard],  // bu sayfanın açılabilmesi için true dönmesi lazım, management sayfalarına gidebilmek için buradan geçmesi lazım
        data: {
            requiredRoles: ['admin'],
        },
        component: ManagementPageComponent,
        // ilk karşılaştığı <router-outlet>'e ManagementPageComponent'i yerleştiricek
        children: [ // yukarısı aktif olmazsa children da aktif olmaz
            {
                path: 'brands', // localhost:4200/management/brands
                component: ManagementBrandsPageComponent,
                // ikinci karşılaştığı <router-outlet>'e ManagementPageComponent'i yerleştiricek
            },
            {
                path: 'brands/create', // localhost:4200/management/brands/create
                component: ManagementCreateBrandPageComponent,
            },
            {
                path: 'brands/edit/:brandId', // localhost:4200/management/brands/edit/1
                // :brandId brandId isminde bir route parametresi tanımlar
                component: ManagementEditBrandPageComponent,
            },


            {
                path: 'models',
                component: ManagementModelsPageComponent,
            },
            {
                path: 'models/create', // localhost:4200/management/models/create
                component: ManagementCreateModelPageComponent,
            },
            {
                path: 'models/edit/:modelId', // localhost:4200/management/models/edit/1
                component: ManagementEditModelPageComponent,
            },
        ],
    },
];
