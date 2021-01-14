import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { CONTENT } from '../../../../config/static-content';
import { FakeApiService } from '../../services/fake-api.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {


  @Output() sendValue : EventEmitter <object> = new EventEmitter<object>();
  calc_headings : object;
  
  slider_MI = {}; 
  slider_ME = {};
  emiOptions: object;
  emiReq: boolean;
  public finalData = {
    income: '',
    expense: '',
    emiReq: "",
    emiPeriod: "",
    emi: 0
  }
  emiAmount = "";
  
  constructor(private fakeApi : FakeApiService) {
    
    this.calc_headings = CONTENT.HOME_PAGE.ELIGIBLE_CALCULATOR;
    this.slider_ME = this.fakeApi.getMonthlyExpenseRange();
    this.slider_MI = this.fakeApi.getMonthlyIncomeRange();
    this.slider_ME['name'] = this.calc_headings['ME_VALUE'];
    this.slider_MI['name'] = this.calc_headings['MI_VALUE'];
    this.emiOptions = this.fakeApi.getEmiOptions();
    this.finalData['expense'] = this.slider_ME['value'];
    this.finalData['income'] = this.slider_MI['value'];

   }

  ngOnInit(): void {
  }

  isEmpty(obj) {
    if(Array.isArray(obj)) {
      return obj.length !== 0;
    } else {
      return Object.keys(obj).length !== 0;
    }
  }

  getSelectedExpense(event) {
    this.finalData.expense = event;
    this.sendValue.emit(this.finalData);
  }

  getSelectedIncome(event) {
    this.slider_ME['max'] = event;
    this.slider_ME = Object.assign({}, this.slider_ME);
    this.finalData['income'] = event;
    this.sendValue.emit(this.finalData);
  }

  getEmiReq(event) {
    this.finalData.emiReq = event;
    this.emiReq = event;
    this.sendValue.emit(this.finalData);
  }

  getEmiPeriod(event) {
    this.finalData.emiPeriod = event;
    this.sendValue.emit(this.finalData);
  }

  formatedEmi(event) {
    this.emiAmount = event;
    this.finalData.emi = event;
    this.sendValue.emit(this.finalData);
  }

}
