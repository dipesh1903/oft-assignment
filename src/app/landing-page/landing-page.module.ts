import { NgModule , Optional , SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { CalculatorComponent } from './eligibility-calculator/calculator/calculator.component';
import { CalculatorTotalComponent } from './eligibility-calculator/calculator-total/calculator-total.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CalculatorComponent, CalculatorTotalComponent, PageHeaderComponent, HomePageComponent],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class LandingPageModule { 
  constructor (@Optional() @SkipSelf() parentModule: LandingPageModule) {
    if (parentModule) {
      throw new Error(
          'LandingPageModule is already loaded. Import it in the AppModule only');
    }
  }
}
