import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  datos: FormGroup;
  constructor(private httpclien:HttpClient) {
  this.datos = new FormGroup({
     emailn: new FormControl('',  Validators.email),
  })
  }

  enviocorreo(){
    let params = { 
     email: "info@kivahan.com.au",
     subject: 'I want subscribe to newsletter' +' '+ this.datos.value.emailn,
     mes: 'Hello, i want susbcribe in your newsletter and received information and news '+ '\nEmail:' + this.datos.value.emailn 

    }
    this.httpclien.post('http://localhost:8080/envio', params).subscribe(resp=>{
      console.log(resp);
    })
    window.location.reload();
    console.log(params);
  }
abrirface()
{
  window.open("https://www.facebook.com/kivahanexperiencecoffee?mibextid=ZbWKwL");
}
abririnsta()
{
  window.open("https://instagram.com/kivahanexperience?igshid=NTc4MTIwNjQ2YQ==");
}


}
