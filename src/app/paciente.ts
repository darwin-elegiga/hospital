export class Pacientes{
  nombre:string;
  apellido:string;
  ci:string;
  sala:number;
  edad:number;
  municipio:string;
  sexo:boolean;
  constructor(nombre:string='',apellido:string='',ci:string='',sala:number=0,edad:number=0,municipio:string='',sexo:boolean=false){
    this.nombre=nombre;
    this.apellido=apellido;
    this.ci=ci;
    this.sala=sala;
    this.edad=edad;
    this.municipio=municipio;
    this.sexo=sexo
  }
}
