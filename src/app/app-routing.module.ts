import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home/login'
  },
  {
      path: '**',
      redirectTo: 'home/login'
  }
];
// TODO: Cambiar redireccion para que acepte otras rutas
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
