import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

export class Row {
  constructor(
    public name: string,
    public score_display: string,
    public score_num: number,
  ) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  displayedColumns = ['name', 'score_display', 'score_num'];
  @ViewChild(MatSort) sort;

  tableData(): MatTableDataSource<Row> {
    let data: Array<Row> = [
      new Row('Alice', '2', 2),
      new Row('Bob', '2½', 2.5),
      new Row('Charlie', '3', 3),
      new Row('David', '½', 0.5),
    ];
    let result = new MatTableDataSource(data);
    // Reversing the order of the following two statements fixes the problem
    result.sort = this.sort;
    result.sortingDataAccessor = (data, col) => {
      if (col == 'score_display') {
        return data.score_num;
      } else {
        return data[col];
      }
    };
    return result;
  }
}
