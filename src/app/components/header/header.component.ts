import { Component, OnInit } from '@angular/core';
import { BooklistService } from 'src/app/booklist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  books:any=[];
  books1:any=[];
  books2:any=[];
  
  
  cartcount: any;
  wishlistcount: any = 4;
  login: boolean = false;

  constructor(public book: BooklistService) { }

  ngOnInit(): void {
    this.getData()
    this.getCartData()
  this.getWishlistData()

  }
  
  getData() {
    this.book.getData()
      .subscribe((response: any) => {
        this.books = response;
        console.log(this.books);
        

      });
  }
  getCartData(){
    this.book.getCartData().subscribe((data:any)=>{
      this.books1=data;
      console.log(this.books1);
    })
    }
    getWishlistData(){
      this.book.getWishlistData().subscribe((data1:any)=>{
        this.books2=data1;
        console.log(this.books2);
      });
    }
  
  logout() {
    this.login = true;
  }
  loginS() {
    this.login = false;
  }
}
