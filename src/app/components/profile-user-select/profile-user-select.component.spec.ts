import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUserSelectComponent } from './profile-user-select.component';

describe('ProfileUserSelectComponent', () => {
  let component: ProfileUserSelectComponent;
  let fixture: ComponentFixture<ProfileUserSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileUserSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileUserSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
