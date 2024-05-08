import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {

  public sideBarItems = [
    { label: 'Home', icon: 'home', url: './home' },
    { label: 'Create', icon: 'add', url: './create' },
  ]

}
