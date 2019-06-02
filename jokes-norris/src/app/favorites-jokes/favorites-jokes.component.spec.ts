import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesJokesComponent } from './favorites-jokes.component';

describe('FavoritesJokesComponent', () => {
  let component: FavoritesJokesComponent;
  let fixture: ComponentFixture<FavoritesJokesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesJokesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
