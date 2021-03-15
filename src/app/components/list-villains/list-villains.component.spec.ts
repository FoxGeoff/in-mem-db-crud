import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVillainsComponent } from './list-villains.component';

describe('ListVillainsComponent', () => {
  let component: ListVillainsComponent;
  let fixture: ComponentFixture<ListVillainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVillainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVillainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
