import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';





@Injectable({
  providedIn: 'root'
})
export class BooklistService {
  toastr: any;
  


  constructor(private http: HttpClient) { 
    
  }
 

  getData() {
    return this.http.get('https://bookcart.azurewebsites.net/api/book/')
    
    
      
  }
  getCartData(){
    return this.http.get('https://bookcart.azurewebsites.net/api/user/1013');
  }
  getWishlistData(){
    return this.http.get('https://bookcart.azurewebsites.net/api/Wishlist/1');
  }

 
}
