import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/model/book';
import { ApiserviceService } from 'src/app/service/apiservice.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {

  @Output()
  filteredValue = new EventEmitter();
  @Output()
  priceFilter = new EventEmitter()
  
  categories:{
    categoryId: number;
    categoryName: string;
  } | undefined
  filterCategory:any;
  background1 = 'rgb(248, 119, 72)'
  background2 = 'white'
  background3 = 'white'
  background4 = 'white' 
  background5 = 'white'
  background6 = 'white'
  Array:any=[]
  
  max: any;
  min: any;
  value: any;
  step = 100;
  thumbLabel = true;
  public filteredProducts: any;
  public books:any
  filterData:any
  isLoading:any;
  searchItem: any;
  Array2:any=[]


  constructor(private api :ApiserviceService) { }

  ngOnInit(): void {
    this.api.getBookdetail().subscribe((data:any)=>{
      this.Array2 = data
    })
    this.filterPrice()
    this.setPriceFilterProperties()
  }

  filterPrice(){
    this.Array = this.Array2.filter((a:any)=>{
      if(a.price <= this.value){
        return a;
      }
    })
    console.log(this.value)
  }

  filter1(category: any) {
    this.filterPrice()
    this.filterCategory = this.Array.filter((a: any) => {
      if (a.category === category || category === '') {
        return a;
      }
    })
    this.clear()
    this.filteredValue.emit(this.filterCategory);
    this.background1 = 'rgb(248, 119, 72)'
  }
  filter2(category: any) {
    this.filterPrice()

    this.filterCategory = this.Array.filter((a: any) => {
      if (a.category === category || category === '') {
        return a;
        
      }
    })
    this.clear()

    this.filteredValue.emit(this.filterCategory);
    this.background2 = 'rgb(248, 119, 72)'

  }


  filter3(category: any) {
    this.filterPrice()
    this.filterCategory = this.Array.filter((a: any) => {
      if (a.category === category || category === '') {
        return a;
      }

    })
    this.clear()
    this.filteredValue.emit(this.filterCategory);
    this.background3 = 'rgb(248, 119, 72)'
  }
  filter4(category: any) {
    this.filterPrice()
    this.filterCategory = this.Array.filter((a: any) => {
      if (a.category === category || category === '') {
        return a;
      }

    })
    this.clear()
    this.filteredValue.emit(this.filterCategory);
    this.background4 = 'rgb(248, 119, 72)'
  }
  filter5(category: any) {
    this.filterPrice()
    this.filterCategory = this.Array.filter((a: any) => {
      if (a.category === category || category === '') {
        return a;
      }

    })
    this.clear()
    this.filteredValue.emit(this.filterCategory);
    this.background5 = 'rgb(248, 119, 72)'
  }

  filter6(category: any) {
    this.filterPrice()
    this.filterCategory = this.Array.filter((a: any) => {
      if (a.category === category || category === '') {
        return a;
      }

    })
    this.clear()
    this.filteredValue.emit(this.filterCategory);
    this.background6 = 'rgb(248, 119, 72)'

  }
  clear() {
    this.background1 = '';
    this.background2 = '';
    this.background3 = '';
    this.background4 = '';
    this.background5 = '';
    this.background6 = '';
  }

  onChange(event:any){
    this.priceFilter.emit(event.value)
  }
  
  
  // formatLabel(value: number) {
  //   if (value >= 1000) {
  //     return Math.round(value / 1000) + 'k';
  //   }
  //   return value;
  // }
  setPriceFilterProperties(){
    this.api.books$.pipe().subscribe(
      (data:any) => {
        this.setMinValue(data);
        this.setMaxValue(data);
      }
    );
  }
  setMinValue(book: Book[]) {
    this.min = book.reduce((prev, curr) => {
      return prev.price < curr.price ? prev : curr;
    }).price;
  }

  setMaxValue(book: Book[]) {
    this.value = this.max = book.reduce((prev, curr) => {
      return prev.price > curr.price ? prev : curr;
    }).price;
    console.log(this.value)
  }


}
