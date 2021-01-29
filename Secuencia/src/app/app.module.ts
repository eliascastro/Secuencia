import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { HomeComponent } from './home/home.component';
import { WaitingComponent } from './waiting/waiting.component';
import { GameComponent } from './game/game.component';
import { StartComponent } from './start/start.component';
import { CreateDialog } from './home/create-dialog/create.dialog';
import { JoinDialog } from './home/join-dialog/join.dialog';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    JoinDialog,
    CreateDialog,
    AppComponent,
    HomeComponent,
    WaitingComponent,
    GameComponent,
    StartComponent,
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatDividerModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
