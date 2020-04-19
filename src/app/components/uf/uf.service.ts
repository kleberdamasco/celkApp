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
  baseURL : string = "https://celk-app-backend.herokuapp.com/api/v1/fs";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg : string, isError : boolean = false) : void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  createUF(uf : Uf) : Observable<Uf>{
    return this.http.post<Uf>(`${this.baseURL}/create`, uf);
  }

  readAll() : Observable<Uf[]> {
    return this.http.get<Uf[]>(`${this.baseURL}/all`);
  }

  readById(id : string) : Observable<Uf> {
    return this.http.get<Uf>(`${this.baseURL}/id/${id}`)
  }

  update(uf : Uf) : Observable<Uf> {
    return this.http.put<Uf>(`${this.baseURL}/update/`, uf)
  }

  delete(id : string) : Observable<Uf> {
    return this.http.delete<Uf>(`${this.baseURL}/delete/${id}`);
  }

}
