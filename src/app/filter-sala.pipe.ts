import { Pipe, PipeTransform } from '@angular/core';
import { Pacientes } from './paciente';

@Pipe({
  name: 'filterSala',
  standalone: true
})
export class FilterSalaPipe implements PipeTransform {

  transform(value: Pacientes[], sala:number,paciente:Pacientes[]): Pacientes[] {
    let aux:Pacientes[]=[];
    for(let i=0;i<value.length; i++){
      if(paciente[i].sala==sala){
        aux.push(paciente[i] )
      }
    }

    aux.sort((a,b)=>{
      if(a.nombre.toLowerCase()<b.nombre.toLowerCase()){
        return -1
      }
      if(a.nombre.toLowerCase()>b.nombre.toLowerCase()){
        return 1
      }
      return 0;
    })


    return aux;
  }

}
