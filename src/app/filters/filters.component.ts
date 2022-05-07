import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  filter = false;


  constructor() { }

  ngOnInit() {
  }
  filters(){
    if(this.filter == false){
      this.filter = true;
    }else{
      this.filter = false;
    }
  }

}