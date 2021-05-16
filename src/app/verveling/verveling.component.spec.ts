import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VervelingComponent } from './verveling.component';

describe('VervelingComponent', () => {
  let component: VervelingComponent;
  let fixture: ComponentFixture<VervelingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VervelingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VervelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
