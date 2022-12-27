import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraBodyComponent } from './cabecera-body.component';

describe('CabeceraBodyComponent', () => {
  let component: CabeceraBodyComponent;
  let fixture: ComponentFixture<CabeceraBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabeceraBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabeceraBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
