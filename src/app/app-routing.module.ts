import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from "./views/home/home.component";
import {UfCrudComponent} from "./views/uf-crud/uf-crud.component";
import {UfCreateComponent} from "./components/uf/uf-create/uf-create.component";
import {UfUpdateComponent} from "./components/uf/uf-update/uf-update.component";
import {UfDeleteComponent} from "./components/uf/uf-delete/uf-delete.component";


const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  }, {
    path: "uf",
    component: UfCrudComponent
  },
  {
    path: "uf/create",
    component: UfCreateComponent
  },
  {
    path: "uf/update/:id",
    component: UfUpdateComponent
  },
  {
    path: "uf/delete/:id",
    component: UfDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
