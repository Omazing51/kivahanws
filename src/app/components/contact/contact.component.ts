import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    /**
     *
     */
    datos: FormGroup;
    constructor(private httpclien:HttpClient) {
    this.datos = new FormGroup({
       name: new FormControl('', Validators.required),
       email: new FormControl('', [Validators.required, Validators.email]),
       number: new FormControl('', Validators.required),
       mes: new FormControl('', Validators.required)
    })
    }

    enviocorreo(){
      let params = { 
       email: "info@kivahan.com.au",
       subject: 'Request for' +' '+ this.datos.value.name,
       mes: this.datos.value.mes +' '+ '\nMobile phone number:' + this.datos.value.number + '\nEmail:' + this.datos.value.email 

      }
      this.httpclien.post('http://localhost:8080/envio', params).subscribe(resp=>{
        console.log(resp);
      })
      window.location.reload();
      console.log(params);
    }
}
