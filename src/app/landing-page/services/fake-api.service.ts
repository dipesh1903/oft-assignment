import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {

  fakeData = {
    col1: [{
      name: 'Quick cash disbursement',
      description: 'Get terms loans that your business needs within 72 hrs',
      src: '/assets/png/Home/Get Paid Instantly.png'
    },
    {
      name: 'Low-interest rate',
      description: 'Achieve your financial goals with an amazing interest rate starting at 13% per annum',
      src: '/assets/png/Home/Low interest rate.png'
    },
    {
      name: 'Zero Paperwork',
      description: 'Get started instantly by submitting only your basic details & bank statements',
      src: '/assets/png/Home/Secure Payments.png'
    }],
    col2: [{
      name: 'Ace your business finances',
      description: 'Manage banking, accounting & everything in between, on one platform',
      src: '/assets/png/Home/freelancer_feature_icon_6@1.5x.png',
      selected: true
    },
    {
      name: 'Loans to fight COVID-19',
      description: 'Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh',
      src: '/assets/png/Home/Covid.png'
    }]

  }

  monthlyIncomeRange = {
    min:100000,
    max:300000,
    value: 200000
  }

  monthlyExpenseRange = {
    min:0,
    max: 200000,
    value: 20000
  }

  emiOptions = [
    {
      name: '1 Month',
      id: 'one_month',
      value: '1',
    },
    {
      name: '3 Months',
      id: 'three_month',
      value: '3',
    },
    {
      name: '6 Months',
      id: 'six_month',
      value: '6',
    },
    {
      name: '1 year',
      id: 'one_year',
      value: '12',
    }

  ]

  constructor() { }

  getData() {
    return this.fakeData;
  }

  getMonthlyIncomeRange() {
    return this.monthlyIncomeRange;
  }

  getMonthlyExpenseRange() {
    return this.monthlyExpenseRange;
  }

  getEmiOptions() {
    return this.emiOptions;
  }
}
