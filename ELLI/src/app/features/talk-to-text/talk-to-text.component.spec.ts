import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkToTextComponent } from './talk-to-text.component';

describe('TalkToTextComponent', () => {
  let component: TalkToTextComponent;
  let fixture: ComponentFixture<TalkToTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalkToTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalkToTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
