import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { WaitingComponent } from './waiting/waiting.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'start', component: StartComponent },
  { path: 'waiting', component: WaitingComponent },
  { path: 'game', component: GameComponent },
  { path: '**',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
