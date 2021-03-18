import { Component, OnInit } from '@angular/core';
import { Villain } from 'src/app/classes/villain';
import { HttpClientVillainService } from 'src/app/services/http-client-villain.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { VillainTransferService } from 'src/app/services/villian-transfer.services';
@Component({
  selector: 'app-list-villains',
  templateUrl: './list-villains.component.html',
  styleUrls: ['./list-villains.component.css']
})
export class ListVillainsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'episode', 'action'];
  villains: Villain[] = [];
  dataSource: any;

  constructor(
    private villainService: HttpClientVillainService,
    private villainTransferService: VillainTransferService,
    private router: Router) { }

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
    this.router.navigate(['/villians/add-villain']);
  }

  toUpdateVillain(id: string, name: string, episode: string) {
    const villain = { id: +id, name, episode };
    this.villainTransferService.setVillain(villain);
    this.router.navigate(['/villians/edit-villain']);
  }

  editVillain(id: number) {
    this.router.navigate(['/villians/edit-villain']);
  }

  deleteVillain(id: number) {
    this.router.navigate(['/villians/delete-villain']);
  }

}
