import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  categories:any;
  baseurl = this.api.baseurl;

  constructor(private api:ApiService) { }
  
  ngOnInit(): void {
    this.api.post("productcategory/delete", {}).subscribe((result:any)=>{
      this.categories = result.data;
    });
  }
}
