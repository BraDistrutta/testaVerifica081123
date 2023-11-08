import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'elementi',
  templateUrl: './elementi.component.html',
  styleUrls: ['./elementi.component.css']
})
export class ElementiComponent {
  @Input() listaDati: any;
  @Input() datoCard:string = "";
  @Input() datoClick:string = "";
  cell:string = "";

  @Output() sendCell = new EventEmitter();

  oggettoLista:any;
  ngOnChanges() {
    this.listaDati = JSON.parse(this.listaDati);
  }

  inviaCell(cellN:any){
    this.sendCell.emit(cellN);
  }

  protected readonly JSON = JSON;
}
