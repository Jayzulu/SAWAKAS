import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offboarding',
  standalone: true,
  imports: [],
  templateUrl: './offboarding.component.html',
  styleUrl: './offboarding.component.css'
})
export class OffboardingComponent {
  offboardingForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, @Inject(AuthService) private authService: AuthService) {
    this.offboardingForm = this.fb.group({
      name: [''],
      effectiveDate: [''],
      clearanceForm: [''],
      certifications: [''],
      exitInterview: [''],
      automatedNotification: [''],
      personalEmail: ['']
    });
  }
  logout() {
    console.log('Logout');
    this.router.navigate(['/loginandsignup']);
  }
  submitForm() {
    console.log('Form Data:', this.offboardingForm.value);
  }
}