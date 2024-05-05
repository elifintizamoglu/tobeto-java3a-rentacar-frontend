import { Routes } from '@angular/router';
import { ManagementPageComponent } from './management-page.component';
import { authGuard } from '../../shared/guards/auth.guard';
import { ManagementBrandsPageComponent } from './management-brands-page/management-brands-page.component';
import { ManagementCreateBrandPageComponent } from './management-brands-page/management-create-brand-page/management-create-brand-page.component';
import { ManagementEditBrandPageComponent } from './management-brands-page/management-edit-brand-page/management-edit-brand-page.component';

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
            }
        ],
    },
];
