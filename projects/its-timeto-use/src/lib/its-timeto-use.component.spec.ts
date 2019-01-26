import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItsTimetoUseComponent } from './its-timeto-use.component';

describe('ItsTimetoUseComponent', () => {
  let component: ItsTimetoUseComponent;
  let fixture: ComponentFixture<ItsTimetoUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItsTimetoUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItsTimetoUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
