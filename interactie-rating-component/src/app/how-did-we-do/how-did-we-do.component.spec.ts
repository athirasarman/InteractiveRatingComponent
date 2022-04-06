import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HowDidWeDoComponent } from './how-did-we-do.component';

describe('HowDidWeDoComponent', () => {
  let component: HowDidWeDoComponent;
  let fixture: ComponentFixture<HowDidWeDoComponent>;
  let location: Location;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      providers: [
        { provide: Router, useValue: routerSpy }
      ],
      declarations: [HowDidWeDoComponent]
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

  it('should display heading', () => {
    let h1 = fixture.nativeElement.querySelector('.heading');
    expect(h1.textContent).toContain(component.heading);
  });

  it('should display paragraph', () => {
    let text = fixture.nativeElement.querySelector('.text');
    expect(text.textContent).toContain(component.text);
  });

  it('should display button', () => {
    let button = fixture.nativeElement.querySelector('button');
    expect(button).toBeTruthy();
    expect(button.textContent).toContain('SUBMIT');
  });

  it('should display Rating Numbers', () => {
    let rating = fixture.nativeElement.querySelector('.flex');
    expect(rating.childElementCount).toBe(component.numberArray.length);
    component.numberArray.forEach((number,index)=>{
      expect(rating.children[index].innerText).toContain(number.toString());
    })
  });

  it('should save rating when you click on rating buttons', () => {
    let value=1;
    component.setValue(value);
    expect(component.rating).toBe(value);
  });

  it('should show alert when rating is not selected', () => {
    spyOn(window, "alert");
    component.onSubmit();
    expect(window.alert).toHaveBeenCalledWith("Please give a feedback.");
  });

  it('should navigate to thankyou page when you click on Submit Button', () => {
    component.rating=3;
    component.onSubmit();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/thankyou',{rating:component.rating}]);
  });

});
