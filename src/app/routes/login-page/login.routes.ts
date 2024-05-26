import { Routes } from "@angular/router";
import { LoginPageComponent } from "./login-page.component";
import { RegisterPageComponent } from "../register-page/register-page.component";

export const loginRoutes: Routes = [
    {
        path:'login',
        pathMatch:'full',
        component: LoginPageComponent,
    },
    {
        path:'register',
        pathMatch:'full',
        component: RegisterPageComponent,
    },
]