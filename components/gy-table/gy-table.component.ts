import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {GyTablePropertyListModel} from "../../models/gy.table.property.list.model";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'gy-table',
  templateUrl: './gy-table.component.html',
  styleUrls: ['./gy-table.component.scss']
})
export class GyTableComponent implements OnInit {

  // Data
  @Input() dataSource!: any;
  @Input() tableData!: GyTablePropertyListModel;
  @Input() perPageLabel: string = 'Items per page';
  @Input() pageSizeOptions!: number[];

  // Conditionals
  @Input() showPaginator = true;
  @Input() fixedLayout = true;

  // Style
  @Input() headerTextColor: string = 'black';
  @Input() headerBgColor!: string;

  // Mat sort control
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.setDataSource(this.dataSource);
    this.setPaginator();
  }

  setDataSource(data: any) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.sort = this.sort;
    this.setPaginator();
  }

  setPaginator(): void {
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      if (this.paginator && this.paginator !== undefined) {
        this.paginator._intl.itemsPerPageLabel = this.perPageLabel;
      }
    });
  }

  sortData() {
    this.dataSource.sort = this.sort;
  }
}
