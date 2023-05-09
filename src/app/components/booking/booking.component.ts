import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {

  datos: FormGroup;
  constructor(private httpclien:HttpClient) {
  this.datos = new FormGroup({
     name: new FormControl(''),
     email: new FormControl('',Validators.email),
     mpn: new FormControl(''),
     p: new FormControl(''),
     h: new FormControl('')
  })
  }

  enviocorreo(){
    let params = { 
     email: "omarlozano1215@gmail.com",
     subject: 'Booking for' +' '+ this.datos.value.name,
     mes: '\nMobile phone number:'+ this.datos.value.mpn + '\nEmail:' + this.datos.value.email  + '\nPersons:' + this.datos.value.p + '\nHour:' + this.datos.value.h  

    }
    this.httpclien.post('http://localhost:8080/envio', params).subscribe(resp=>{
      console.log(resp);
    })
    window.location.reload();
    console.log(params);
  }
}
