import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDialogComponent } from './changedialog.component';

describe('ChangedialogComponent', () => {
  let component: ChangeDialogComponent;
  let fixture: ComponentFixture<ChangeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
