import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { UfTableAngularDataSource} from './uf-table-angular-datasource';
import {Uf} from "../uf.model";

@Component({
  selector: 'app-uf-table-angular',
  templateUrl: './uf-table-angular.component.html',
  styleUrls: ['./uf-table-angular.component.scss']
})
export class UfTableAngularComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Uf>;
  dataSource: UfTableAngularDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'initials', 'created'];

  ngOnInit() {
    this.dataSource = new UfTableAngularDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
