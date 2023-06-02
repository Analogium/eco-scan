import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss'],
})
export class ViewProductComponent {
  public electricPower: number = 0;
  public electricCurrent: number = 0;
  public electricVoltage: number = 0;
  public electricFrequency: number = 0;
  public bestProduct: string = '';
  public maxPower: number = 5000;
  public barcode: string = '';
  public name: string = '';

  public data: any = null;

  constructor(private http: HttpClient) {}

  async ngOnInit(): Promise<void> {
    this.data = localStorage.getItem('data');
    if (this.data) this.data = await JSON.parse(this.data);

    const referencePower = 500; // Consommation moyenne de puissance électrique en watts
    const referenceCurrent = 5; // Consommation moyenne de courant électrique en ampères
    const referenceVoltage = 220; // Tension électrique moyenne en volts

    if (this.data) {
      let isFound = false;
      for (let i = 0; i < this.data.length; i++) {
        console.log(i);
        if (this.data[i].product.barcode === localStorage.getItem('barcode')) {
          this.name = this.data[i].product.name;
          this.electricPower =
            (parseFloat(this.data[i].product.electricPower) / referencePower) *
            100;
          this.electricCurrent =
            (parseFloat(this.data[i].product.electricCurrent) /
              referenceCurrent) *
            100;
          this.electricVoltage =
            (parseFloat(this.data[i].product.electricVoltage) /
              referenceVoltage) *
            100;
          if (
            this.data[i].product.id !== this.data[i].bestElectricPower[0].id
          ) {
            this.bestProduct =
              this.data[i].bestElectricPower[0].name.toString();
            this.barcode = this.data[i].bestElectricPower[0].barcode.toString();
          }
          isFound = true;
          break;
        }
      }

      if (!isFound) {
        this.http
          .get(
            'http://localhost:8000/api/product/best/' +
              localStorage.getItem('barcode')
          )
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
        window.location.href = '/product/' + localStorage.getItem('barcode');
      }
    } else {
      this.http
        .get(
          'http://localhost:8000/api/product/best/' +
            localStorage.getItem('barcode')
        )
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
        window.location.href = '/product/' + localStorage.getItem('barcode');
    }
  }

  redirecttobestproduct() {
    localStorage.setItem('barcode', this.barcode);
    window.location.href = '/product/' + this.barcode;
  }
}
