import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListproduitsComponent } from './listproduits.component';

describe('ListproduitsComponent', () => {
  let component: ListproduitsComponent;
  let fixture: ComponentFixture<ListproduitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListproduitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListproduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
