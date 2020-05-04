import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar1',
  templateUrl: './navbar1.component.html',
  styleUrls: ['./navbar1.component.scss']
})
export class Navbar1Component implements OnInit {
navbar1_img : string = "https://cdn.pixabay.com/photo/2017/05/12/15/16/hexagon-2307348_960_720.png";
  constructor() { }

  ngOnInit(): void {
  }

}
