import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVillainComponent } from './create-villain.component';

describe('CreateVillainComponent', () => {
  let component: CreateVillainComponent;
  let fixture: ComponentFixture<CreateVillainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVillainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVillainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
