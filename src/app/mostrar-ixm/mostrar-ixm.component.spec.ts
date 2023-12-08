import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarIxmComponent } from './mostrar-ixm.component';

describe('MostrarIxmComponent', () => {
  let component: MostrarIxmComponent;
  let fixture: ComponentFixture<MostrarIxmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarIxmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostrarIxmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
