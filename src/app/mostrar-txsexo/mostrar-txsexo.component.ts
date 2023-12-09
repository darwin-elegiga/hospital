import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DSService } from '../ds.service';
import { Pacientes } from '../paciente';

@Component({
  selector: 'app-mostrar-txsexo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mostrar-txsexo.component.html',
  styleUrl: './mostrar-txsexo.component.css'
})
export class MostrarTxsexoComponent implements OnInit{
  listado:Pacientes[]=[]


  aux:number[]=[];
  hombres:number=0;
  mujeres:number=0;

  cantidad(){
    for(let paciente of this.listado){
      if(paciente.sexo==true){
        this.hombres++
      }
      if(paciente.sexo==false){
        this.mujeres++
      }
    }
    this.aux=[this.hombres,this.mujeres];

  }

  constructor(private servicio:DSService){}
  ngOnInit(): void {
    this.listado=this.servicio.listadopacientes;
    this.cantidad();
  }
}
