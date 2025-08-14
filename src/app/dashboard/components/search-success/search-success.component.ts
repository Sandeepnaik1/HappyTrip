import { Component, Input, OnInit, Pipe } from '@angular/core';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-search-success',
  templateUrl: './search-success.component.html',
  styleUrls: ['./search-success.component.css']
})


// @Pipe({
//   name:'titlecase'
// })
export class SearchSuccessComponent implements OnInit {
  countdowntime = 5
  countdown: any = this.countdowntime
  intervalId: any;
  disabled=false


// transform(value:string): string{
// if(!value)return "";
// return value
// .split('')
// .map(word=>word.charAt(0).toUpperCase +word.slice(1).toUpperCase())
// .join('')
// }


  

  constructor() { }

  ngOnInit(): void {
  //   this.starttime();

  // }

  // starttime() {
  //   this.intervalId = setInterval(() => {

  //     if (this.countdown > 1) {
  //       this.countdown--;
  //     }
  //     else {
  //       this.disabled=true
  //       clearInterval(this.intervalId)
  //       this.countdown="takeoff"
  //     }
  //   }, 1000)


  // }


  // resettime() {
  //   clearInterval(this.intervalId);
  //   this.countdown = this.countdowntime;
  //   this.starttime();  
    }

  
}


