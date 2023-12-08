import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarTxsexoComponent } from './mostrar-txsexo.component';

describe('MostrarTxsexoComponent', () => {
  let component: MostrarTxsexoComponent;
  let fixture: ComponentFixture<MostrarTxsexoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarTxsexoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostrarTxsexoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
