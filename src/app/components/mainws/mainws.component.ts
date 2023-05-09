import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {EChartsOption} from 'echarts';
import * as echarts from 'echarts'; 
// @ts-ignore
import * as  worldm from 'src/assets/world.json'; 
@Component({
  selector: 'app-mainws',
  templateUrl: './mainws.component.html',
  styleUrls: ['./mainws.component.scss']
})
export class MainwsComponent {
 
     ngOnInit(): void{
     }
  
     datos: FormGroup;
     constructor(private httpclien:HttpClient) {
     this.datos = new FormGroup({
        name: new FormControl(''),
        email: new FormControl('', [Validators.email]),
        number: new FormControl(''),
        company: new FormControl(''),
        address: new FormControl(''),
        city: new FormControl(''),
        country: new FormControl(''),
        pcode: new FormControl(''),
        wpn: new FormControl(''),
        mpn: new FormControl(''),
        noeb: new FormControl(''),
        ieb: new FormControl(''),
        bt: new FormControl(''),
        eoc: new FormControl(''),
        tua: new FormControl('')
     })
     }
 
     enviocorreo(){
       let params = { 
        email: "orders@kivahan.com.au",
        subject: 'Request for buy' +' '+ this.datos.value.name +' - '+ this.datos.value.company,
        mes: this.datos.value.mes +' '+ '\nAddress:' + this.datos.value.address + '\nCity:' + this.datos.value.city + '\nCountry:' + this.datos.value.country  + '\nPostal code:' + this.datos.value.pcode + '\nWork phone number:' + this.datos.value.wpn + '\nMobile phone number:' + this.datos.value.mpn + '\nNew or Existing Business:' + this.datos.value.noeb + '\nIf existing business, who is your current coffee roaster?:' + this.datos.value.ieb + '\nBussines type:' + this.datos.value.bt + '\nEstimated or Current Pounds per Week:' + this.datos.value.eoc + '\nTell us about your ideal coffee profile::' + this.datos.value.tua
 
       }
       this.httpclien.post('http://localhost:8080/envio', params).subscribe(resp=>{
         console.log(resp);
       })
       window.location.reload();
       console.log(params);
     }
}
