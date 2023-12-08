import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPxsComponent } from './mostrar-pxs.component';

describe('MostrarPxsComponent', () => {
  let component: MostrarPxsComponent;
  let fixture: ComponentFixture<MostrarPxsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarPxsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostrarPxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
