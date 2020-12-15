import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApirecipeComponent } from './apirecipe.component';

describe('ApirecipeComponent', () => {
  let component: ApirecipeComponent;
  let fixture: ComponentFixture<ApirecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApirecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApirecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
