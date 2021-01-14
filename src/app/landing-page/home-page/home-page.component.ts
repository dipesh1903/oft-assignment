import { Component, OnInit } from '@angular/core';
import { FakeApiService } from '../services/fake-api.service';

import { CONTENT } from '../../../config/static-content';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {

  imgSrc = {
    rightCircleSrc: '',
    videoImgSrc: '',
    leftCircleSrc: '',
    waveFooterSrc: ''
  };

  btnText = {
    openAccount : ''
  }

  fakeData = {
    col1: [],
    col2: []
  }

  calculatorDetails = {};
  subtotalValues = {};

  bulletRect = {
    row: 4,
    col: 21
  }

  constructor(private fakeApi : FakeApiService) { 
    this.imgSrc.rightCircleSrc = CONTENT.HOME_PAGE.RIGHT_CIRCLE;
    this.imgSrc.videoImgSrc = CONTENT.HOME_PAGE.IMG_VIDEO;
    this.imgSrc.leftCircleSrc = CONTENT.HOME_PAGE.LEFT_CIRCLE;
    this.imgSrc.waveFooterSrc = CONTENT.HOME_PAGE.WAVE_FOOTER;
    this.btnText.openAccount = CONTENT.HOME_PAGE.OPEN_ACCOUNT_BTN;
    this.fakeData = this.fakeApi.getData();
  }

  ngOnInit(): void {
  }

  getCalculatorDetails(data) {
    this.calculatorDetails = data;
    this.subtotalValues = {
      'emi' : data.emi || 0,
      'loan' : data.income - data.expense || 0
    }

  }

}
