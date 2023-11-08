import { Component } from '@angular/core';

@Component({
  selector: 'general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent {
  dati: any;
  dato:string = "";
  obj:any;
  numeroCell:any = null;

  ngOnInit() {
    fetch('https://person.mauroracca.repl.co/').then(response => response.json()).then(data => {
      this.dati = data;
      console.log(this.dati);
    })
  }

  inviaDati(oggetto:any) {
    /*
    this.vet.splice(0, this.vet.length);
    for(let i = 0; i < this.dati[chiave].length; i++){
      this.vet.push(this.dati[chiave][i]);
    }
    this.dato = chiave;
     */
    console.log(oggetto);
    this.dato = oggetto;
    this.obj = JSON.stringify(oggetto);
  }

  getCell(cell:any){
    this.numeroCell = cell;
  }

}
