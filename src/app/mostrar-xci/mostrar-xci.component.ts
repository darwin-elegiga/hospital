import { Pacientes } from './../paciente';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DSService } from '../ds.service';
import { FormsModule } from '@angular/forms';
import { FilterCIPipe } from '../filter-ci.pipe';

@Component({
  selector: 'app-mostrar-xci',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterCIPipe],
  templateUrl: './mostrar-xci.component.html',
  styleUrl: './mostrar-xci.component.css'
})
export class MostrarXciComponent implements OnInit{
  carnet:string="";
  filtro:number=0;
  listado:Pacientes[]=[]
  paciente!:Pacientes;




  constructor(private servicio:DSService){}
  ngOnInit(): void {
    this.listado=this.servicio.listadopacientes;
  }

}
