import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetgrpbyURLComponent } from './getgrpby-url.component';

describe('GetgrpbyURLComponent', () => {
  let component: GetgrpbyURLComponent;
  let fixture: ComponentFixture<GetgrpbyURLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetgrpbyURLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetgrpbyURLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
