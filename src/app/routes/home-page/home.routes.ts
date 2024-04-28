import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';

export const homeRoutes: Routes = [
    {
        path: '', 
        pathMatch: 'full',
        component: HomePageComponent,
    },
];
