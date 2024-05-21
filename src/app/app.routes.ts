import { Routes } from '@angular/router';
import { managementRoutes} from './routes/management-page/management.routes';
import { NotFoundPageComponent } from './routes/not-found-page/not-found-page.component';
import { homeRoutes } from './routes/home-page/home.routes';
import { filterRoutes } from './routes/filter-cars-page/filter.routes';

export const routes: Routes = [
    ...homeRoutes,
    ...managementRoutes, // içinde kaç tane elemanı varsa buraya geçiyor yerleştiriyor olucak, Destructuring operator
    ...filterRoutes,
    {
        path: '**', // diğer pathleri bulamazsa geçerli değilse, geriya kalan tüm pathlerde bu componenti yerleştirir.
        component: NotFoundPageComponent,
    }
];
