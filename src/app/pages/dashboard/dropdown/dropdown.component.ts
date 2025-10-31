 import { Component, OnInit, signal } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UpdateModeEnum } from 'chart.js';

@Component({
  selector: 'app-dropdown',
  standalone:true,
  imports: [HttpClientModule,],
  template: './dropdown.component.html'
})
export class DropdownComponent implements OnInit {
  countries: any[] = [];
  states: any|string [] = [];
  flag: any[]=[];
 
  
  selectedCountry: string = '';
  selectedState: string|any = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    
    this.http.get<any[]>('https://api.example.com/countries')
      .subscribe(res => this.countries = res);
  }

  onCountryChange() {
    
    if (this.selectedCountry) {
      this.http.get<any[]>(`https://api.example.com/states?country=${this.selectedCountry}`)
        .subscribe(res => this.states = res);
    } else {
      this.states = [];
    }
    this.selectedState = ''; 

   
  }
 


}
