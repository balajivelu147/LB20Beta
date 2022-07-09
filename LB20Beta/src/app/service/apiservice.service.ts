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
      var t='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzdWZpeWEiLCJ1c2VyaWQiOiI5OTciLCJ1c2VyVHlwZUlkIjoiMiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IjIiLCJqdGkiOiJkZTYyMGMyZC02ZmVmLTRkNzgtOGEwOS1hNTI0NmJiMGIxYzIiLCJleHAiOjE2NTcxOTk4MTcsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzY0LyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzY0LyJ9.-T1oeJZJUN5ziHMksb6CIZmBJFWM349NY-d_BprWFEo'
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
