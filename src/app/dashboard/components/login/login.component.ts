import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {




  ngOnInit() {

  }
  constructor(private router: Router) {}

  navigate() {
    console.log('Navigating to /search'); // Log a message for debugging
    this.router.navigate(['/search']); // Navigate to the search route
  }
  }









