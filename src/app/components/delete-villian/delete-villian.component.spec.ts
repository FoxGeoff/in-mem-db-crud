import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVillianComponent } from './delete-villian.component';

describe('DeleteVillianComponent', () => {
  let component: DeleteVillianComponent;
  let fixture: ComponentFixture<DeleteVillianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteVillianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteVillianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
