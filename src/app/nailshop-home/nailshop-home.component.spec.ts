import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NailshopHomeComponent } from './nailshop-home.component';

describe('NailshopHomeComponent', () => {
  let component: NailshopHomeComponent;
  let fixture: ComponentFixture<NailshopHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NailshopHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NailshopHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
