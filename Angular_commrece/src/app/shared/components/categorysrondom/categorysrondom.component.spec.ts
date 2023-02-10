import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorysrondomComponent } from './categorysrondom.component';

describe('CategorysrondomComponent', () => {
  let component: CategorysrondomComponent;
  let fixture: ComponentFixture<CategorysrondomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorysrondomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorysrondomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
