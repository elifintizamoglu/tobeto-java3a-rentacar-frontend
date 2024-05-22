import { Routes } from "@angular/router";
import { LoginPageComponent } from "./login-page.component";

export const loginRoutes: Routes = [
    {
        path:'login',
        pathMatch:'full',
        component: LoginPageComponent,
    },
]