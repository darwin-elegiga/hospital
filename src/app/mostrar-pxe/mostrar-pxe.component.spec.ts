import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPxeComponent } from './mostrar-pxe.component';

describe('MostrarPxeComponent', () => {
  let component: MostrarPxeComponent;
  let fixture: ComponentFixture<MostrarPxeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarPxeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostrarPxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
