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
       email: this.datos.value.email,
       subject: 'Request for' +''+ this.datos.value.name,
       mes: this.datos.value.mes +''+ 'Cell phone number:' + this.datos.value.number 

      }
      this.httpclien.post('http://localhost:8080/envio', params).subscribe(resp=>{
        console.log(resp);
      })
      console.log(params);
    }
}
