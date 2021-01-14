import { Component, OnInit, Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() optionsData;

  @Output() sendValue : EventEmitter <object> = new EventEmitter<object>();

  dropdownShow = false;
  selectedVal = {};

  constructor() { }

  ngOnInit(): void {
    this.selectedVal = this.optionsData[0];
  }

  toggleDropdown() {
    this.dropdownShow = !this.dropdownShow;

  }

  selectEmi(val){
    this.sendValue.emit(val);
    this.selectedVal = val;
    this.dropdownShow = false;
  }

  isEmpty(obj) {
    return Object.keys(obj).length !== 0;
  }

}
