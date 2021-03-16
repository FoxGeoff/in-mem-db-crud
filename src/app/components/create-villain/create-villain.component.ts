import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClientVillainService } from 'src/app/services/http-client-villain.service';

@Component({
  selector: 'app-create-villain',
  templateUrl: './create-villain.component.html',
  styleUrls: ['./create-villain.component.css']
})
export class CreateVillainComponent implements OnInit, OnDestroy {

  createVillainForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    episode: new FormControl('')
  });

  villainSubscription: Subscription;

  constructor(private villainService: HttpClientVillainService, private router: Router) { }

  ngOnInit(): void {
  }

  createVillain() {
    if (this.createVillainForm.valid) {
      const id = this.createVillainForm.get('id').value;
      const name = this.createVillainForm.get('name').value;
      const episode = this.createVillainForm.get('episode').value;

      this.villainSubscription = this.villainService.addVillain(id, name, episode).subscribe();

      this.router.navigateByUrl('/');
    }
  }

  ngOnDestroy(): void {
    if (this.villainSubscription) {
      this.villainSubscription.unsubscribe();
    }
  }

}
