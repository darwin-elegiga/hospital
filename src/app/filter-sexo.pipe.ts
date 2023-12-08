import { Pacientes } from './paciente';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSexo',
  standalone: true
})
export class FilterSexoPipe implements PipeTransform {

  transform(value: Pacientes[]): number[] {
    let aux:number[]=[];
    let hombres:number=0;
    let mujeres:number=0;

    for(let paciente of value){
      if(paciente.sexo==true){
        hombres++
      }
      if(paciente.sexo==false){
        mujeres++
      }
    }
    aux=[hombres,mujeres];
    return aux;
  }

}
