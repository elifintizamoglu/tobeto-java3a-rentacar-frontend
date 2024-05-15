import { Routes } from '@angular/router';
import { CarsListComponent } from './cars-list.component';

export const carsRoutes: Routes = [
    {
        path: 'cars', 
        pathMatch: 'full',
        component: CarsListComponent,
    },
];