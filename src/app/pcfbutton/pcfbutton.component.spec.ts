import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PCFButtonComponent } from './pcfbutton.component';

describe('PCFButtonComponent', () => {
  let component: PCFButtonComponent;
  let fixture: ComponentFixture<PCFButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PCFButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PCFButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
