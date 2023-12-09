import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DSService } from '../ds.service';
import { Pacientes } from '../paciente';
import { FilterSalaPipe } from '../filter-sala.pipe';

@Component({
  selector: 'app-mostrar-pxs',
  standalone: true,
  imports: [CommonModule,FormsModule, FilterSalaPipe],
  templateUrl: './mostrar-pxs.component.html',
  styleUrl: './mostrar-pxs.component.css'
})
export class MostrarPxsComponent implements OnInit {
  opciones:number=NaN;

  listado:Pacientes[]=[];



  constructor(private servicio:DSService){}
  ngOnInit(): void {
    this.listado=this.servicio.listadopacientes;

  }


}
