import { Component, OnInit , Input , Output , EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnChanges {

  sliderRangeColor: string;
  rangeValue;
  rangeDiff;
  finalRangeValue;

  @Input() sliderContent : Object;

  @Output() sendValue : EventEmitter <number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.rangeCalculation();
  }

  isEmpty(obj) {
    return Object.keys(obj).length !== 0;
  }

  hi(event) {
    this.sliderRangeColor = `linear-gradient(to right, #674A98 0%, #674A98 ${(this.rangeValue)/(100)*100}%, #DEE2E6 ${(this.rangeValue)/(100)*100}%, #DEE2E6 100%)`
    this.finalRangeValue = this.sliderContent['min'] + (this.rangeDiff * this.rangeValue) / 100;
    this.sendValue.emit(this.finalRangeValue);
  }

  rangeCalculation() {
    this.rangeDiff = this.sliderContent['max'] - this.sliderContent['min'];
    this.rangeValue = ((this.sliderContent['value'] - this.sliderContent['min']) * 100) / this.rangeDiff;
    this.finalRangeValue = this.sliderContent['value'];
    if(this.isEmpty(this.sliderContent)) {
      this.sliderRangeColor = `linear-gradient(to right, #674A98 0%, #674A98 ${(this.rangeValue)/(100)*100}%, #DEE2E6 ${(this.rangeValue)/(100)*100}%, #DEE2E6 100%)`
    }
  }

}
