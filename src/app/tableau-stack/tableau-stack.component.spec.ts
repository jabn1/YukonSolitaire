import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauStackComponent } from './tableau-stack.component';

describe('TableauStackComponent', () => {
  let component: TableauStackComponent;
  let fixture: ComponentFixture<TableauStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableauStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
