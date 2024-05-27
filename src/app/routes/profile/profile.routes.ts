import { Routes } from "@angular/router";
import { UsersComponent } from "../../features/users/users.component";
import { AdminProfilePageComponent } from "./admin-profile-page/admin-profile-page.component";

export const profileRoutes: Routes = [
    {
        path:'user',
        pathMatch:'full',
        component: UsersComponent,
    },
    {
        path:'management',
        pathMatch:'full',
        component: AdminProfilePageComponent,
    },
]