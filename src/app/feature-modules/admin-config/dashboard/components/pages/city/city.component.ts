import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { firstValueFrom } from 'rxjs';
import { City } from 'src/app/models/city';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent {
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'name', 'state', 'zipCode', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  cities: Array<City> = [];

  constructor(private cityService: CityService) {
    this.dataSource.data = this.cities;
  }

  ngOnInit(): void {
    this.getAllCities();
  }

  getAllCities(): void {
    this.cityService.getAllCities().subscribe(
      (data: any) => {
        this.cities = data;
        this.dataSource.data = this.cities;

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error: any) => {
        console.log('Error getting cities: ', error);
      }
    );
  }

  applyFilter(filterValue: string): void {
    if (filterValue.trim().length > 0) {
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  }

  addNewCity(): void {
    console.log('Add new city');
  }

  editRow(row: any): void {
    console.log('Edit row: ', row);
  }

  deleteRow(row: any): void {
    console.log('Delete row: ', row);
  }
}
