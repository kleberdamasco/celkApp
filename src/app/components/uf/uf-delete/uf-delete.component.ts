import {Component, OnInit} from '@angular/core';
import {Uf} from "../uf.model";
import {UfService} from "../uf.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-uf-delete',
  templateUrl: './uf-delete.component.html',
  styleUrls: ['./uf-delete.component.scss']
})
export class UfDeleteComponent implements OnInit {

  uf : Uf;

  constructor(private ufService : UfService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.ufService.readById(this.route.snapshot.paramMap.get("id")).subscribe(value => {
      this.uf = {...value};
    })
  }

  delete() : void {
    this.ufService.delete(this.uf.id.toString()).subscribe(value => {
      this.ufService.showMessage('Registro deletado com sucesso!');
      this.back();
    });
  }

  back() : void {
    this.router.navigate(['/uf'])
  }

}
