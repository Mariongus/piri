import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wall-notifications',
  templateUrl: './wall-notifications.component.html',
  styleUrls: ['./wall-notifications.component.scss']
})
export class WallNotificationsComponent implements OnInit {
  urle : string = "https://cdn.pixabay.com/photo/2017/05/09/13/33/laptop-2298286_960_720.png";
  urlx: string = "https://cdn.pixabay.com/photo/2017/05/12/15/16/hexagon-2307348_960_720.png";

  texto : string = "Notifications screen is actually show."
  titulo : string = "Notifications"

  texto2 : string = "Receive your own notifications free."
  titulo2 : string = "Is back!";

  texto3 : string = "Make your dreams real.";
  titulo3 : string = "With us!"
  constructor() { }

  ngOnInit(): void {
  }

}
