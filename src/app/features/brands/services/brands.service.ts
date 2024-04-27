import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
}) // Singleton
export class BrandsService {
  data = [
    { id: 1, name: 'Toyota' },
    { id: 2, name: 'Ford' },
    { id: 3, name: 'Chevrolet' },
    { id: 4, name: 'Nissan' },
    { id: 5, name: 'Honda' },
    { id: 6, name: 'Jeep' },
    { id: 7, name: 'Hyundai' },
    { id: 8, name: 'Dodge' },
    { id: 9, name: 'Kia' },
    { id: 10, name: 'GMC' },
  ];

  constructor() {}

  getBrands() {
    return this.data;
  }
}