import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worshops',
  templateUrl: './worshops.component.html',
  styleUrls: ['./worshops.component.scss']
})
export class WorshopsComponent implements OnInit {

  url:string="../../../assets/background/Worshops/";
  images:string[]=[this.url+"1.jpg",
  this.url+"2.jpg",
  this.url+"3.jpg",
  this.url+"4.jpg",
  this.url+"5.jpg",
  this.url+"6.jpg",
  this.url+"7.jpg",
]
  constructor() { }

  ngOnInit(): void {
  }

}
