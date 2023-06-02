import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cscan',
  templateUrl: './cscan.component.html',
  styleUrls: ['./cscan.component.scss']
})
export class CscanComponent {
  public data: any = null;
  public barcodeInput: string = '';

  constructor(private http: HttpClient) { }

  getCompare() {
    const barcode = this.barcodeInput.trim();

    if (barcode && this.isValidCodeBar(barcode)) {
      this.http.get('http://localhost:8000/api/product/best/' + barcode)
        .pipe(
          catchError((error) => {
            console.error(error);
            return new Observable<any>(); // Retourne un observable vide en cas d'erreur
          })
        )
        .subscribe((response) => {
          this.data = response;
          let storedData = localStorage.getItem('data');
          let parsedData;
          if (storedData) {
            parsedData = JSON.parse(storedData);
            parsedData.push(response);
          } else {
            parsedData = [response];
          }
          localStorage.setItem('data', JSON.stringify(parsedData));
        });
    }
  }

  isValidCodeBar(codeBar: string): boolean {
    const regex = /^(\d{13})$/gm;
    return regex.test(codeBar);
  }
}
