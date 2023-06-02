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
  public data: any = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getDataSession();
  }

  hideMenu() {
    this.isOpen = !this.isOpen;
  }

  getDataSession() {
    this.data = localStorage.getItem('data');
    if(this.data)
      this.data = JSON.parse(this.data);
    console.log(this.data);

  }

  goToProduct(barcode: string) {
    localStorage.setItem('barcode', barcode);
    window.location.href = '/product/' + barcode;
  }
}
