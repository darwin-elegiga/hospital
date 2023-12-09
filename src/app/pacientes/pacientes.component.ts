import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DSService } from '../ds.service';
import { Pacientes } from '../paciente';
import { FilterNombrePipe } from '../filter-nombre.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [CommonModule,FilterNombrePipe,FormsModule],
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.css'
})
export class PacientesComponent implements OnInit {
  listado:Pacientes[]=[];
  nombre:string=''
  constructor(private servicio:DSService){}
  ngOnInit(): void {
    this.listado=this.servicio.listadopacientes
  }
}
