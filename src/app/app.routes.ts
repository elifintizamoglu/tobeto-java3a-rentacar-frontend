import { Routes } from '@angular/router';
import { HomePageComponent } from './routes/home-page/home-page.component';

export const routes: Routes = [
    {
        path: '', 
        pathMatch: 'full',
        component: HomePageComponent,
    },
];
