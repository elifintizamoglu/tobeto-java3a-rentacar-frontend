import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BrandListItemDto } from '../models/brand-list-item-dto';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
}) // Singleton
export class BrandsService {
  private readonly controllerUrl = `${environment.apiUrl}/api/v1/brands`;

  constructor(private httpClient: HttpClient) {}

  getBrands() {
    return this.httpClient.get<BrandListItemDto[]>(this.controllerUrl, { withCredentials: true });// istek atmıyoruz isteği hazırlıyoruz, observable bir yapı hazırlıyoruz

    // return this.httpClient.get<BrandListItemDto[]>("http://localhost:8080/api/v1/brands", { withCredentials: true });// istek atmıyoruz isteği hazırlıyoruz, observable bir yapı hazırlıyoruz
    // url'e istek atacak ve cevabını izleyebileceğimiz bir yapı oluşturuyoruz.
    // çalışabilmesi için subscribe olmalıyız
  }
}