import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AktualComponent } from './aktual.component';

describe('AktualComponent', () => {
  let component: AktualComponent;
  let fixture: ComponentFixture<AktualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AktualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AktualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
