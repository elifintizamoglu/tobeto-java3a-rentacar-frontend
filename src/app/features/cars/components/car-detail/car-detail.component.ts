import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HomeLayoutComponent } from '../../../../shared/layouts/home-layout/home-layout.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AddRentalRequestParams, CarsControllerService, CreateRentalRequest, GetCarByIdResponse, GetUserByEmailResponse, RentalsControllerService, UsersControllerService } from '../../../../shared/services/api';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenService } from '../../../token/token.service';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-car-detail',
  standalone: true,
  imports: [
    CommonModule,
    HomeLayoutComponent,
    FormsModule,
    ButtonComponent,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './car-detail.component.html',
  styleUrl: './car-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarDetailComponent implements OnInit {
  carId!: number;
  car: GetCarByIdResponse | undefined;
  //startDate: string | undefined;
  //endDate: string | undefined;
  minDate: string | undefined;
  email: any;
  user: GetUserByEmailResponse | undefined;
  dateForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private carService: CarsControllerService,
    private rentalService: RentalsControllerService,
    private change: ChangeDetectorRef,
    private tokenService: TokenService,
    private toastr: ToastrService,
    private userService: UsersControllerService,
    private fb: FormBuilder,
    private router: Router) {
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0]; 
    //this.endDate = this.startDate;
  }



  ngOnInit(): void {
    this.createForm();
    this.getCarIdFromRoute();
    this.getCarDetails(this.carId);
    this.getEmail();
    this.getUser();
  }

  createForm() {
    this.dateForm = this.fb.group({
      startDate: [''],
      endDate: ['']
    });
  }

  private getCarIdFromRoute() {
    this.route.params.subscribe((params) => {
      const carId = params['carId'];
      if (!carId) return;
      this.carId = Number(carId);
    });
  }

  getCarDetails(id: number) {
    this.carService.getCarById({ id: id }).subscribe((car) => {
      this.car = car;
      this.change.markForCheck();
    });
  }

  getEmail() {
    this.email = this.tokenService.getUserEmail();
  }

  getUser() {
    this.userService.getUserByEmail({ email: this.email }).subscribe(user => {
      this.user = user;
    })
  }

  rentCar(event: Event) {
    event.preventDefault();
    if (!this.email) {
      this.toastr.warning('You must login to rent a car.');
      return;
    }

    const startDate = this.dateForm.value.startDate;
    const endDate = this.dateForm.value.endDate;

    if (!startDate || !endDate) {
      this.toastr.warning('Please select both start and end dates.');
      return;
    }

    const rentalRequest: CreateRentalRequest = {
      carId: this.carId,
      userId: this.user?.id,
      startDate: this.dateForm.value.startDate,
      endDate: this.dateForm.value.endDate,
    };

    const requestParams: AddRentalRequestParams = { createRentalRequest: rentalRequest };

    this.rentalService.addRental(requestParams).subscribe({
      next: (response) => {
        this.toastr.success('Car rented successfully.');
        this.toastr.info('Total price is: ' + response.totalPrice + ' TL');
        this.change.markForCheck();
        setTimeout(() => {
          this.router.navigate(['/cars']);
        }, 2000);
      },
      error: (error) => {
        if (error.error && error.error.detail) {
          this.toastr.error(error.error.detail);
        } else {
          this.toastr.error('An unexpected error occurred. Please try again.');
        }
        this.change.markForCheck();
      }
    });
  }
}
