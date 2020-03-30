import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  values: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues(); //call this method when component initializes
  }

  getValues(){
    this.http.get('https://localhost:5001/weatherforecast').subscribe(response => {
      this.values=response;
      console.log(this.values);
      }, error =>{
        console.log(error);
      });
  }

}
