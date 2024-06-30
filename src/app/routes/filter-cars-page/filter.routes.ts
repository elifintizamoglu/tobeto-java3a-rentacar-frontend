import { Routes } from '@angular/router';
import { FilterCarsPageComponent } from './filter-cars-page.component';
import { CarDetailComponent } from '../../features/cars/components/car-detail/car-detail.component';
import { CarPaymentPageComponent } from '../../features/cars/components/car-payment-page/car-payment-page.component';

export const filterRoutes: Routes = [
    {
        path: 'cars', 
        pathMatch: 'full',
        component: FilterCarsPageComponent,
    },
    {
        path: 'car/detail/:carId', 
        pathMatch: 'full',
        component: CarDetailComponent,
    },
    {
        path: 'car/detail/:carId/payment',
        pathMatch: 'full',
        component: CarPaymentPageComponent,
    }
];