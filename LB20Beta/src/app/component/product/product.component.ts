import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/service/apiservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  Array: any=[]
  Responce: any
  category:any
  color = 'black'
 filterCategory:any=[]
 myArray:any=[]
 priceRange :any;
 toggle :boolean | undefined;
 isActive:any
 buttonText:any
 t:any='text'
 filterData:any
 Array2:any=[];
 price:any

  constructor(private api : ApiserviceService) {}

  ngOnInit(): void {
    this.api.getBookdetail().subscribe(Response => {
     
      this.Array = Response;
      this.filterCategory=Response
    })
  }
  toggleValue(bookId:number) {
    console.log(this.Array[bookId])
     this.api.postWishList(this.Array[bookId].bookId).subscribe((data:any)=>{
       console.log(data)
      this. myArray .push(this.Array[bookId].bookId)
 })
}
deleteWishlist(bookId:number){
 this.api.postWishList(this.Array[bookId].bookId).subscribe((data:any)=>{
   console.log(data)
   const indexx=this.myArray.indexOf(this.Array[bookId].bookId);
   console.log(indexx)
   if(indexx>-1){
   this.myArray.splice(indexx,1);
 }
}
 )
}

filterValue(event:any) {
 this.filterCategory = event;
 console.log(this.filterCategory)

}

priceValue(value:any){
    this.priceRange = value
}


addToCart(bookId:number){
this.api.postBookDetail( this.Array[bookId].bookId).subscribe((data:any)=>{
 console.log(data)
})
}

}
