import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']

})
export class ViewProductComponent {

  public electricPower: number = 0;
  public electricCurrent: number = 0;
  public electricVoltage: number = 0;
  public electricFrequency: number = 0;
  public bestProduct: string = '';
  public maxPower: number = 5000;
  public barcode: string = '';

  public data: any = null;
 
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.data = localStorage.getItem('data');
    if(this.data)
      this.data = JSON.parse(this.data);
    console.log(this.data[0].product);

    const referencePower = 2000; // Consommation moyenne de puissance électrique en watts
      const referenceCurrent = 10; // Consommation moyenne de courant électrique en ampères
      const referenceVoltage = 220; // Tension électrique moyenne en volts

      console.log(localStorage.getItem('barcode'));
      for (let i = 0; i < this.data; i++) {
        if (this.data[i].product.barcode === localStorage.getItem('barcode')) {
          this.electricPower = (parseFloat(this.data[i].product.electricPower) / referencePower) * 100;
      this.electricCurrent = (parseFloat(this.data[i].product.electricCurrent) / referenceCurrent) * 100;
      this.electricVoltage = (parseFloat(this.data[i].product.electricVoltage) / referenceVoltage) * 100;
      this.bestProduct = this.data[i].bestElectricPower[0].name.toString();
      this.barcode = this.data[i].bestElectricPower[0].barcode.toString();
      }
    }


      console.log(this.bestProduct);
      console.log(this.barcode);
  }

  redirecttobestproduct(){

    window.location.href = '/product/' + this.barcode;
  }
  
  

}
