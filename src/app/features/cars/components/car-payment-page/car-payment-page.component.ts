import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HomeLayoutComponent } from '../../../../shared/layouts/home-layout/home-layout.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CreateCardRequest, CreateRentalRequest, CreatePayAndRentRequest, GetCarByIdResponse, GetUserByEmailResponse, PaymentsControllerService, UsersControllerService, PayAndRentRequestParams } from '../../../../shared/services/api';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-car-payment-page',
  standalone: true,
  imports: [
    CommonModule,
    HomeLayoutComponent,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './car-payment-page.component.html',
  styleUrls: ['./car-payment-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarPaymentPageComponent {
  car: GetCarByIdResponse;
  startDate: string;
  endDate: string;
  cardForm!: FormGroup;
  userId: number;
  email: any;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private paymentService: PaymentsControllerService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.car = JSON.parse(this.route.snapshot.queryParams['car']);
    this.startDate = this.route.snapshot.queryParams['startDate'];
    this.endDate = this.route.snapshot.queryParams['endDate'];
    this.userId = this.route.snapshot.queryParams['userId'];


    this.cardForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern('\\d{16}')]],
      expirationMonth: ['', [Validators.required, Validators.pattern('0[1-9]|1[0-2]')]],
      expirationYear: ['', [Validators.required, Validators.pattern('\\d{4}')]],
      cvv: ['', [Validators.required, Validators.pattern('\\d{3}')]],
      cardHolderFullName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]]
    });
  }

  submitPayment(event: Event) {
    event.preventDefault();

    const rentalRequest: CreateRentalRequest = {
      carId: this.car.id,
      userId: this.userId,
      startDate: this.startDate,
      endDate: this.endDate,
    };

    console.log(this.userId);
    const cardRequest: CreateCardRequest = {
      userId: this.userId,
      cardNumber: this.cardForm.value.cardNumber,
      expirationMonth: this.cardForm.value.expirationMonth,
      expirationYear: this.cardForm.value.expirationYear,
      cvv: this.cardForm.value.cvv,
      cardHolderFullName: this.cardForm.value.cardHolderFullName,
    };

    const payAndRentRequest: CreatePayAndRentRequest = {
      rentalRequest: rentalRequest,
      cardRequest: cardRequest
    };

    const requestParams: PayAndRentRequestParams = {
      createPayAndRentRequest: payAndRentRequest
    };

    this.paymentService.payAndRent(requestParams).subscribe({

      next: (response) => {
        if (response.success) {
          this.toastr.success(response.message);
          setTimeout(() => {
            this.router.navigate(['/cars']);
          }, 2000);
        } else {
          this.toastr.error(response.message);
        }
      },
      error: (error) => {
        this.toastr.error(error.error.message);
      }
    });
  }
}
