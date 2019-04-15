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
      title: 'Maintain', icon: 'settings', link:'umimplemented'
    },
    { title: 'Flight Schedule', icon: 'access_time',link:'umimplemented'  },
    {
      title: 'Wizards', icon: 'W',link:'umimplemented',
      subMenu: [
        { title: 'Snapshot/Compose Schedule Wizard', icon: 'SW', link:'umimplemented'  },
        { title: 'Interface Wizard', icon: 'IW', link:'umimplemented' },
        { title: 'Incra Import Wizard', icon: 'IIW', link: './wizards/incrawizard', }
      ]
    },
    { title: 'Export', icon: 'import_export',link:'umimplemented' },
    { title: 'Checks', icon: 'check_box',link:'umimplemented' }
  ];
  constructor(private tokenMangement:TokenmanagemnetService,private router:Router) { }

  ngOnInit() {
  }

  logoutUser(){
    this.tokenMangement.logoutUser();
    this.router.navigate(['/login']);
  }

}
