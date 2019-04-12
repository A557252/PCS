import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TokenmanagemnetService } from '../shared/services/tokenmanagemnet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  sideNavList: any = [
    {
      title: 'Maintain', icon: 'settings',
    },
    { title: 'Flight Schedule', icon: 'access_time',  },
    {
      title: 'Wizards', icon: 'W',
      subMenu: [
        { title: 'Snapshot/Compose Schedule Wizard', icon: 'SW',  },
        { title: 'Interface Wizard', icon: 'IW',  },
        { title: 'Incra Import Wizard', icon: 'IIW', link: './wizards/incrawizard', }
      ]
    },
    { title: 'Export', icon: 'import_export' },
    { title: 'Checks', icon: 'check_box' }
  ];
  constructor(private tokenMangement:TokenmanagemnetService,private router:Router) { }

  ngOnInit() {
  }

  logoutUser(){
    this.tokenMangement.logoutUser();
    this.router.navigate(['/login']);
  }

}
