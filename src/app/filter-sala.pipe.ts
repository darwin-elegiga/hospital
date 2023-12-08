import { Pipe, PipeTransform } from '@angular/core';
import { Pacientes } from './paciente';

@Pipe({
  name: 'filterSala',
  standalone: true
})
export class FilterSalaPipe implements PipeTransform {

  transform(value: string[], sala:number,paciente:Pacientes[]): string[] {
    let aux:string[]=[];
    for(let i=0;i<value.length; i++){
      if(paciente[i].sala==sala){
        aux.push(paciente[i].nombre + " " +paciente[i].apellido)
      }
    }
    return aux.sort();
  }

}
