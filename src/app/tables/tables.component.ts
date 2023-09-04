import { Component } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {

displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'ARUN', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'HYRA', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'LITH', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'BERY', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'BON', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'CATHI', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'NYTH', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'OMAN', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'FLURA', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

