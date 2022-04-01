import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowDidWeDoComponent } from './how-did-we-do.component';

describe('HowDidWeDoComponent', () => {
  let component: HowDidWeDoComponent;
  let fixture: ComponentFixture<HowDidWeDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowDidWeDoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowDidWeDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
