import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { SliderComponent } from './slider/slider.component';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SwitchComponent } from './switch/switch.component';
import { FormatedCurrencyPipe } from './formated-currency.pipe';
import { BulletRectangleComponent } from './bullet-rectangle/bullet-rectangle.component';

@NgModule({
  declarations: [CardsComponent, SliderComponent, DropdownComponent, SwitchComponent, FormatedCurrencyPipe, BulletRectangleComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [
    CardsComponent,
    CommonModule,
    SliderComponent,
    FormsModule,
    DropdownComponent,
    SwitchComponent,
    FormatedCurrencyPipe,
    BulletRectangleComponent
  ]
})
export class SharedModule { }
