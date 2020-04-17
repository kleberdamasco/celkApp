import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";
import {Uf} from "./uf.model";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UfService {

  // baseURL : string = "http://localhost:8080/api/v1/fs";
  baseURL : string = "https://celkapp-backend.herokuapp.com/api/v1/fs";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showConsole(msg : string) : void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  createUF(uf : Uf) : Observable<Uf>{
    console.table(uf, `${this.baseURL}/create`);
    return this.http.post<Uf>(`${this.baseURL}/create`, uf);
  }

}
