import { Component, OnInit } from '@angular/core';
import {UfService} from "../uf.service";
import {Router} from "@angular/router";
import {Uf} from "../uf.model";

@Component({
  selector: 'app-uf-create',
  templateUrl: './uf-create.component.html',
  styleUrls: ['./uf-create.component.scss']
})
export class UfCreateComponent implements OnInit {

  uf : Uf = {
    created: new Date(), initials: "", name: ""
  }

  constructor(private ufService : UfService, private router: Router) { }

  ngOnInit(): void {
  }

  createUF() : void {
    this.ufService.createUF(this.uf).subscribe(() =>{
      this.ufService.showMessage('Cadastrado com sucesso!');
      this.uf = {...this.uf, created : new Date()}
      this.back();
    })
  }

  back() : void {
    this.router.navigate(['/uf'])
  }

}
