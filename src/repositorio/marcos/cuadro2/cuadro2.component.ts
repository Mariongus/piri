import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cuadro2',
  templateUrl: './cuadro2.component.html',
  styleUrls: ['./cuadro2.component.scss']
})
export class Cuadro2Component implements OnInit {
@Input() texto: string;
@Input() titulo: string;
  constructor() { }

  ngOnInit(): void {
  }

}
