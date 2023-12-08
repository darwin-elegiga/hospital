import { Pipe, PipeTransform } from '@angular/core';
import { Pacientes } from './paciente';

@Pipe({
  name: 'filterCI',
  standalone: true
})
export class FilterCIPipe implements PipeTransform {

  transform(value: Pacientes[], ci:string,edad:number): Pacientes[] {

    let aux:Pacientes[]=[]

 if(ci){
  for(let paciente of value){
    if(paciente.ci.indexOf(ci)>-1){
      aux.push(paciente)
    }
  }
 }
 if(edad!=0){
  for(let paciente of value){
    if(paciente.edad>=edad){
      aux.push(paciente)
    }
  }

 }
    return aux;
  }

}
