import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundationStackComponent } from './foundation-stack.component';

describe('FoundationStackComponent', () => {
  let component: FoundationStackComponent;
  let fixture: ComponentFixture<FoundationStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundationStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundationStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
