import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVillianComponent } from './update-villian.component';

describe('UpdateVillianComponent', () => {
  let component: UpdateVillianComponent;
  let fixture: ComponentFixture<UpdateVillianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateVillianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVillianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
