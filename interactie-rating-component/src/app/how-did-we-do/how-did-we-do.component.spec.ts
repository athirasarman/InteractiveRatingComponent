import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HowDidWeDoComponent } from './how-did-we-do.component';

describe('HowDidWeDoComponent', () => {
  let component: HowDidWeDoComponent;
  let fixture: ComponentFixture<HowDidWeDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
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

});
