import {Component, OnInit} from '@angular/core';
import {UfService} from "../uf.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Uf} from "../uf.model";

@Component({
  selector: 'app-uf-update',
  templateUrl: './uf-update.component.html',
  styleUrls: ['./uf-update.component.scss']
})
export class UfUpdateComponent implements OnInit {

  ufEdit : Uf;

  constructor(private ufService : UfService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.ufService.readById(this.route.snapshot.paramMap.get("id")).subscribe(uf => {
      this.ufEdit = {...uf, created : new Date()};
    });
  }

  updateUf() : void {
    this.ufService.update(this.ufEdit).subscribe(value => {
      this.ufService.showMessage("Registro atualizado com sucesso!");
      this.back();
    });
  }

  back() : void {
    this.router.navigate(['/uf']);
  }

}
