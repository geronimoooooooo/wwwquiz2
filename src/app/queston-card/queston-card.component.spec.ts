import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestonCardComponent } from './queston-card.component';

describe('QuestonCardComponent', () => {
  let component: QuestonCardComponent;
  let fixture: ComponentFixture<QuestonCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestonCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
