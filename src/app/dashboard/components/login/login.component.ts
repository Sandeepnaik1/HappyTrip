import { Component, ElementRef, OnInit, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginModal') loginModal!: ElementRef;

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    const user = localStorage.getItem('user');
    if (user) {
      this.router.navigate(['/search']); // Redirect to search page if logged in
    }
  }

  login() {
    const validUser = 'admin';
    const validPassword = 'password';

    if (this.username === validUser && this.password === validPassword) {
      localStorage.setItem('user', JSON.stringify({ username: this.username }));
      this.router.navigate(['/search']);
      console.log('Entered:', this.username, this.password);

    } else {
      this.errorMessage = 'Invalid username or password!';
      
    }
  }

  // navigate() {
  //   console.log('Navigating to /search'); // Log a message for debugging
  //   this.router.navigate(['/search']); // Navigate to the search route
  // }

  openModal() {
    if (this.loginModal) {
      const modalElement = this.loginModal.nativeElement as HTMLElement;
      modalElement.classList.add('show');
      modalElement.style.display = 'block';
      document.body.classList.add('modal-open');
    }
  }

  closeModal() {
    if (this.loginModal) {
      const modalElement = this.loginModal.nativeElement as HTMLElement;
      modalElement.classList.remove('show');
      modalElement.style.display = 'none';
      document.body.classList.remove('modal-open');
    }
  }
  }









