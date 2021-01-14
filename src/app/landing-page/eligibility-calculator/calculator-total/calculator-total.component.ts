import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CONTENT } from '../../../../config/static-content';

@Component({
  selector: 'app-calculator-total',
  templateUrl: './calculator-total.component.html',
  styleUrls: ['./calculator-total.component.scss']
})
export class CalculatorTotalComponent implements OnInit, OnChanges {

  subtotalHeadings: object;
  @Input() subtotalValues: object;
  finalData = [];
  constructor() { 
    this.subtotalHeadings = CONTENT.HOME_PAGE.CALCULATOR_SUBTOTAL;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.summarizeData();
  }

  ngOnInit(): void {
  }

  summarizeData() {
    this.finalData = [
      {
        name: this.subtotalHeadings['TEXT1'],
        value: this.subtotalValues['loan'] || 0
     },
      {
        name: this.subtotalHeadings['TEXT2'],
        value: this.subtotalValues['emi'] || 0
      }  
   ]
  }

}
