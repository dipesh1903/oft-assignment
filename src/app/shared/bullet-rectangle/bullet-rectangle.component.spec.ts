import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletRectangleComponent } from './bullet-rectangle.component';

describe('BulletRectangleComponent', () => {
  let component: BulletRectangleComponent;
  let fixture: ComponentFixture<BulletRectangleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulletRectangleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletRectangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
