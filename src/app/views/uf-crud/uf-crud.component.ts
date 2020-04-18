import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HeaderService} from "../../components/template/header/header.service";

@Component({
  selector: 'app-uf-crud',
  templateUrl: './uf-crud.component.html',
  styleUrls: ['./uf-crud.component.scss']
})
export class UfCrudComponent implements OnInit {

  constructor(private router : Router, private headerService : HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de UF',
      icon: 'storefront',
      routeUrl: '/uf'
    }
  }

  ngOnInit(): void {
  }

  navigateToUFCreate() : void {
    this.router.navigate(['/uf/create']);
  }

}
