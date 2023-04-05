import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbConjugationComponent } from './verb-conjugation.component';

describe('VerbConjugationComponent', () => {
  let component: VerbConjugationComponent;
  let fixture: ComponentFixture<VerbConjugationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerbConjugationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerbConjugationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
