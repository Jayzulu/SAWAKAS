import { Component, Inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-auditlogs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './auditlogs.component.html',
  styleUrl: './auditlogs.component.css'
})
export class AuditlogsComponent {
  constructor(private router: Router, @Inject(AuthService) private authService: AuthService) {}
  logout() {
    console.log('Logout');
    this.router.navigate(['/loginandsignup']);
  }
  
}
