import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bullet-rectangle',
  templateUrl: './bullet-rectangle.component.html',
  styleUrls: ['./bullet-rectangle.component.scss']
})
export class BulletRectangleComponent implements OnInit {

  @Input() matrix;
  matrixConverted = {};
  constructor() { }

  ngOnInit(): void {
    this.matrixConverted['row'] = Array(this.matrix['row']).fill(1);
    this.matrixConverted['col'] = Array(this.matrix['col']).fill(1);
  }

}
