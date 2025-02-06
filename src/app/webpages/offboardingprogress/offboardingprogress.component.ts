import { Component, Inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-offboardingprogress',
  standalone: true,
  imports: [],
  templateUrl: './offboardingprogress.component.html',
  styleUrl: './offboardingprogress.component.css'
})
export class OffboardingprogressComponent {
  constructor(private router: Router, @Inject(AuthService) private authService: AuthService) {}
  
  logout() {
    console.log('Logout');
    this.router.navigate(['/loginandsignup']);
  }

}
