import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModidierproduitComponent } from './modidierproduit.component';

describe('ModidierproduitComponent', () => {
  let component: ModidierproduitComponent;
  let fixture: ComponentFixture<ModidierproduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModidierproduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModidierproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
