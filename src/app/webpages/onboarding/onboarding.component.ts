import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef, Inject   } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.css'
})
export class OnboardingComponent {

  constructor(private router: Router, @Inject(AuthService) private authService: AuthService) {}

  @ViewChild('fileInput') fileInput!: ElementRef;
  profileImage: string = 'picpro.jpg'; // Default profile picture

  onFileSelect() {
    this.fileInput.nativeElement.click(); // Opens file selector
  }
  onUpload(): void {
    console.log('Upload button clicked');

  }

  logout() {
    console.log('Logout');
    this.router.navigate(['/loginandsignup']);
  }

  uploadImage(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.profileImage = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
