
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  demo:any;
   countDownDate = new Date("june 6, 2022").getTime();
   x = setInterval(()=>{
     var now = new Date().getTime();
     var distance = this.countDownDate - now;
     var days = Math.floor(distance/(1000*60*60*24));
     var hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
     var minutes = Math.floor((distance % (1000*60*60))/(1000*60));
     this.demo= days+ "Days   " + hours + "Hours  " + minutes+"Minutes  ";
     if(distance<0){
       clearInterval(this.x);
       this.demo = " "
     }
    })
}
