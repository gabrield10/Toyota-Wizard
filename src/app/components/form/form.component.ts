import { Component, OnInit } from '@angular/core';
import { DataService } from "./../../services/data.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  posts=[];
  constructor(dataService: DataService) { 
    dataService.getData().subscribe(data =>{
      this.posts= data;
    });
  }

  ngOnInit() {
  }

}
