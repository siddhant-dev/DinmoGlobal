import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod-slider',
  templateUrl: './prod-slider.component.html',
  styleUrls: ['./prod-slider.component.scss']
})
export class ProdSliderComponent implements OnInit {
  images= [{path: '../../assets/products/1.png'},
  {path: '../../assets/products/2.png'},
  {path: '../../assets/products/3.png'},
  {path: '../../assets/products/4.png'},
  {path: '../../assets/products/5.png'},
  {path: '../../assets/products/6.png'},
  {path: '../../assets/products/7.png'},
  {path: '../../assets/products/8.png'}]

  constructor() { }

  ngOnInit(): void {
  }

}
