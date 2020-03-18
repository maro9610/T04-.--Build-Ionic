import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'principal', pathMatch: 'full' },
  {
    path: 'principal',
    children:[{
      path:'',
      loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
    },
    {
      path:':videojuegoId',
      loadChildren: () => import('./principal/videojuego-detalle/videojuego-detalle.module').then( m => m.VideojuegoDetallePageModule),

    }
  ]
    
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
