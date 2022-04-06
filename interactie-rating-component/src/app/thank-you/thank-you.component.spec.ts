import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ThankYouComponent } from './thank-you.component';
import {ActivatedRoute, convertToParamMap, Router} from "@angular/router";


describe('ThankYouComponent', () => {
  let component: ThankYouComponent;
  let fixture: ComponentFixture<ThankYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {snapshot: {params: {rating: '3'}}}
        }
      ],
      declarations: [ ThankYouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get rating from routing ', () => {
    expect(component.rating).toBe(3);
  });

  it('should display rating ', () => {
    let rating=fixture.nativeElement.querySelector('.rating').children[0];
    expect(rating.innerText).toBe(`You selected ${component.rating} out of 5`);
  });
  
  it('should display heading', () => {
    let h1 = fixture.nativeElement.querySelector('.heading');
    expect(h1.textContent).toContain(component.heading);
  });

  it('should display paragraph', () => {
    let text = fixture.nativeElement.querySelector('.text');
    expect(text.textContent).toContain(component.text);
  });
});
