import { Component, OnInit, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  checked = false;

  @Output() sendValue : EventEmitter <boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleCheckBox() {
    this.sendValue.emit(this.checked);
  }

}
