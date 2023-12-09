import { Pipe, PipeTransform } from '@angular/core';
import { Pacientes } from './paciente';

@Pipe({
  name: 'filterNombre',
  standalone: true
})
export class FilterNombrePipe implements PipeTransform {

  transform(value: Pacientes[], nombre:string): Pacientes[] {
    var aux:Pacientes[]=[];

    for(let paciente of value){
      if(paciente.nombre.toLowerCase().indexOf(nombre.toLowerCase())>-1){
        aux.push(paciente);
      }

    }

    return aux;
  }

}
