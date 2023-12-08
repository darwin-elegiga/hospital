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
  pacientesSala:string[]=[];



  constructor(private servicio:DSService){}
  ngOnInit(): void {
    this.listado=this.servicio.listadopacientes;
    for(let i=0; i<this.listado.length;i++){
      this.pacientesSala.push(this.listado[i].nombre +" "+ this.listado[i].apellido)
    }
    this.pacientesSala.sort();
  }


}
