import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarXciComponent } from './mostrar-xci.component';

describe('MostrarXciComponent', () => {
  let component: MostrarXciComponent;
  let fixture: ComponentFixture<MostrarXciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarXciComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostrarXciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
