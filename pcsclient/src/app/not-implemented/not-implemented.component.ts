import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-implemented',
  templateUrl: './not-implemented.component.html',
  styleUrls: ['./not-implemented.component.sass']
})
export class NotImplementedComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    this.router.navigate(['/dashboard/wizards/incrawizard']);
  }

}
