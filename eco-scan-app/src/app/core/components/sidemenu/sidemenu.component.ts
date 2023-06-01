import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  @Input() isOpen: boolean = false;
  public sessionStorage = sessionStorage;
  public data: any = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  hideMenu() {
    this.isOpen = !this.isOpen;
  }

  getData() {
    this.http.get('http://localhost:8000/api/doc/product')
      .pipe(
        catchError((error) => {
          console.error(error);
          return new Observable<any>(); // Retourne un observable vide en cas d'erreur
        })
      )
      .subscribe((response) => {
        this.data = response;
        console.log(this.data);
      });
  }

  getDataSession() {
    const data = this.sessionStorage.getItem('data');
  }
}
