import { Component, OnInit } from '@angular/core';
import {CONTENT , TITLE} from '../../../config/static-content';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  headerData = [];
  logoSrc: string;
  loginTitle;
  signUpTitle;

  constructor() { 
    this.headerData = CONTENT.HEADER.ITMES_COMMON;
    this.logoSrc = CONTENT.HEADER.LOGO;
    this.loginTitle = TITLE.LOGIN;
    this.signUpTitle = TITLE.SIGNUP;
  }
  ngOnInit(): void {
  }

}
