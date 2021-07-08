import { Component,ViewChild,AfterViewInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table'
import {MatSort} from '@angular/material/sort'
import {MatPaginator} from '@angular/material/paginator'

export interface PeriodicElement {
  name: string;
  icon: number;
  age: number;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {icon: 1, name: 'Hydrogen', age: 1.0079, email: 'H'},
  {icon: 2, name: 'Helium', age: 4.0026, email: 'He'},
  {icon: 3, name: 'Lithium', age: 6.941, email: 'Li'},
  {icon: 4, name: 'Beryllium', age: 9.0122, email: 'Be'},
  {icon: 5, name: 'Boron', age: 10.811, email: 'B'},
  {icon: 6, name: 'Carbon', age: 12.0107, email: 'C'},
  {icon: 7, name: 'Nitrogen', age: 14.0067, email: 'N'},
  {icon: 8, name: 'Oxygen', age: 15.9994, email: 'O'},
  {icon: 9, name: 'Fluorine', age: 18.9984, email: 'F'},
  {icon: 10, name: 'Neon', age: 20.1797, email: 'Ne'},
];


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {

  displayedColumns: string[] = [ 'name','icon','age', 'email'];
  // dataSource = new MatTableDataSource (ELEMENT_DATA);
  dataSource = new MatTableDataSource (ELEMENT_DATA);

  @ViewChild(MatSort)
  sort: MatSort;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor() { }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  // ngOnInit(){
  //   this.dataSource.sort = this.sort;
  // }

  applyFilter(filterValue :any){
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

}
