import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieLayoutPageComponent } from './movie-layout-page.component';

describe('MovieLayoutPageComponent', () => {
  let component: MovieLayoutPageComponent;
  let fixture: ComponentFixture<MovieLayoutPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieLayoutPageComponent]
    });
    fixture = TestBed.createComponent(MovieLayoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
