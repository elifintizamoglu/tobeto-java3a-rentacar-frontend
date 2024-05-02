import { importProvidersFrom } from "@angular/core";
import { ApiModule } from "../api.module";
import { Configuration, ConfigurationParameters } from "../configuration";
import { environment } from "../../../../../environments/environment";

function apiConfigFactory(): Configuration {
    const params: ConfigurationParameters = {
        basePath: environment.apiUrl,
    };
    return new Configuration(params);
}

// apiModule'ün sağladıklarını üstteki configürasyonlarla almış oldum
// app.config.ts dosyasında kullanıyor olucaz
export function provideApiServices() {
    return importProvidersFrom(ApiModule.forRoot(apiConfigFactory))
} 