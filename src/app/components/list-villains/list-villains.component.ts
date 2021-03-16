import { Component, OnInit } from '@angular/core';
import { Villain } from 'src/app/classes/villain';
import { HttpClientVillainService } from 'src/app/services/http-client-villain.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-villains',
  templateUrl: './list-villains.component.html',
  styleUrls: ['./list-villains.component.css']
})
export class ListVillainsComponent implements OnInit {

  villains: Villain[] = [];

  constructor(private villainService: HttpClientVillainService, private router: Router) { }

  ngOnInit() {
    this.getVillains();
  }

  getVillains() {
    this.villainService.getVillains().subscribe(data => {
      this.villains = data;
    });
  }

  addVillain() {
    this.router.navigate(['/villians/add-villain']);
  }

  editVillain() {
    this.router.navigate(['/villians/edit-villain']);
  }

  deleteVillain() {
    this.router.navigate(['/villians/delete-villain']);
  }

}
