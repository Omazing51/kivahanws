import { Component } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import {pdfDefaultOptions} from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  /**
   *
   */
  constructor() {
  }

  ngOnInit(){
  }

  abrir(){
    window.open('https://kivahan.com.au/menuc', '_blank');
  }
  abrir2(){
    // window.open('https://effulgent-kelpie-1a9960.netlify.app/menub', '_blank');
     window.open('https://kivahan.com.au/menub', '_blank');
  }


}
