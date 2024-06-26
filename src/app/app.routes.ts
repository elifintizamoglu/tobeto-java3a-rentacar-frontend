import { Routes } from '@angular/router';
import { managementRoutes} from './routes/management-page/management.routes';
import { NotFoundPageComponent } from './routes/not-found-page/not-found-page.component';
import { homeRoutes } from './routes/home-page/home.routes';
import { filterRoutes } from './routes/filter-cars-page/filter.routes';
import { loginRoutes } from './routes/login-page/login.routes';
import { profileRoutes } from './routes/profile/profile.routes';

export const routes: Routes = [
    ...homeRoutes,
    ...managementRoutes, // içinde kaç tane elemanı varsa buraya geçiyor yerleştiriyor olucak, Destructuring operator
    ...filterRoutes,
    ...loginRoutes,
    ...profileRoutes,
    {
        path: '**', // diğer pathleri bulamazsa geçerli değilse, geriya kalan tüm pathlerde bu componenti yerleştirir.
        component: NotFoundPageComponent,
    }
];
