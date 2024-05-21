import { Routes } from '@angular/router';
import { FilterCarsPageComponent } from './filter-cars-page.component';

export const filterRoutes: Routes = [
    {
        path: 'cars', 
        pathMatch: 'full',
        component: FilterCarsPageComponent,
    },
];