import { Component, OnInit } from '@angular/core';
import {Uf} from "../uf.model";
import {UfService} from "../uf.service";

@Component({
  selector: 'app-uf-read',
  templateUrl: './uf-read.component.html',
  styleUrls: ['./uf-read.component.scss']
})
export class UfReadComponent implements OnInit {

  ufs : Uf[];
  displayedColumns = ["id","name","initials","created","actions"]

  constructor(private ufService : UfService) { }

  ngOnInit(): void {
    this.ufService.readAll().subscribe(ufs => this.ufs = ufs)
  }

}
