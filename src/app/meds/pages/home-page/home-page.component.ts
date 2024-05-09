import { Component, OnInit } from '@angular/core';
import { MedsService } from '../../services/meds.service';
import { Med } from '../../interfaces/med.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: ``
})
export class HomePageComponent implements OnInit {


  public meds: Med[] = [];

  constructor( private medsService: MedsService ) {}

  ngOnInit(): void {
    this.medsService.getMeds()
      .subscribe( meds => this.meds = meds);
  }

}
