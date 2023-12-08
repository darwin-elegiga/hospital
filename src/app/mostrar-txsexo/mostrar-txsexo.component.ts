import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DSService } from '../ds.service';
import { Pacientes } from '../paciente';
import { FilterSexoPipe } from '../filter-sexo.pipe';

@Component({
  selector: 'app-mostrar-txsexo',
  standalone: true,
  imports: [CommonModule,FilterSexoPipe],
  templateUrl: './mostrar-txsexo.component.html',
  styleUrl: './mostrar-txsexo.component.css'
})
export class MostrarTxsexoComponent implements OnInit{
  listado:Pacientes[]=[]
  constructor(private servicio:DSService){}
  ngOnInit(): void {
    this.listado=this.servicio.listadopacientes
  }
}
