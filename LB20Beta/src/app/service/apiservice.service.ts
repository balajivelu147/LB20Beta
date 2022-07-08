import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
   headers=new HttpHeaders();
  tokens = new HttpHeaders();

  constructor(private http: HttpClient) { }

  getBookdetail(){
    return this.http.get('https://bookcart.azurewebsites.net/api/Book')
    }
  
    getHeaders(){
      this.headers = this.headers.set('accept','text/plain')
      return this.headers;
     }
  
     getToken(){
      var t=
       this.tokens =   this.headers.append('Authorization', 'Bearer  '+t),
                      this.headers.set('accept','text/plain')
                      return this.tokens;
     }
    
    postBookDetail(bookId:number){
      this.getHeaders()
      return this.http.post("https://bookcart.azurewebsites.net/api/ShoppingCart/AddToCart/997/"+bookId, {headers:this.headers})
    }
    
    postWishList(bookId:number){
        this.getToken()
  
       return this.http.post("https://bookcart.azurewebsites.net/api/Wishlist/ToggleWishlist/997/"+bookId,{limit:10}, {headers:this.tokens})
      }
  
      deleteWishlist(bookId:any){
        this.getToken()
        return this.http.delete("https://bookcart.azurewebsites.net/api/Wishlist/997",{headers:this.tokens})
      }
      
      books$=this.getBookdetail().pipe(shareReplay(1))
}
