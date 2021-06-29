import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLeagueComponent } from './profile-league.component';

describe('ProfileLeagueComponent', () => {
  let component: ProfileLeagueComponent;
  let fixture: ComponentFixture<ProfileLeagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileLeagueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
