import { Routes } from '@angular/router';
import { MostrarXciComponent } from './mostrar-xci/mostrar-xci.component';
import { MostrarPxsComponent } from './mostrar-pxs/mostrar-pxs.component';
import { MostrarPxeComponent } from './mostrar-pxe/mostrar-pxe.component';
import { MostrarIxmComponent } from './mostrar-ixm/mostrar-ixm.component';
import { MostrarTxsexoComponent } from './mostrar-txsexo/mostrar-txsexo.component';
import { HomeComponent } from './home/home.component';
import { PacientesComponent } from './pacientes/pacientes.component';

export const routes: Routes = [

  {path: 'pxs', component:MostrarPxsComponent},
  {path: 'xci', component:MostrarXciComponent},
  {path: 'xpe', component:MostrarPxeComponent},
  {path: 'pxsexo', component:MostrarTxsexoComponent},
  {path: 'pxm', component:MostrarIxmComponent},
  {path: '', component:HomeComponent},
  {path: 'pacientes', component:PacientesComponent},
];

