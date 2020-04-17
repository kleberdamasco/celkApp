import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uf-crud',
  templateUrl: './uf-crud.component.html',
  styleUrls: ['./uf-crud.component.scss']
})
export class UfCrudComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  navigateToUFCreate() : void {
    this.router.navigate(['/uf/create']);
  }

}
