import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    images= [
      {path: '../../assets/products/2.png'},
      {path: '../../assets/products/3.png'},
      {path: '../../assets/products/4.png'},
      {path: '../../assets/products/5.png'},
      {path: '../../assets/products/6.png'},
      {path: '../../assets/products/7.png'},
      {path: '../../assets/products/8.png'}]
    
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }

}
