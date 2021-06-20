import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserByAdminComponent } from './create-user-by-admin.component';

describe('CreateUserByAdminComponent', () => {
  let component: CreateUserByAdminComponent;
  let fixture: ComponentFixture<CreateUserByAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserByAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
