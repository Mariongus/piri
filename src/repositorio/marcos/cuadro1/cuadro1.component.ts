import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cuadro1',
  templateUrl: './cuadro1.component.html',
  styleUrls: ['./cuadro1.component.scss']
})
export class Cuadro1Component implements OnInit {
  
  @Input() url1: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
