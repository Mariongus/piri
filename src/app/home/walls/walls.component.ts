import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-walls',
  templateUrl: './walls.component.html',
  styleUrls: ['./walls.component.scss']
})
export class WallsComponent implements OnInit {

  urle : string = "https://cdn.pixabay.com/photo/2017/05/09/13/33/laptop-2298286_960_720.png";
  urlx: string = "https://cdn.pixabay.com/photo/2017/05/12/15/16/hexagon-2307348_960_720.png";

  texto : string = "Home screen is actually show.";
  titulo :string = "Home";
  constructor() { }

  ngOnInit(): void {
  }

}
