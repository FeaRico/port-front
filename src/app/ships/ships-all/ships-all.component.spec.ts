import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipsAllComponent } from './ships-all.component';

describe('ShipsAllComponent', () => {
  let component: ShipsAllComponent;
  let fixture: ComponentFixture<ShipsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipsAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
