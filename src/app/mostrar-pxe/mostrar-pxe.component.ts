import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterCIPipe } from '../filter-ci.pipe';
import { DSService } from '../ds.service';
import { Pacientes } from '../paciente';

@Component({
  selector: 'app-mostrar-pxe',
  standalone: true,
  imports: [CommonModule,FormsModule,FilterCIPipe],
  templateUrl: './mostrar-pxe.component.html',
  styleUrl: './mostrar-pxe.component.css'
})
export class MostrarPxeComponent implements OnInit{
  edad:number=0;
  listado:Pacientes[]=[];
  constructor(private servicio:DSService){}
  ngOnInit(): void {
    this.listado=this.servicio.listadopacientes
  }

}
