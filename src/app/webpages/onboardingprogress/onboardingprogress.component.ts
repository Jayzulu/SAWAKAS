import { Component ,Inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboardingprogress',
  standalone: true,
  imports: [],
  templateUrl: './onboardingprogress.component.html',
  styleUrl: './onboardingprogress.component.css'
})
export class OnboardingprogressComponent {
  constructor(private router: Router, @Inject(AuthService) private authService: AuthService) {}

  logout() {
    console.log('Logout');
    this.router.navigate(['/loginandsignup']);
  }


}
