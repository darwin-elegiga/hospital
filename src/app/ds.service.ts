import { Pacientes } from './paciente';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DSService {

  paciente1:Pacientes= new Pacientes("darwin","Elegiga","1234",15,21,"Palma Soriano",true)
  paciente2:Pacientes= new Pacientes("win","Elegiga","02100682665",15,19,"Santiago de Cuba",false)
  paciente3:Pacientes= new Pacientes("SIII","Elegiga","021006",10,20,"Contramaestre",true)
  paciente4:Pacientes= new Pacientes("WII","Elegiga","0210",2,15,"Palma Soriano",false)
  paciente5:Pacientes= new Pacientes("AWII","Elegiga","02",2,12,"Palma Soriano",true)

  listadopacientes:Pacientes[]=[this.paciente1,this.paciente2,this.paciente3,this.paciente4,this.paciente5];



  constructor() { }
}
