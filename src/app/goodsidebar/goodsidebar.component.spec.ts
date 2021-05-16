import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsidebarComponent } from './goodsidebar.component';

describe('GoodsidebarComponent', () => {
  let component: GoodsidebarComponent;
  let fixture: ComponentFixture<GoodsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodsidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
