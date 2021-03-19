import { Component, OnInit, ViewChild } from '@angular/core';
import { Villain } from 'src/app/classes/villain';
import { HttpClientVillainService } from 'src/app/services/http-client-villain.service';
import { Router } from '@angular/router';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { VillainTransferService } from 'src/app/services/villian-transfer.services';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from 'src/app/dialog-box/dialog-box.component';
@Component({
  selector: 'app-list-villains',
  templateUrl: './list-villains.component.html',
  styleUrls: ['./list-villains.component.css']
})
export class ListVillainsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'episode', 'action'];
  villains: Villain[] = [];
  dataSource: any;
  // table ref
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  constructor(
    private villainService: HttpClientVillainService,
    private villainTransferService: VillainTransferService,
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.getVillains();
  }

  getVillains() {
    this.villainService.getVillains().subscribe(data => {
      this.villains = data;
      this.dataSource = new MatTableDataSource<Villain>(this.villains);
    });
  }

  addVillain() {
    this.router.navigate(['/villains/add-villain']);
  }

  toUpdateVillain(id: string, name: string, episode: string) {
    const villain = { id: +id, name, episode };
    this.villainTransferService.setVillain(villain);
    this.router.navigate(['/villains/edit-villain']);
  }

  /*  Modified to use the material dialog-box.component */
  deleteVillain(id: string, name: string, episode: string) {
    // if (confirm('Do you wish to delete ' + name)) {
      const villain = { id: +id, name, episode };
      this.villainService.deleteVillain(villain).subscribe();
      this.getVillains();
    // }
  }

  /**
   *
   * Material dialog-box.component.ts
   *
   */
  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'Add') {
        this.addRowData(result.data);
      } else if (result.event === 'Update') {
        this.updateRowData(result.data);
      } else if (result.event === 'Delete') {
        // this.deleteRowData(result.data);
        this.deleteVillain(result.data.id, result.data.name, result.data.episode);
      }
    });
  }

  addRowData(rowObj) {
    const d = new Date();
    this.dataSource.push({
      id: d.getTime(),
      name: rowObj.name
    });
    this.table.renderRows();

  }
  updateRowData(rowObj) {
    this.dataSource = this.dataSource.filter((value, key) => {
      if (value.id === rowObj.id) {
        value.name = rowObj.name;
      }
      return true;
    });
  }
  deleteRowData(rowObj) {
    this.dataSource = this.dataSource.filter((value, key) => {
      return value.id !== rowObj.id;
    });
  }

}
