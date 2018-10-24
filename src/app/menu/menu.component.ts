import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(

  ) { }

  selectedItem: any;

  ngOnInit() {
  }

  listClick(item) {
    console.log(item);
    this.selectedItem = item;  // don't forget to update the model here
    // ... do other stuff here ...
}
}
