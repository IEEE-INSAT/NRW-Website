import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-hackathon',
  templateUrl: './hackathon.component.html',
  styleUrls: ['./hackathon.component.scss']
})
export class HackathonComponent implements OnInit {

  constructor() { }
  currentImage:number=0;

  images=String[5]=[
    "../../../assets/background/Hackathon/1.jpg",
    "../../../assets/background/Hackathon/2.jpg",
    "../../../assets/background/Hackathon/3.jpg",
    "../../../assets/background/Hackathon/4.jpg",
    "../../../assets/background/Hackathon/5.jpg"
  ]

  ngOnInit(): void {
    setInterval(() => {
      this.changeBackground(); 
      }, 2000);
  }
  changeBackground():void{
    if(this.currentImage==4)
    this.currentImage=0
    else
    this.currentImage++
  }
}
