import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTokenInterceptor } from './app/shared/interceptor/http-token.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([HttpTokenInterceptor])),
    ...appConfig.providers
  ]
}).catch((err) => console.error(err));