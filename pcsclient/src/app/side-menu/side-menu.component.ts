import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  sideNavList: any = [
    {
      title: 'Maintain', icon: 'settings', link: '',
    },
    { title: 'Flight Schedule', icon: 'access_time', link: '', },
    {
      title: 'Wizards', icon: 'W',
      subMenu: [
        { title: 'Snapshot/Compose Schedule Wizard', icon: 'SW', link: '', },
        { title: 'Interface Wizard', icon: 'IW', link: '', },
        { title: 'Incra Import Wizard', icon: 'IIW', link: './wizards/incrawizard', }
      ]
    },
    { title: 'Export', icon: 'import_export' },
    { title: 'Checks', icon: 'check_box' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
