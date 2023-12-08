import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DSService } from '../ds.service';
import { Pacientes } from '../paciente';

@Component({
  selector: 'app-mostrar-ixm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mostrar-ixm.component.html',
  styleUrl: './mostrar-ixm.component.css'
})
export class MostrarIxmComponent  implements OnInit{
  listado:Pacientes[]=[];
  municipios:string[]=[];
  cantidad:number[]=[];
  porciento(){
    var arraymunicipios:string[]=[];

    for(let municipio of this.listado){
      arraymunicipios.push(municipio.municipio);
    }
    var municipiosorganizados=new Set(arraymunicipios)
    this.municipios=Array.from(municipiosorganizados);

    for(let i=0;i<this.municipios.length;i++){
      var contador:number=0;
      for(let j=0;j<arraymunicipios.length;j++){
        if(this.municipios[i]==arraymunicipios[j]){
          contador++;
        }
      }
      this.cantidad.push(contador/arraymunicipios.length)
    }


  }


  constructor(private servicio:DSService){}
  ngOnInit(): void {
    this.listado=this.servicio.listadopacientes;
    this.porciento();
  }
}
