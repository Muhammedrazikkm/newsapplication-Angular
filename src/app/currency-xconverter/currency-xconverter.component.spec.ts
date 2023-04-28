import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyXconverterComponent } from './currency-xconverter.component';

describe('CurrencyXconverterComponent', () => {
  let component: CurrencyXconverterComponent;
  let fixture: ComponentFixture<CurrencyXconverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyXconverterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyXconverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
