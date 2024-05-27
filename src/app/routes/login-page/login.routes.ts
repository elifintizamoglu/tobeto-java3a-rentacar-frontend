import { Routes } from "@angular/router";
import { LoginPageComponent } from "./login-page.component";
import { RegisterPageComponent } from "../register-page/register-page.component";
import { UsersComponent } from "../../features/users/users.component";

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
    {
        path:'user',
        pathMatch:'full',
        component: UsersComponent,
    },
]