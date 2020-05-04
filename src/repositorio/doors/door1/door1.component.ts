import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-door1',
  templateUrl: './door1.component.html',
  styleUrls: ['./door1.component.scss']
})
export class Door1Component implements OnInit {

  @Input() texto : string;
  @Input() urlGraf : string;
  @Input() urlPerf :string;
  @Input() titulo: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
