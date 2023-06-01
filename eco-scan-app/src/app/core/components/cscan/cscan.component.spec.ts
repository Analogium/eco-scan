import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CscanComponent } from './cscan.component';

describe('CscanComponent', () => {
  let component: CscanComponent;
  let fixture: ComponentFixture<CscanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CscanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CscanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
