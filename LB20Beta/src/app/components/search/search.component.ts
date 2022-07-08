import { Component, OnInit } from '@angular/core';
import { BooklistService } from 'src/app/booklist.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  books = [];
  searchinput = '';
  showDropdown :any;
  login: boolean = false;
  filteredOptions: any = [];
  constructor(public book: BooklistService) { }

  ngOnInit() {
    this.getData()
  }

  search(e: any) {
    let search = e.target.value
    if (e.target.value.length > 0) {
      this.showDropdown = true
      this.filteredOptions = this.books.filter((book: any) => {
        return book.toLowerCase().includes(search.toLowerCase())
      });
    } else {
      this.showDropdown = false
    }
    console.log(this.filteredOptions)
  }
  getData() {
    this.book.getData()
      .subscribe((response: any) => {
        this.books = response.map((titles:any)=>{
          return titles.title
        });
        console.log(this.books)
      });
  }
 
  cancelSearch(){
    this.showDropdown = false;
  }

}
