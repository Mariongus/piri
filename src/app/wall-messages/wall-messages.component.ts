import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wall-messages',
  templateUrl: './wall-messages.component.html',
  styleUrls: ['./wall-messages.component.scss']
})
export class WallMessagesComponent implements OnInit {
  urle : string = "https://cdn.pixabay.com/photo/2017/05/09/13/33/laptop-2298286_960_720.png";
  urlx: string = "https://cdn.pixabay.com/photo/2017/05/12/15/16/hexagon-2307348_960_720.png";

  titulo : string = "Messages";
  texto : string = "Messages screen is actually show."

  constructor() { }

  ngOnInit(): void {
  }

}
