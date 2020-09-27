import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasebookComponent } from './purchasebook.component';

describe('PurchasebookComponent', () => {
  let component: PurchasebookComponent;
  let fixture: ComponentFixture<PurchasebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
