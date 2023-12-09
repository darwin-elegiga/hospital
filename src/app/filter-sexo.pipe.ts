import { Pipe, PipeTransform } from '@angular/core';
import { Pacientes } from './paciente';

@Pipe({
  name: 'filterSexo',
  standalone: true
})
export class FilterSexoPipe implements PipeTransform {

  transform(value: Pacientes[]): Pacientes[] {
    var aux:Pacientes[]=[];
    for(let paciente of value){

    }
    return aux;
  }

}
