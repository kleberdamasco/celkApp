import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './components/template/header/header.component';
import {FooterComponent} from './components/template/footer/footer.component';
import {NavComponent} from './components/template/nav/nav.component';
import {HomeComponent} from './views/home/home.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {UfCrudComponent} from './views/uf-crud/uf-crud.component';
import {UfCreateComponent} from './components/uf/uf-create/uf-create.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {UfReadComponent} from './components/uf/uf-read/uf-read.component';
import {MatTableModule} from '@angular/material/table';
import {UfUpdateComponent} from './components/uf/uf-update/uf-update.component';
import {UfDeleteComponent} from './components/uf/uf-delete/uf-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    UfCrudComponent,
    UfCreateComponent,
    UfReadComponent,
    UfUpdateComponent,
    UfDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
