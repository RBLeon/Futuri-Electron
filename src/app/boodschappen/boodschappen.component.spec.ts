import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoodschappenComponent } from './boodschappen.component';

describe('BoodschappenComponent', () => {
  let component: BoodschappenComponent;
  let fixture: ComponentFixture<BoodschappenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoodschappenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoodschappenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
