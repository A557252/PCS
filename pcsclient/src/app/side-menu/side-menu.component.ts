import { Component, OnInit, ChangeDetectorRef, ViewChild, SimpleChanges } from '@angular/core';
import { TokenmanagemnetService } from '../shared/services/tokenmanagemnet.service';
import { Router} from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  sideNavList: any = [
    {
      title: 'Home', icon: 'home', link:'/dashboard'
    },
    {
      title: 'Maintain', icon: 'settings', link:'/dashboard/umimplemented'
    },
    { title: 'Flight Schedule', icon: 'access_time', link:'/dashboard/umimplemented' },
    {
      title: 'Wizards', icon: 'library_books',
      subMenu: [
        { title: 'Snapshot/Compose Schedule Wizard', icon: 'SW', link: '/dashboard/umimplemented' },
        { title: 'Interface Wizard', icon: 'IW', link: '/dashboard/umimplemented'  },
        { title: 'Incra Import Wizard', icon: 'IIW', link: './wizards/incrawizard', }
      ]
    },
    { title: 'Export', icon: 'import_export' ,
    subMenu:[		
      {title:'Batch Scheduling' ,icon :'BS' , link:'./exports/batchscheduling'}		
    ]
  },
    { title: 'Checks', icon: 'check_box',link:'/dashboard/umimplemented' },
    { title: 'Help', icon: 'help',link:'/dashboard/umimplemented' }
  ];
  private mobileQuery: MediaQueryList;
  //private _mobileQueryListener: () => void;
  @ViewChild('klmSideNav') klmSideNav : any;
  menuIcon: String = '';

  constructor(private tokenMangement:TokenmanagemnetService,private router:Router,  private media: MediaMatcher,
    private changeDetectorRef: ChangeDetectorRef) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    //this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  _mobileQueryListener = () => {
    this.setMenuIcon();
    this.changeDetectorRef.detectChanges();
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.setMenuIcon();
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  logoutUser(){
    this.tokenMangement.logoutUser();
    this.router.navigate(['/login']);
  }
  navigateClick(){
    if(this.mobileQuery.matches) {
      this.klmSideNav.close();
    }
  }
  checkExpansion(link){
    if(link=='Wizards')
      return true;
    else
      return false;
  }
  getActiveOption(url){
    if(url==="/dashboard/umimplemented"){
      return "";
    }else{
      return "activeOption";
    }
  }
  setMenuIcon() {
    if(this.mobileQuery.matches) {
      this.menuIcon = 'menu';
      return;
    }
    if(this.klmSideNav.opened) {
      this.menuIcon = 'arrow_back';
    } else {
      this.menuIcon = 'menu';
    }
    this.changeDetectorRef.detectChanges();
  }
}