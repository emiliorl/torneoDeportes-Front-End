import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSelectedComponent } from './player-selected';

describe('PlayerSelectedComponent', () => {
  let component: PlayerSelectedComponent;
  let fixture: ComponentFixture<PlayerSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerSelectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
